'use client';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

export default function ContactPage(){
  const [status, setStatus] = useState<'idle'|'sent'>('idle');
  const [form, setForm] = useState({name:'', email:'', company:'', message:''});
  const handleChange = (e: React.ChangeEvent<HTMLInputElement|HTMLTextAreaElement>) => setForm({...form, [e.target.name]: e.target.value});
  const handleSubmit = (e: React.FormEvent) => { e.preventDefault(); setTimeout(()=>setStatus('sent'), 400); };

  return (
    <main className="mx-auto max-w-5xl px-4 py-16">
      <h1 className="text-4xl font-bold tracking-tight">Contact</h1>
      <div className="mt-8 grid gap-8 md:grid-cols-2">
        <Card className="rounded-2xl">
          <CardHeader><CardTitle>Contact form</CardTitle></CardHeader>
          <CardContent>
            {status==='sent' ? (
              <div className="rounded-xl border p-6 text-center">
                <h4 className="text-xl font-semibold">Thanks! 🎉</h4>
                <p className="mt-2 text-slate-600">We’ll get back within 1 business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid gap-4 md:grid-cols-2">
                  <div><label className="mb-1 block text-sm font-medium">Name</label><Input name="name" required value={form.name} onChange={handleChange} /></div>
                  <div><label className="mb-1 block text-sm font-medium">Email</label><Input name="email" type="email" required value={form.email} onChange={handleChange} /></div>
                </div>
                <div><label className="mb-1 block text-sm font-medium">Company</label><Input name="company" value={form.company} onChange={handleChange} /></div>
                <div><label className="mb-1 block text-sm font-medium">What do you want to achieve?</label><Textarea name="message" required value={form.message} onChange={handleChange} rows={5} /></div>
                <button type="submit" className="w-full rounded-md border px-4 py-2 text-sm">Send</button>
              </form>
            )}
          </CardContent>
        </Card>
        <Card className="rounded-2xl">
          <CardHeader><CardTitle>Contact info</CardTitle></CardHeader>
          <CardContent className="space-y-2 text-slate-600">
            <div>hello@bhue.com</div>
            <div>+66 0000 0000</div>
            <div>Bangkok • Singapore • Remote</div>
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
