"use client";
import { useEffect, useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { PlusCircle, FolderKanban, Users, Box, Edit, Trash2 } from "lucide-react"; // icons

interface Portfolio {
  _id?: string;
  title: string;
  category: string;
  client?: string;
  description?: string;
  thumbnailUrl: string;
  videoUrl?: string;
  featured: boolean;
  displayOrder: number;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string | null;
}

export default function PortfolioManagement() {
  const [portfolios, setPortfolios] = useState<Portfolio[]>([]);
  const [formData, setFormData] = useState<Portfolio>({
    title: "",
    category: "",
    client: "",
    description: "",
    thumbnailUrl: "",
    videoUrl: "",
    featured: false,
    displayOrder: 0,
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [showModal, setShowModal] = useState(false);

  const API_BASE = "https://viedocrew-backend.onrender.com/api/portfolio";
  const token = typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const authFetch = (url: string, options: RequestInit = {}) => {
    return fetch(url, {
      ...options,
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
        ...(options.headers || {}),
      },
    });
  };

  const fetchPortfolios = async () => {
    try {
      const res = await authFetch(API_BASE);
      if (!res.ok) throw new Error("Failed to fetch portfolios");
      const data = await res.json();
      setPortfolios(data);
    } catch (err) {
      toast.error("Error loading portfolios");
    }
  };

  const fetchPortfolioById = async (id: string) => {
    try {
      const res = await authFetch(`${API_BASE}/${id}`);
      if (!res.ok) throw new Error("Failed to fetch portfolio");
      const data = await res.json();
      setFormData(data);
      setEditingId(id);
      setShowModal(true);
    } catch {
      toast.error("Error fetching portfolio");
    }
  };

  const createPortfolio = async () => {
    try {
      const res = await authFetch(API_BASE, {
        method: "POST",
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to create portfolio");
      toast.success("Portfolio created!");
      await fetchPortfolios();
      resetForm();
    } catch {
      toast.error("Error creating portfolio");
    }
  };

  const updatePortfolio = async (id: string) => {
    try {
      const res = await authFetch(`${API_BASE}/${id}`, {
        method: "PUT",
        body: JSON.stringify(formData),
      });
      if (!res.ok) throw new Error("Failed to update portfolio");
      toast.success("Portfolio updated!");
      await fetchPortfolios();
      resetForm();
    } catch {
      toast.error("Error updating portfolio");
    }
  };

  const deletePortfolio = async (id: string) => {
    if (!confirm("Are you sure you want to delete this portfolio?")) return;
    try {
      const res = await authFetch(`${API_BASE}/${id}`, { method: "DELETE" });
      if (!res.ok) throw new Error("Failed to delete portfolio");
      toast.success("Portfolio deleted!");
      await fetchPortfolios();
    } catch {
      toast.error("Error deleting portfolio");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingId) {
      updatePortfolio(editingId);
    } else {
      createPortfolio();
    }
    setShowModal(false);
  };

  const resetForm = () => {
    setFormData({
      title: "",
      category: "",
      client: "",
      description: "",
      thumbnailUrl: "",
      videoUrl: "",
      featured: false,
      displayOrder: 0,
    });
    setEditingId(null);
  };

  useEffect(() => {
    fetchPortfolios();
  }, []);

  return (
    <div className="p-6 bg-black min-h-screen text-white font-sans">
      <ToastContainer position="top-right" autoClose={2000} theme="dark" />

      {/* Stats + Create Button */}
      <div className="flex flex-wrap items-center justify-between mb-6">
        <h2 className="text-3xl font-bold flex items-center gap-2">
          <FolderKanban size={28} /> Portfolio Management
        </h2>
        <button
          onClick={() => {
            resetForm();
            setShowModal(true);
          }}
          className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 transition px-4 py-2 rounded-lg text-white font-semibold"
        >
          <PlusCircle size={20} /> Create Portfolio
        </button>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
        <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg flex items-center gap-3">
          <Box className="text-blue-400" size={28} />
          <div>
            <p className="text-gray-400 text-sm">Total Portfolios</p>
            <h3 className="text-2xl font-bold">{portfolios.length}</h3>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg flex items-center gap-3">
          <Users className="text-green-400" size={28} />
          <div>
            <p className="text-gray-400 text-sm">Total Users</p>
            <h3 className="text-2xl font-bold">24</h3>
          </div>
        </div>
        <div className="bg-gray-900 border border-gray-700 p-4 rounded-lg flex items-center gap-3">
          <FolderKanban className="text-yellow-400" size={28} />
          <div>
            <p className="text-gray-400 text-sm">Total Projects</p>
            <h3 className="text-2xl font-bold">{portfolios.length}</h3>
          </div>
        </div>
      </div>

      {/* Portfolio Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {portfolios.map((p) => (
          <div
            key={p._id}
            className="border border-gray-700 bg-gray-900 rounded-xl p-4 shadow-lg hover:shadow-2xl transition"
          >
            <img
              src={p.thumbnailUrl || "/placeholder.png"}
              alt={p.title}
              onError={(e) => (e.currentTarget.src = "/placeholder.png")}
              className="w-full h-40 object-cover rounded-lg mb-3"
            />
            <h3 className="font-bold text-xl">{p.title}</h3>
            <p className="text-sm text-gray-400">{p.category}</p>
            {p.client && <p className="text-sm text-gray-400">Client: {p.client}</p>}
            {p.description && (
              <p className="text-sm text-gray-400 mt-1">{p.description}</p>
            )}

            {p.videoUrl && (
              <a
                href={p.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:underline text-sm block mt-2"
              >
                Watch Video
              </a>
            )}

            {p.featured && (
              <span className="inline-block bg-yellow-500 text-black text-xs px-2 py-1 rounded mt-2">
                Featured
              </span>
            )}

            <div className="mt-4 flex space-x-2">
              <button
                onClick={() => fetchPortfolioById(p._id!)}
                className="flex-1 flex items-center justify-center bg-yellow-500 hover:bg-yellow-600 text-black px-3 py-2 rounded"
              >
                <Edit size={16} />
              </button>
              <button
                onClick={() => deletePortfolio(p._id!)}
                className="flex-1 flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-3 py-2 rounded"
              >
                <Trash2 size={16} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
          <div className="bg-gray-900 p-6 rounded-lg max-w-lg w-full">
            <h3 className="text-xl font-bold mb-4">
              {editingId ? "Edit Portfolio" : "Create Portfolio"}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                placeholder="Title"
                value={formData.title}
                onChange={(e) =>
                  setFormData({ ...formData, title: e.target.value })
                }
                className="w-full p-2 bg-black border border-gray-700 rounded text-white"
                required
              />
              <input
                type="text"
                placeholder="Category"
                value={formData.category}
                onChange={(e) =>
                  setFormData({ ...formData, category: e.target.value })
                }
                className="w-full p-2 bg-black border border-gray-700 rounded text-white"
                required
              />
              <input
                type="text"
                placeholder="Client"
                value={formData.client}
                onChange={(e) =>
                  setFormData({ ...formData, client: e.target.value })
                }
                className="w-full p-2 bg-black border border-gray-700 rounded text-white"
              />
              <textarea
                placeholder="Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
                className="w-full p-2 bg-black border border-gray-700 rounded text-white"
              />
              <input
                type="text"
                placeholder="Thumbnail URL"
                value={formData.thumbnailUrl}
                onChange={(e) =>
                  setFormData({ ...formData, thumbnailUrl: e.target.value })
                }
                className="w-full p-2 bg-black border border-gray-700 rounded text-white"
                required
              />
              <input
                type="text"
                placeholder="Video URL"
                value={formData.videoUrl}
                onChange={(e) =>
                  setFormData({ ...formData, videoUrl: e.target.value })
                }
                className="w-full p-2 bg-black border border-gray-700 rounded text-white"
              />
              <label className="flex items-center space-x-2">
                <input
                  type="checkbox"
                  checked={formData.featured}
                  onChange={(e) =>
                    setFormData({ ...formData, featured: e.target.checked })
                  }
                />
                <span>Featured</span>
              </label>
              <div className="flex space-x-2">
                <button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded"
                >
                  {editingId ? "Update" : "Create"}
                </button>
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 px-4 py-2 rounded"
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
