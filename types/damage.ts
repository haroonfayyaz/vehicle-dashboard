export type DentSize = "Small" | "Medium" | "Large" | "Oversized"

export type Severity = "Light" | "Moderate" | "Heavy"

export interface Vehicle {
  year: string
  make: string
  model: string
  vin?: string
  color: string
}

export interface DamagePanel {
  id: string
  name: string
  dentCount: number
  dentSize: DentSize
  severity: Severity
}

export interface DamageReport {
  vehicle: Vehicle
  panels: DamagePanel[]
}
