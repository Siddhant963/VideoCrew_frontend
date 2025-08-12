"use client"

import { useState } from "react"
import { LogOut, Menu, X, Folder, MessageSquare, Upload } from "lucide-react"
import PortfolioManagement from "./PortfolioManager"
import ContactManagement from "./ContactManager"
import FileUpload from "./FileUpload"


export default function Dashboard (){
  const [activeSection, setActiveSection] = useState("portfolio")
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const menuItems = [
    { id: "portfolio", label: "Portfolio Management", icon: Folder },
    { id: "contact", label: "Contact Management", icon: MessageSquare },
    { id: "upload", label: "Upload Files", icon: Upload },
  ]

  const renderContent = () => {
    switch (activeSection) {
      case "portfolio":
        return <PortfolioManagement />
      case "contact":
        return <ContactManagement />
      case "upload":
        return <FileUpload />
      default:
        return <PortfolioManagement />
    }
  }
 const handleLogout = () => {
  // Example: Clear user session or token
  localStorage.removeItem("token"); // if you're storing an auth token
  localStorage.removeItem("user");  // if storing user details

  // Optionally redirect to login page
  window.location.href = "/login";
};

  return (
    <div className="min-h-screen bg-black flex relative overflow-hidden">
    
      <div className="absolute inset-0 z-0">
      
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px] animate-pulse" />

        
        <div className="absolute top-1/4 left-1/6 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/3 right-1/4 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-2/3 left-1/2 w-48 h-48 bg-cyan-500/5 rounded-full blur-3xl animate-float-slow" />

        
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-blue-400/10 rounded-full animate-twinkle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${3 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

     
      <div
        className={`fixed inset-y-0 left-0 z-50 w-64 bg-gray-800/95 backdrop-blur-xl border-r border-gray-700/50 shadow-2xl transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex items-center justify-between h-16 px-6 border-b border-gray-700/50">
          <h2 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
            Video Crew
          </h2>
          <button
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 transition-colors duration-200"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="mt-8 px-4">
          {menuItems.map((item, index) => {
            const Icon = item.icon
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveSection(item.id)
                  setSidebarOpen(false)
                }}
                className={`w-full flex items-center px-4 py-3 mb-2 text-left rounded-lg transition-all duration-200 animate-fade-in ${
                  activeSection === item.id
                    ? "bg-gradient-to-r from-blue-600/20 to-purple-600/20 text-blue-400 border border-blue-500/30 shadow-lg shadow-blue-500/10"
                    : "text-gray-300 hover:bg-gray-700/50 hover:text-white"
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <Icon className="w-5 h-5 mr-3" />
                {item.label}
              </button>
            )
          })}
        </nav>

        <div className="absolute bottom-4 left-4 right-4">
         
          <button
            onClick={handleLogout}
            className="w-full flex items-center px-4 py-2 text-red-400 hover:bg-red-500/10 hover:text-red-300 rounded-lg transition-all duration-200 border border-transparent hover:border-red-500/30"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      </div>

   
      <div className="flex-1 flex flex-col lg:ml-0 relative z-10">
       
        <header className="bg-gray-800/80 backdrop-blur-xl shadow-lg border-b border-gray-700/50 h-16 flex items-center justify-between px-6">
          <button
            onClick={() => setSidebarOpen(true)}
            className="lg:hidden p-2 rounded-md text-gray-400 hover:text-gray-200 hover:bg-gray-700/50 transition-colors duration-200"
          >
            <Menu className="w-5 h-5" />
          </button>

          <h1 className="text-2xl font-bold text-white capitalize">
            {menuItems.find((item) => item.id === activeSection)?.label}
          </h1>

          <div className="w-10 lg:hidden" />
        </header>

        {/* Content */}
        <main className="flex-1 p-6 overflow-auto">{renderContent()}</main>
      </div>

 
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden animate-fade-in"
          onClick={() => setSidebarOpen(false)}
        />
      )}
    </div>
  )
}

