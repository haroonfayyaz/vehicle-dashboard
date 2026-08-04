"use client"

import { useState } from "react"

import FormField from "@/components/form/FormField"
import PanelCard from "@/components/PanelCard"
import Button from "@/components/Button"

import type { Vehicle, DamagePanel, DamageReport } from "@/types/damage"
import ReportSummary from "./ReportSummary"

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
    placeholder: "Optional",
    optional: true
  },
  {
    key: "color",
    label: "Color",
    placeholder: "Silver"
  }
]

const initialPanels: DamagePanel[] = [
  {
    id: "hood",
    name: "Hood",
    dentCount: 1,
    dentSize: "Medium",
    severity: "Moderate"
  },
  {
    id: "roof",
    name: "Roof",
    dentCount: 1,
    dentSize: "Medium",
    severity: "Moderate"
  },
  {
    id: "left-front-door",
    name: "Left Front Door",
    dentCount: 1,
    dentSize: "Medium",
    severity: "Moderate"
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
  const [errors, setErrors] = useState<Record<string, string>>({})

  const [panels, setPanels] = useState<DamagePanel[]>(initialPanels)

  const [submittedReport, setSubmittedReport] = useState<DamageReport | null>(null)

  const handleVehicleChange = (field: keyof Vehicle, value: string) => {
    setVehicle(current => ({
      ...current,
      [field]: value
    }))
  }

  const handlePanelChange = (id: string, field: keyof DamagePanel, value: string | number) => {
    setPanels(currentPanels =>
      currentPanels.map(panel =>
        panel.id === id
          ? {
              ...panel,
              [field]: value
            }
          : panel
      )
    )
  }

  const validateForm = () => {
    const newErrors: Record<string, string> = {}

    if (!vehicle.year) {
      newErrors.year = "Year is required"
    } else if (!/^\d{4}$/.test(vehicle.year)) {
      newErrors.year = "Enter a valid 4 digit year"
    }

    if (!vehicle.make.trim()) {
      newErrors.make = "Make is required"
    }

    if (!vehicle.model.trim()) {
      newErrors.model = "Model is required"
    }

    if (!vehicle.color.trim()) {
      newErrors.color = "Color is required"
    }

    panels.forEach(panel => {
      if (panel.dentCount < 1 || panel.dentCount > 100) {
        newErrors[`${panel.id}-dentCount`] = "Dent count must be between 1 and 100"
      }
    })

    setErrors(newErrors)

    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    setSubmittedReport(null)

    if (!validateForm()) {
      return
    }

    const report: DamageReport = {
      vehicle,
      panels
    }

    setSubmittedReport(report)
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="rounded-2xl border border-slate-200 bg-white p-8 shadow-xl">
        {/* Vehicle Information */}
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
              error={errors[field.key]}
              onChange={value => handleVehicleChange(field.key, value)}
            />
          ))}
        </div>

        {/* Damage Report */}
        <div className="mt-10 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-900">Damage Report</h2>

            <p className="mt-2 text-sm text-slate-500">Record hail damage details for each vehicle panel.</p>
          </div>

          {panels.map(panel => (
            <PanelCard key={panel.id} panel={panel} onChange={handlePanelChange} />
          ))}
        </div>

        <div className="mt-10">
          <Button type="submit">Submit Report</Button>
        </div>
      </form>

      {submittedReport && <ReportSummary report={submittedReport} />}
    </>
  )
}
