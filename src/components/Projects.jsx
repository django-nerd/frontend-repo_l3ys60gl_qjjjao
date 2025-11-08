import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';

const projects = [
  {
    title: 'Zero-Trust Home Lab',
    desc: 'End-to-end lab with identity-first access, microsegmentation, and automated policy enforcement.',
    tags: ['IAM', 'ZTA', 'Kubernetes'],
    link: '#',
    repo: '#'
  },
  {
    title: 'Detection Engineering Pack',
    desc: 'Sigma rules, Sysmon configs, and log pipelines tuned to detect modern tradecraft.',
    tags: ['SIEM', 'Sigma', 'DFIR'],
    link: '#',
    repo: '#'
  },
  {
    title: 'AppSec CI/CD Template',
    desc: 'Secure pipeline with SAST/DAST, dependency checks, and policy gates for modern apps.',
    tags: ['AppSec', 'CI/CD', 'DevSecOps'],
    link: '#',
    repo: '#'
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 flex items-center gap-2">
        <div className="h-6 w-1 rounded-full bg-emerald-400" />
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">Selected Projects</h2>
      </div>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm hover:bg-white/[0.08]"
          >
            <h3 className="text-lg font-semibold text-white">{p.title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{p.desc}</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="rounded-full bg-white/10 px-2 py-1 text-xs text-zinc-200">{t}</span>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-4 text-sm">
              <a href={p.link} className="inline-flex items-center gap-1 text-emerald-400 hover:text-emerald-300">
                <ExternalLink className="h-4 w-4" /> Live
              </a>
              <a href={p.repo} className="inline-flex items-center gap-1 text-zinc-300 hover:text-white">
                <Github className="h-4 w-4" /> Code
              </a>
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
};

export default Projects;
