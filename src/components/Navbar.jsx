import React from 'react';
import { ShieldCheck } from 'lucide-react';

const Navbar = () => {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-6xl px-6 py-4">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/40 px-4 py-2 backdrop-blur-xl">
          <a href="#home" className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/10 text-emerald-400 ring-1 ring-emerald-500/20">
              <ShieldCheck className="h-4 w-4" />
            </span>
            <span className="text-sm font-medium text-white">SecPortfolio</span>
          </a>
          <div className="hidden gap-6 text-sm text-zinc-300 sm:flex">
            <a href="#expertise" className="hover:text-white">Expertise</a>
            <a href="#projects" className="hover:text-white">Projects</a>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
          <a
            href="#contact"
            className="hidden rounded-full bg-white/10 px-3 py-1 text-sm text-white backdrop-blur-md transition-colors hover:bg-white/20 sm:block"
          >
            Get in touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
