import VehicleForm from "@/components/VehicleForm"

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-10">
      <div className="mx-auto max-w-5xl px-6">
        <h1 className="mb-8 text-4xl font-bold text-center">PDR Logic Damage Report</h1>

        <VehicleForm />
      </div>
    </main>
  )
}
