export interface UploadResponse {
  success: boolean
  url?: string
  error?: string
}

class UploadService {
  async uploadFile(file: File, type: "image" | "video" = "image"): Promise<UploadResponse> {
    try {
      // Simulate file upload
      await new Promise((resolve) => setTimeout(resolve, 2000))

      // Mock successful upload
      const mockUrl = `/uploads/${type}s/${Date.now()}-${file.name}`

      return {
        success: true,
        url: mockUrl,
      }
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : "Upload failed",
      }
    }
  }

  async uploadMultiple(files: File[]): Promise<UploadResponse[]> {
    const uploads = files.map((file) => this.uploadFile(file))
    return Promise.all(uploads)
  }

  validateFile(file: File, type: "image" | "video" = "image"): { valid: boolean; error?: string } {
    const maxSize = type === "image" ? 5 * 1024 * 1024 : 100 * 1024 * 1024 // 5MB for images, 100MB for videos
    const allowedTypes =
      type === "image" ? ["image/jpeg", "image/png", "image/webp"] : ["video/mp4", "video/webm", "video/quicktime"]

    if (file.size > maxSize) {
      return {
        valid: false,
        error: `File size must be less than ${maxSize / (1024 * 1024)}MB`,
      }
    }

    if (!allowedTypes.includes(file.type)) {
      return {
        valid: false,
        error: `File type must be one of: ${allowedTypes.join(", ")}`,
      }
    }

    return { valid: true }
  }
}

export const uploadService = new UploadService()
