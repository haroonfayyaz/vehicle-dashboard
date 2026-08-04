interface SelectFieldProps {
  id: string
  label: string
  value: string
  options: readonly string[]
  onChange: (value: string) => void
}

const selectStyles =
  "w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 transition focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"

export default function SelectField({ id, label, value, options, onChange }: SelectFieldProps) {
  return (
    <div>
      <label htmlFor={id} className="mb-2 block text-sm font-semibold text-slate-700">
        {label}
      </label>

      <select id={id} value={value} onChange={event => onChange(event.target.value)} className={selectStyles}>
        {options.map(option => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
