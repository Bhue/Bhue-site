import * as React from 'react';
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}
export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(({ className = '', ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`inline-flex items-center justify-center rounded-md border px-4 py-2 text-sm font-medium transition hover:shadow ${className}`}
      {...props}
    />
  );
});
Button.displayName = 'Button';
