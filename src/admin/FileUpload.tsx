"use client";

import React, { useState, useRef } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ImageIcon, Video, X, Check, Upload } from "lucide-react";

interface UploadedFile {
  id: number;
  name: string;
  size: string;
  type: "image" | "video";
  url: string;
  uploadedAt: string;
}

export default function FileUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([]);
  const [dragOver, setDragOver] = useState<"image" | "video" | null>(null);
  const [uploading, setUploading] = useState<"image" | "video" | null>(null);

  const imageInputRef = useRef<HTMLInputElement>(null);
  const videoInputRef = useRef<HTMLInputElement>(null);

  const formatFileSize = (bytes: number) => {
    if (bytes === 0) return "0 Bytes";
    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    return `${Number.parseFloat((bytes / Math.pow(k, i)).toFixed(2))} ${sizes[i]}`;
  };

  const handleFileUpload = async (files: FileList, type: "image" | "video") => {
    setUploading(type);

    const token = localStorage.getItem("token");
    if (!token) {
      toast.error("Authentication required. Please log in.");
      setUploading(null);
      return;
    }

 const endpoint =
  type === "image"
    ? "https://videocrew-api.onrender.com/api/upload/image"
    : "https://videocrew-api.onrender.com/api/upload/video";


    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const { data } = await axios.post(endpoint, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`,
          },
        });

        const newFile: UploadedFile = {
          id: Date.now() + i,
          name: file.name,
          size: formatFileSize(file.size),
          type,
          url: data?.url || URL.createObjectURL(file),
          uploadedAt: new Date().toISOString().split("T")[0],
        };

        setUploadedFiles((prev) => [...prev, newFile]);
        toast.success(`${file.name} uploaded successfully!`);
      } catch (error) {
        console.error(error);
        toast.error(`Failed to upload ${file.name}`);
      }
    }

    setUploading(null);
  };

  const handleDrop = (e: React.DragEvent, type: "image" | "video") => {
    e.preventDefault();
    setDragOver(null);
    if (e.dataTransfer.files.length > 0) {
      handleFileUpload(e.dataTransfer.files, type);
    }
  };

  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>, type: "image" | "video") => {
    if (e.target.files && e.target.files.length > 0) {
      handleFileUpload(e.target.files, type);
    }
  };

  const removeFile = (id: number) => {
    setUploadedFiles((files) => files.filter((file) => file.id !== id));
    toast.info("File removed");
  };

  const UploadZone = ({
    type,
    icon: Icon,
    title,
    description,
    accept,
  }: {
    type: "image" | "video";
    icon: React.ElementType;
    title: string;
    description: string;
    accept: string;
  }) => (
    <div
      className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-all duration-300 backdrop-blur-sm ${
        dragOver === type
          ? "border-blue-500/50 bg-blue-500/10"
          : "border-gray-600/50 hover:border-gray-500/50 hover:bg-gray-800/30"
      } ${uploading === type ? "pointer-events-none opacity-50" : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(type);
      }}
      onDragLeave={() => setDragOver(null)}
      onDrop={(e) => handleDrop(e, type)}
    >
      <input
        ref={type === "image" ? imageInputRef : videoInputRef}
        type="file"
        accept={accept}
        multiple
        onChange={(e) => handleFileSelect(e, type)}
        className="hidden"
      />
      <div className="space-y-4">
        <div
          className={`mx-auto w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300 ${
            dragOver === type ? "bg-blue-500/20 scale-110" : "bg-gray-700/50"
          }`}
        >
          {uploading === type ? (
            <div className="w-8 h-8 border-2 border-blue-500 border-t-transparent rounded-full animate-spin" />
          ) : (
            <Icon
              className={`w-8 h-8 transition-colors duration-300 ${
                dragOver === type ? "text-blue-400" : "text-gray-400"
              }`}
            />
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white mb-2">{title}</h3>
          <p className="text-gray-400 mb-4">{description}</p>
          <button
            onClick={() => (type === "image" ? imageInputRef.current?.click() : videoInputRef.current?.click())}
            disabled={uploading === type}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-lg transition-all duration-200 disabled:opacity-50 transform hover:scale-105 shadow-lg shadow-blue-500/25"
          >
            {uploading === type ? "Uploading..." : "Choose Files"}
          </button>
          <p className="text-sm text-gray-500 mt-3">or drag and drop files here</p>
        </div>
      </div>
    </div>
  );

  return (
    <div className="space-y-8">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar theme="dark" />

      {/* Header */}
      <div>
        <h2 className="text-2xl font-bold text-white mb-2">File Upload</h2>
        <p className="text-gray-400">Upload images and videos for your projects</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[
          { label: "Total Files", count: uploadedFiles.length, icon: Upload, color: "blue" },
          {
            label: "Images",
            count: uploadedFiles.filter((f) => f.type === "image").length,
            icon: ImageIcon,
            color: "green",
          },
          {
            label: "Videos",
            count: uploadedFiles.filter((f) => f.type === "video").length,
            icon: Video,
            color: "purple",
          },
        ].map((stat, i) => (
          <div
            key={i}
            className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 flex items-center"
          >
            <div className={`p-3 bg-${stat.color}-500/20 rounded-lg`}>
              <stat.icon className={`w-6 h-6 text-${stat.color}-400`} />
            </div>
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-400">{stat.label}</p>
              <p className="text-2xl font-bold text-white">{stat.count}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Upload Zones */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <UploadZone
          type="image"
          icon={ImageIcon}
          title="Upload Images"
          description="PNG, JPG, GIF up to 10MB"
          accept="image/*"
        />
        <UploadZone
          type="video"
          icon={Video}
          title="Upload Videos"
          description="MP4, MOV, AVI up to 100MB"
          accept="video/*"
        />
      </div>

      {/* Uploaded Files */}
      {uploadedFiles.length > 0 && (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-white">Uploaded Files</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {uploadedFiles.map((file) => (
              <div
                key={file.id}
                className="bg-gray-800/50 backdrop-blur-sm rounded-lg border border-gray-700/50 p-4 hover:shadow-lg hover:shadow-black/20 transition-all duration-200 group"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className={`p-2 rounded-lg ${file.type === "image" ? "bg-green-500/20" : "bg-purple-500/20"}`}>
                    {file.type === "image" ? (
                      <ImageIcon className="w-5 h-5 text-green-400" />
                    ) : (
                      <Video className="w-5 h-5 text-purple-400" />
                    )}
                  </div>
                  <button
                    onClick={() => removeFile(file.id)}
                    className="text-gray-400 hover:text-red-400 transition-colors duration-200 p-1 hover:bg-red-500/10 rounded opacity-0 group-hover:opacity-100"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
                <div className="space-y-2">
                  <h4 className="font-medium text-white truncate" title={file.name}>
                    {file.name}
                  </h4>
                  <div className="flex justify-between text-sm text-gray-400">
                    <span>{file.size}</span>
                    <span>{file.uploadedAt}</span>
                  </div>
                  <div className="flex items-center text-green-400 text-sm">
                    <Check className="w-4 h-4 mr-1" />
                    Uploaded
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
