"use client"

import type React from "react"
import { useState } from "react"
import PortfolioManager from "./PortfolioManager"
import ContactManager from "./ContactManager"

const Dashboard: React.FC = () => {
  const [activeTab, setActiveTab] = useState("portfolio")

  return (
    <div className="min-h-screen bg-black text-white pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold font-montserrat mb-4">Admin Dashboard</h1>
          <div className="flex space-x-4">
            <button
              onClick={() => setActiveTab("portfolio")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "portfolio" ? "bg-white text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Portfolio Management
            </button>
            <button
              onClick={() => setActiveTab("contacts")}
              className={`px-6 py-2 rounded-lg font-medium transition-colors ${
                activeTab === "contacts" ? "bg-white text-black" : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              Contact Inquiries
            </button>
          </div>
        </div>

        {activeTab === "portfolio" && <PortfolioManager />}
        {activeTab === "contacts" && <ContactManager />}
      </div>
    </div>
  )
}

export default Dashboard
