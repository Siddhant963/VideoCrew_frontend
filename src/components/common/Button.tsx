import type React from "react"
import type { ButtonHTMLAttributes, ReactNode } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost"
  size?: "sm" | "md" | "lg"
  children: ReactNode
  loading?: boolean
}

const Button: React.FC<ButtonProps> = ({
  variant = "primary",
  size = "md",
  children,
  className = "",
  loading = false,
  disabled,
  ...props
}) => {
  const baseClasses =
    "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black disabled:opacity-50 disabled:cursor-not-allowed"

  const variants = {
    primary: "bg-white text-black hover:bg-gray-200 focus:ring-white",
    secondary: "bg-gray-800 text-white hover:bg-gray-700 focus:ring-gray-500",
    outline: "border border-gray-600 text-white hover:bg-gray-800 focus:ring-gray-500",
    ghost: "text-gray-300 hover:text-white hover:bg-gray-800 focus:ring-gray-500",
  }

  const sizes = {
    sm: "px-4 py-2 text-sm rounded-md",
    md: "px-6 py-3 text-base rounded-lg",
    lg: "px-8 py-4 text-lg rounded-xl",
  }

  const classes = `${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`

  return (
    <button className={classes} disabled={disabled || loading} {...props}>
      {loading ? <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-current mr-2" /> : null}
      {children}
    </button>
  )
}

export default Button
