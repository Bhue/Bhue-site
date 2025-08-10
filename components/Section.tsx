import { Sparkles, CheckCircle } from "lucide-react";
import * as React from "react";

export function Section({ id, eyebrow, title, subtitle, children }:{
  id?: string; eyebrow?: string; title?: string; subtitle?: string; children: React.ReactNode;
}){
  return (
    <section id={id} className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4">
        {(eyebrow || title || subtitle) && (
          <div className="mb-10 md:mb-14 text-center">
            {eyebrow && (
              <div className="mb-3 inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs uppercase tracking-wider">
                <Sparkles className="h-3.5 w-3.5" />
                <span>{eyebrow}</span>
              </div>
            )}
            {title && <h2 className="text-3xl font-bold tracking-tight md:text-5xl">{title}</h2>}
            {subtitle && <p className="mx-auto mt-4 max-w-3xl text-slate-600 md:text-lg">{subtitle}</p>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function Stat({ label, value, hint }:{label:string; value:string; hint?:string;}){
  return (
    <div className="rounded-2xl border p-6 text-center bg-white">
      <div className="text-3xl font-extrabold md:text-4xl">{value}</div>
      <div className="mt-2 text-sm font-medium text-slate-600">{label}</div>
      {hint && <div className="mt-1 text-xs text-slate-500">{hint}</div>}
    </div>
  );
}

export function Check({ children }:{children: React.ReactNode}){
  return (
    <div className="flex items-start gap-3">
      <CheckCircle className="mt-1 h-5 w-5" />
      <p className="text-sm text-slate-600">{children}</p>
    </div>
  );
}
