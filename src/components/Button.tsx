import { type ButtonHTMLAttributes, type ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "confirm" | "warning" | "error";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  children: ReactNode;
  isLoading?: boolean;
}

const Button = ({ variant = "primary", children, isLoading = false, className = "", style = {}, disabled, ...props }: ButtonProps) => {
  const getVariantStyles = (variant: ButtonVariant) => {
    const baseStyles = {
      padding: "12px 24px",
      border: "none",
      borderRadius: "9999px",
      fontSize: "16px",
      fontWeight: "600",
      cursor: disabled || isLoading ? "not-allowed" : "pointer",
      transition: "all 0.3s ease",
      display: "inline-flex",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "48px",
      opacity: disabled || isLoading ? 0.6 : 1,
    };

    switch (variant) {
      case "primary":
        return {
          ...baseStyles,
          background: "linear-gradient(to right, #8b5cf6, #ec4899)",
          color: "white",
          boxShadow: "0 4px 14px 0 rgba(139, 92, 246, 0.3)",
        };

      case "secondary":
        return {
          ...baseStyles,
          background: "linear-gradient(to right, #6b7280, #9ca3af)",
          color: "white",
          boxShadow: "0 4px 14px 0 rgba(107, 114, 128, 0.3)",
        };

      case "confirm":
        return {
          ...baseStyles,
          background: "linear-gradient(to right, #10b981, #059669)",
          color: "white",
          boxShadow: "0 4px 14px 0 rgba(16, 185, 129, 0.3)",
        };

      case "warning":
        return {
          ...baseStyles,
          background: "linear-gradient(to right, #f59e0b, #d97706)",
          color: "white",
          boxShadow: "0 4px 14px 0 rgba(245, 158, 11, 0.3)",
        };

      case "error":
        return {
          ...baseStyles,
          background: "linear-gradient(to right, #ef4444, #dc2626)",
          color: "white",
          boxShadow: "0 4px 14px 0 rgba(239, 68, 68, 0.3)",
        };

      default:
        return baseStyles;
    }
  };

  const getHoverStyles = (variant: ButtonVariant) => {
    if (disabled || isLoading) return {};

    switch (variant) {
      case "primary":
        return { background: "linear-gradient(to right, #7c3aed, #db2777)" };
      case "secondary":
        return { background: "linear-gradient(to right, #4b5563, #6b7280)" };
      case "confirm":
        return { background: "linear-gradient(to right, #059669, #047857)" };
      case "warning":
        return { background: "linear-gradient(to right, #d97706, #b45309)" };
      case "error":
        return { background: "linear-gradient(to right, #dc2626, #b91c1c)" };
      default:
        return {};
    }
  };

  const combinedStyles = {
    ...getVariantStyles(variant),
    ...style,
  };

  const baseClasses = `
    rounded-full transition-all duration-300 transform hover:scale-105 
    focus:outline-none focus:ring-4 focus:ring-opacity-50
    ${variant === "primary" ? "focus:ring-purple-300" : ""}
    ${variant === "secondary" ? "focus:ring-gray-300" : ""}
    ${variant === "confirm" ? "focus:ring-green-300" : ""}
    ${variant === "warning" ? "focus:ring-yellow-300" : ""}
    ${variant === "error" ? "focus:ring-red-300" : ""}
    ${disabled || isLoading ? "transform-none" : ""}
    ${className}
  `
    .trim()
    .replace(/\s+/g, " ");

  return (
    <button
      {...props}
      disabled={disabled || isLoading}
      className={baseClasses}
      style={combinedStyles}
      onMouseEnter={(e) => {
        if (!disabled && !isLoading) {
          Object.assign(e.currentTarget.style, getHoverStyles(variant));
        }
      }}
      onMouseLeave={(e) => {
        if (!disabled && !isLoading) {
          Object.assign(e.currentTarget.style, getVariantStyles(variant));
        }
      }}
    >
      {isLoading ? (
        <div className='flex items-center'>
          <svg className='animate-spin -ml-1 mr-3 h-5 w-5' xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24'>
            <circle className='opacity-25' cx='12' cy='12' r='10' stroke='currentColor' strokeWidth='4'></circle>
            <path
              className='opacity-75'
              fill='currentColor'
              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
            ></path>
          </svg>
          Loading...
        </div>
      ) : (
        children
      )}
    </button>
  );
};

export default Button;
