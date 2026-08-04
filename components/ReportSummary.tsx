import type { DamageReport } from "@/types/damage"

interface ReportSummaryProps {
  report: DamageReport
}

export default function ReportSummary({ report }: ReportSummaryProps) {
  return (
    <section className="mt-10 rounded-2xl border border-slate-300 bg-slate-50 p-8 shadow-lg">
      <div className="mb-8">
        <h2 className="text-2xl font-bold text-slate-900">Report Summary</h2>

        <p className="mt-2 text-sm text-slate-600">Review the submitted vehicle damage report.</p>
      </div>

      {/* Vehicle Information */}
      <div className="rounded-xl border border-slate-200 bg-white p-6">
        <h3 className="mb-5 text-lg font-bold text-slate-900">Vehicle Information</h3>

        <div className="grid gap-4 md:grid-cols-2">
          <SummaryItem label="Year" value={report.vehicle.year} />

          <SummaryItem label="Make" value={report.vehicle.make} />

          <SummaryItem label="Model" value={report.vehicle.model} />

          <SummaryItem label="Color" value={report.vehicle.color} />

          {report.vehicle.vin && <SummaryItem label="VIN" value={report.vehicle.vin} />}
        </div>
      </div>

      {/* Damage Panels */}
      <div className="mt-6">
        <h3 className="mb-5 text-lg font-bold text-slate-900">Damage Panels</h3>

        <div className="space-y-4">
          {report.panels.map(panel => (
            <div
              key={panel.id}
              className="
                rounded-xl
                border
                border-slate-200
                bg-white
                p-5
                transition
                hover:shadow-md
              "
            >
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900">{panel.name}</h4>

                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-semibold text-blue-700">
                  {panel.severity}
                </span>
              </div>

              <div className="mt-3 grid gap-3 text-sm md:grid-cols-2">
                <SummaryItem label="Dent Count" value={String(panel.dentCount)} />

                <SummaryItem label="Dent Size" value={panel.dentSize} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function SummaryItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">{label}</p>

      <p className="mt-1 text-base font-medium text-slate-900">{value || "-"}</p>
    </div>
  )
}
