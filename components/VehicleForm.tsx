"use client"

import { useState } from "react"
import type { Vehicle } from "@/types/damage"

const vehicleFields: {
  key: keyof Vehicle
  label: string
  placeholder: string
  optional?: boolean
}[] = [
  {
    key: "year",
    label: "Year",
    placeholder: "2022"
  },
  {
    key: "make",
    label: "Make",
    placeholder: "Toyota"
  },
  {
    key: "model",
    label: "Model",
    placeholder: "Camry"
  },
  {
    key: "vin",
    label: "VIN",
    placeholder: "JTDB...",
    optional: true
  },
  {
    key: "color",
    label: "Color",
    placeholder: "Silver"
  }
]

export default function VehicleForm() {
  const [vehicle, setVehicle] = useState<Vehicle>({
    year: "",
    make: "",
    model: "",
    vin: "",
    color: ""
  })

  const handleChange = (field: keyof Vehicle, value: string) => {
    setVehicle(prev => ({
      ...prev,
      [field]: value
    }))
  }

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Vehicle Information</h2>

        <p className="mt-2 text-sm text-slate-500">Enter the vehicle details before recording damage.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        {vehicleFields.map(field => (
          <div key={field.key} className={field.key === "color" ? "md:col-span-2" : undefined}>
            <label htmlFor={field.key} className="mb-2 block text-sm font-semibold text-slate-700">
              {field.label}

              {field.optional && <span className="ml-1 text-slate-400">(Optional)</span>}
            </label>

            <input
              id={field.key}
              type="text"
              value={vehicle[field.key] ?? ""}
              onChange={e => handleChange(field.key, e.target.value)}
              placeholder={field.placeholder}
              className="w-full rounded-xl border border-slate-300 bg-slate-50 px-4 py-3 text-slate-900 placeholder:text-slate-400 transition-all duration-200 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-100"
            />
          </div>
        ))}
      </div>
    </section>
  )
}
