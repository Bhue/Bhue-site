import { Section, Stat, Check } from "@/components/Section";
import { Badge } from "@/components/ui/badge";
import { BarChart3 } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function Page(){
  return (
    <main>
      <div id="top" className="relative overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 pt-16 pb-24 md:pt-24 md:pb-32">
          <div className="grid items-center gap-10 md:grid-cols-2">
            <div>
              <Badge>Data to decisions, faster</Badge>
              <h1 className="mt-3 text-4xl font-extrabold tracking-tight md:text-6xl">
                Data Science & Statistical Consulting for Real Business Impact
              </h1>
              <p className="mt-4 max-w-xl text-slate-600 md:text-lg">
                We build analytics that move KPIs—not just slides. From problem framing to deployment, we help you ship models, experiments, and dashboards that teams actually use.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link href="/contact"><Button>Get proposal</Button></Link>
                <Link href="/services"><Button className="border-slate-300">Explore services</Button></Link>
              </div>
              <div className="mt-8 grid max-w-xl grid-cols-3 gap-3">
                <Stat label="Projects delivered" value="120+" />
                <Stat label="Avg. KPI uplift" value="18%" hint="median across case studies" />
                <Stat label="Client NPS" value="72" />
              </div>
            </div>
            <div>
              <Card className="rounded-2xl">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5" /> Sample KPI Impact Snapshot
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 md:grid-cols-2">
                    <div className="rounded-xl border p-4">
                      <div className="text-sm text-slate-600">Credit Approval</div>
                      <div className="mt-1 text-2xl font-bold">+9.4%</div>
                      <Check>PD & LGD recalibration with reject inference</Check>
                    </div>
                    <div className="rounded-xl border p-4">
                      <div className="text-sm text-slate-600">Fraud Detection</div>
                      <div className="mt-1 text-2xl font-bold">-31%</div>
                      <Check>XGBoost + rules, real-time Kafka scoring</Check>
                    </div>
                    <div className="rounded-xl border p-4">
                      <div className="text-sm text-slate-600">Marketing ROI</div>
                      <div className="mt-1 text-2xl font-bold">+22%</div>
                      <Check>MMM + uplift modeling, creative tagging</Check>
                    </div>
                    <div className="rounded-xl border p-4">
                      <div className="text-sm text-slate-600">Ops Time</div>
                      <div className="mt-1 text-2xl font-bold">-47%</div>
                      <Check>Automation & dashboard consolidation</Check>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      <Section id="services" eyebrow="What we do" title="Full-stack data science & statistics" subtitle="Engagements tailored from quick audits to end-to-end delivery.">
        <p className="text-center text-slate-600">See <a className="underline" href="/services">all services</a>.</p>
      </Section>
    </main>
  );
}
