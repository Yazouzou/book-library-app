// src/components/Button.jsx
function Button({ children, onClick, color = "black", outline = false, className = "" }) {
  const baseClasses = "flex items-center justify-center gap-2 px-6 py-3 md:px-8 md:py-4 text-base rounded-full shadow hover:shadow-lg hover:scale-105 transition-transform duration-200"

  const colorClasses = outline
    ? "bg-white text-black border border-gray-300 hover:bg-gray-100"
    : color === "black"
      ? "bg-black text-white hover:bg-gray-900"
      : "bg-blue-600 text-white hover:bg-blue-700"

  return (
    <button onClick={onClick} className={`${baseClasses} ${colorClasses} ${className}`}>
      {children}
    </button>
  )
}

export default Button