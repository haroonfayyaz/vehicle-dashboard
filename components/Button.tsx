interface ButtonProps {
  children: React.ReactNode
  type?: "button" | "submit"
}

export default function Button({ children, type = "button" }: ButtonProps) {
  return (
    <button
      type={type}
      className="
          rounded-xl
          bg-blue-600
          px-6
          py-3
          font-semibold
          text-white
          transition
          hover:bg-blue-700
          focus:outline-none
          focus:ring-4
          focus:ring-blue-200
        "
    >
      {children}
    </button>
  )
}
