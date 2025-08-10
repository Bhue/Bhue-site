'use client';
import * as React from 'react';

export function Accordion({ children }: React.PropsWithChildren) {
  return <div className="divide-y rounded-2xl border bg-white">{children}</div>;
}
export function AccordionItem({ value, children }: React.PropsWithChildren<{ value: string }>) {
  return <div>{children}</div>;
}
export function AccordionTrigger({ children }: React.PropsWithChildren) {
  const [open, setOpen] = React.useState(false);
  return (
    <button onClick={() => setOpen(!open)} className="flex w-full items-center justify-between px-4 py-3 text-left">
      <span className="font-medium">{children}</span>
      <span>{/* icon placeholder */}</span>
    </button>
  );
}
export function AccordionContent({ children }: React.PropsWithChildren) {
  return <div className="px-4 pb-4 text-sm text-slate-600">{children}</div>;
}
