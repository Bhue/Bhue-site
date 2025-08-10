import Link from "next/link";
import { Brain, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SiteLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3">
          <Link href="/" className="flex items-center gap-2 font-bold">
            <Brain className="h-6 w-6" /><span>Bhue</span>
          </Link>
          <nav className="hidden gap-6 md:flex">
            <Link href="/services" className="text-sm text-slate-600 hover:text-slate-900">Services</Link>
            <Link href="/case-studies" className="text-sm text-slate-600 hover:text-slate-900">Case Studies</Link>
            <Link href="/pricing" className="text-sm text-slate-600 hover:text-slate-900">Pricing</Link>
            <Link href="/contact" className="text-sm text-slate-600 hover:text-slate-900">Contact</Link>
          </nav>
          <Link href="/contact">
            <Button className="border-slate-300"><Calendar className="mr-2 h-4 w-4" /> Book a free consult</Button>
          </Link>
        </div>
      </header>
      {children}
      <footer className="border-t bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <div className="flex items-center gap-2 font-bold"><Brain className="h-5 w-5"/> Bhue</div>
              <p className="mt-3 text-sm text-slate-600">Turning data into decisions since 2018.</p>
            </div>
            <div>
              <h4 className="font-semibold">Company</h4>
              <ul className="mt-3 space-y-2 text-sm text-slate-600">
                <li><Link href="/services" className="hover:text-slate-900">Services</Link></li>
                <li><Link href="/case-studies" className="hover:text-slate-900">Case Studies</Link></li>
                <li><Link href="/pricing" className="hover:text-slate-900">Pricing</Link></li>
                <li><Link href="/contact" className="hover:text-slate-900">Contact</Link></li>
              </ul>
            </div>
          </div>
          <div className="mt-8 text-xs text-slate-500">© {new Date().getFullYear()} Bhue. All rights reserved.</div>
        </div>
      </footer>
      <Link href="/contact" className="fixed bottom-5 right-5">
        <Button className="rounded-full shadow-xl border-slate-300">
          <Calendar className="mr-2 h-4 w-4" /> Book a free consult
        </Button>
      </Link>
    </div>
  );
}
