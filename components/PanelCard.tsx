import FormField from "@/components/form/FormField"
import SelectField from "@/components/form/SelectField"
import { DENT_SIZES, SEVERITIES } from "@/constants/panels"
import type { DamagePanel } from "@/types/damage"

interface PanelCardProps {
  panel: DamagePanel
  onChange: (id: string, field: keyof DamagePanel, value: string | number) => void
}

export default function PanelCard({ panel, onChange }: PanelCardProps) {
  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 shadow-md">
      <h3 className="mb-6 text-xl font-bold text-slate-900">{panel.name}</h3>

      <div className="grid gap-6 md:grid-cols-3">
        <FormField
          id={`${panel.id}-dent-count`}
          label="Number of dents"
          type="number"
          min={1}
          max={100}
          value={panel.dentCount}
          onChange={value => onChange(panel.id, "dentCount", Number(value))}
        />

        <SelectField
          id={`${panel.id}-dent-size`}
          label="Average dent size"
          value={panel.dentSize}
          options={DENT_SIZES}
          onChange={value => onChange(panel.id, "dentSize", value)}
        />

        <SelectField
          id={`${panel.id}-severity`}
          label="Severity"
          value={panel.severity}
          options={SEVERITIES}
          onChange={value => onChange(panel.id, "severity", value)}
        />
      </div>
    </section>
  )
}
