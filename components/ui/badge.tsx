import * as React from 'react';
export function Badge({ children, className = '' }: React.PropsWithChildren<{ className?: string }>) {
  return <span className={`inline-flex items-center rounded-full border px-2 py-0.5 text-xs ${className}`}>{children}</span>;
}
