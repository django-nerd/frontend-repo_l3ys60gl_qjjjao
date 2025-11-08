import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const onChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <section id="contact" className="relative mx-auto max-w-3xl px-6 py-24">
      <div className="mb-8 flex items-center gap-2">
        <div className="h-6 w-1 rounded-full bg-emerald-400" />
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Let’s Connect</h2>
      </div>

      <motion.form
        onSubmit={onSubmit}
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.5 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
      >
        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm text-zinc-300">Name</label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={onChange}
              required
              className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-emerald-500"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="mb-2 block text-sm text-zinc-300">Email</label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={onChange}
              required
              className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-emerald-500"
              placeholder="name@example.com"
            />
          </div>
        </div>
        <div className="mt-4">
          <label className="mb-2 block text-sm text-zinc-300">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            rows={5}
            required
            className="w-full rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-white outline-none placeholder:text-zinc-500 focus:ring-2 focus:ring-emerald-500"
            placeholder="Tell me about your opportunity, challenge, or idea..."
          />
        </div>
        <div className="mt-6 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 text-zinc-300">
            <Mail className="h-4 w-4 text-emerald-400" /> itsecurity@portfolio.dev
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-sm font-medium text-black transition-colors hover:bg-emerald-400"
          >
            <Send className="h-4 w-4" /> Send Message
          </button>
        </div>
        {sent && (
          <p className="mt-4 text-sm text-emerald-300">Thanks! Your message is noted locally for this demo.</p>
        )}
      </motion.form>
    </section>
  );
};

export default Contact;
