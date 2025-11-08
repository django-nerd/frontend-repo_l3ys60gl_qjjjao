import React from 'react';
import Spline from '@splinetool/react-spline';
import { motion } from 'framer-motion';
import { Download, Mail, ShieldCheck } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative h-[90vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/DtQLjBkD1UpownGS/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      {/* Soft gradient & vignette overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/50 via-black/20 to-black/80" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(0,0,0,0)_0%,rgba(0,0,0,0)_40%,rgba(0,0,0,0.65)_100%)]" />

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-center justify-center px-6 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 backdrop-blur-md"
        >
          <ShieldCheck className="h-4 w-4 text-emerald-400" />
          <span className="text-xs tracking-wide text-zinc-200">Cybersecurity Portfolio</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.8 }}
          className="mt-6 bg-gradient-to-br from-white to-zinc-300 bg-clip-text text-4xl font-semibold leading-tight text-transparent sm:text-5xl md:text-6xl"
        >
          Futuristic Security, Minimalist Design
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="mt-4 max-w-2xl text-base text-zinc-300 sm:text-lg"
        >
          I’m a Master's student in IT Security, graduating soon — with hands-on experience across red teaming, blue teaming, cloud security, AppSec, DFIR, and GRC. I design secure systems with a modern, user-first mindset.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4"
        >
          <a
            href="#contact"
            className="group inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-3 text-sm font-medium text-black transition-colors hover:bg-emerald-400"
          >
            <Mail className="h-4 w-4" /> Contact Me
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="/resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-sm font-medium text-white backdrop-blur-md transition-colors hover:bg-white/20"
          >
            <Download className="h-4 w-4" /> Download CV
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
