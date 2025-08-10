import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function PricingPage(){
  const tiers = [
    {name: "Starter Sprint", price: "$4,900", badge: "2 weeks", features: ["Problem framing workshop","Data & KPI audit","Baseline model or dashboard","Roadmap & next steps"]},
    {name: "Growth", price: "$14,900", badge: "6 weeks", features: ["Dedicated team (PM + DS + DE)","2–3 model iterations","Experiment design","Deployment-ready assets"]},
    {name: "Partner", price: "Custom", badge: "Quarter+", features: ["Outcome-based milestones","MLOps & governance","Team enablement","On-call support"]},
  ];
  return (
    <main className="mx-auto max-w-7xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Pricing</h1>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {tiers.map((tier, i) => (
          <Card key={i} className="rounded-2xl">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle>{tier.name}</CardTitle>
                <Badge>{tier.badge}</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-3xl font-bold">{tier.price}</div>
              <Separator className="my-4" />
              <div className="space-y-2">
                {tier.features.map((f, idx) => (<div key={idx} className="text-sm text-slate-600">• {f}</div>))}
              </div>
              <button className="mt-6 w-full rounded-md border px-4 py-2 text-sm">Get started</button>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}
