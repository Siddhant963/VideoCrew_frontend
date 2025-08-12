export interface User {
  id: number
  email: string
  name: string
  role: "admin" | "user"
}

export interface LoginCredentials {
  email: string
  password: string
}

class AuthService {
  private tokenKey = "videocrew_token"
  private userKey = "videocrew_user"

  async login(credentials: LoginCredentials): Promise<{ success: boolean; user?: User; error?: string }> {
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Mock authentication
      if (credentials.email === "admin@videocrew.com" && credentials.password === "admin123") {
        const user: User = {
          id: 1,
          email: credentials.email,
          name: "Admin User",
          role: "admin",
        }

        const token = "mock-jwt-token"

        localStorage.setItem(this.tokenKey, token)
        localStorage.setItem(this.userKey, JSON.stringify(user))

        return { success: true, user }
      }

      return { success: false, error: "Invalid credentials" }
    } catch (error) {
      return { success: false, error: "Login failed" }
    }
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey)
    localStorage.removeItem(this.userKey)
  }

  getCurrentUser(): User | null {
    const userStr = localStorage.getItem(this.userKey)
    return userStr ? JSON.parse(userStr) : null
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey)
  }

  isAuthenticated(): boolean {
    return !!this.getToken()
  }

  isAdmin(): boolean {
    const user = this.getCurrentUser()
    return user?.role === "admin"
  }
}

export const authService = new AuthService()
