interface FormFieldProps {
  id: string
  label: string
  value: string | number
  placeholder?: string
  type?: "text" | "number"
  min?: number
  max?: number
  optional?: boolean
  onChange: (value: string) => void 
  error?: string
}

const inputStyles =
  "w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"

export default function FormField({
  id,
  label,
  value,
  placeholder,
  type = "text",
  min,
  max,
  optional,
  onChange,
  error
}: FormFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-700">
        {label}

        {optional && <span className="ml-1 text-slate-400">(Optional)</span>}
      </label>

      <input
        id={id}
        type={type}
        value={value}
        min={min}
        max={max}
        placeholder={placeholder}
        onChange={event => onChange(event.target.value)}
        className={inputStyles}
      />

      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  )
}
