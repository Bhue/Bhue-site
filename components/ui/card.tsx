import * as React from 'react';
export function Card({ className = '', children }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`rounded-2xl border bg-white ${className}`}>{children}</div>;
}
export function CardHeader({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`border-b px-6 py-4 ${className}`}>{children}</div>;
}
export function CardTitle({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <h3 className={`text-lg font-semibold ${className}`}>{children}</h3>;
}
export function CardContent({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <div className={`px-6 py-4 ${className}`}>{children}</div>;
}
