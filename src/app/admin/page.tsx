import offers from '@/data/offers.json';
import advisors from '@/data/advisors.json';
export default function AdminPage(){
  return(
    <div className="container py-16">
      <div className="glass glow gradient-border rounded-xl p-6">
        <h1 className="mb-2 text-2xl font-semibold">Admin</h1>
        <div className="grid gap-6 md:grid-cols-2">
          <section><h2 className="mb-3 text-lg font-semibold">Offers (JSON)</h2><pre className="max-h-80 overflow-auto rounded-lg bg-black/40 p-3 text-sm">{JSON.stringify(offers,null,2)}</pre></section>
          <section><h2 className="mb-3 text-lg font-semibold">Advisors (JSON)</h2><pre className="max-h-80 overflow-auto rounded-lg bg-black/40 p-3 text-sm">{JSON.stringify(advisors,null,2)}</pre></section>
        </div>
      </div>
    </div>
  );
}
