const API_BASE_URL = process.env.API_URL ;

export interface ApiResponse<T> {
  success: boolean
  data?: T
  error?: string
}

class ApiService {
  private async request<T>(endpoint: string, options: RequestInit = {}): Promise<ApiResponse<T>> {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        headers: {
          "Content-Type": "application/json",
          ...options.headers,
        },
        ...options,
      })

      const data = await response.json()

      if (!response.ok) {
        return {
          success: false,
          error: data.message || "An error occurred",
        }
      }

      return {
        success: true,
        data,
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Network error",
      }
    }
  }


  async getProjects() {
    return this.request("/projects")
  }

  async createProject(project: any) {
    return this.request("/projects", {
      method: "POST",
      body: JSON.stringify(project),
    })
  }

  async updateProject(id: number, project: any) {
    return this.request(`/projects/${id}`, {
      method: "PUT",
      body: JSON.stringify(project),
    })
  }

  async deleteProject(id: number) {
    return this.request(`/projects/${id}`, {
      method: "DELETE",
    })
  }


  async submitContact(contactData: any) {
    return this.request("/contact", {
      method: "POST",
      body: JSON.stringify(contactData),
    })
  }

  async getContacts() {
    return this.request("/contacts")
  }

  async updateContactStatus(id: number, status: string) {
    return this.request(`/contacts/${id}/status`, {
      method: "PATCH",
      body: JSON.stringify({ status }),
    })
  }
}

export const apiService = new ApiService()
