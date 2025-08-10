import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { services } from "@/lib/services";

export default function ServicesPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Services</h1>
      <p className="mt-3 text-slate-600 max-w-2xl">End-to-end analytics: strategy → modeling → deployment → decisioning.</p>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {services.map((s) => (
          <Link key={s.slug} href={`/services/${s.slug}`}>
            <Card className="rounded-2xl hover:shadow-lg transition">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <s.icon className="h-5 w-5" /> {s.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-slate-600">{s.short}</p>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </main>
  );
}
