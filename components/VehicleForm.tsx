"use client"

import { useState } from "react"
import type { Vehicle } from "@/types/damage"
import FormField from "./form/FormField"

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
          <FormField
            key={field.key}
            id={field.key}
            label={field.label}
            value={vehicle[field.key] ?? ""}
            placeholder={field.placeholder}
            optional={field.optional}
            onChange={value => handleChange(field.key, value)}
          />
        ))}
      </div>
    </section>
  )
}
