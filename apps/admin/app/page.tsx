import Link from "next/link";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div>
        <h1 className="text-slate-950 text-4xl ">Syed Welfare Organization</h1>
        <p>A welfare organization for the better of general public of Haripur district.</p>
        </div>
        <Link href="/dashboard" className="text-blue-900 hover:text-blue-950">Dashboard</Link>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
  );
}
