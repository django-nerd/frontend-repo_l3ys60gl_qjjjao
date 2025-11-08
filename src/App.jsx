import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Expertise from './components/Expertise';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main>
        <Hero />
        <Expertise />
        <Projects />
        <Contact />
      </main>
      <footer className="border-t border-white/10 bg-black/60 py-8 text-center text-sm text-zinc-400">
        <div className="mx-auto max-w-6xl px-6">
          © {new Date().getFullYear()} Cybersecurity Portfolio — Built with a minimalist, futuristic aesthetic.
        </div>
      </footer>
    </div>
  );
}

export default App;
