import { notFound } from "next/navigation";
import { services } from "@/lib/services";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default function ServiceDetail({ params }: { params: { slug: string }}) {
  const svc = services.find((s) => s.slug === params.slug);
  if (!svc) return notFound();

  const Icon = svc.icon;

  return (
    <main className="mx-auto max-w-4xl px-4 py-16">
      <div className="mb-6">
        <Link href="/services" className="text-sm text-slate-600 hover:underline">← All services</Link>
      </div>

      <h1 className="text-4xl font-bold tracking-tight flex items-center gap-2">
        <Icon className="h-7 w-7" /> {svc.title}
      </h1>
      <p className="mt-3 text-slate-600">{svc.short}</p>

      <div className="mt-8 grid gap-6 md:grid-cols-2">
        <Card className="rounded-2xl">
          <CardHeader><CardTitle>What we do</CardTitle></CardHeader>
          <CardContent>
            <ul className="space-y-2 list-disc pl-5">
              {svc.bullets.map((b, i) => (<li key={i} className="text-sm text-slate-600">{b}</li>))}
            </ul>
          </CardContent>
        </Card>

        <Card className="rounded-2xl">
          <CardHeader><CardTitle>Typical outcomes</CardTitle></CardHeader>
          <CardContent className="flex flex-wrap gap-2">
            {svc.outcomes.map((o, i) => (<Badge key={i}>{o}</Badge>))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-10">
        <Link href="/contact"><Button>Discuss this service</Button></Link>
      </div>
    </main>
  );
}
