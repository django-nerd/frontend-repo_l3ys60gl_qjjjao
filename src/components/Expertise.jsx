import React from 'react';
import { Shield, Bug, Cloud, Server, Lock, Fingerprint, Globe, Database } from 'lucide-react';
import { motion } from 'framer-motion';

const items = [
  {
    icon: Shield,
    title: 'Blue Team & Defense',
    desc: 'SIEM engineering, detection content, threat hunting, and zero-trust hardening.'
  },
  {
    icon: Bug,
    title: 'Red Team & AppSec',
    desc: 'Web and API security, SAST/DAST, threat modeling, and secure SDLC.'
  },
  {
    icon: Cloud,
    title: 'Cloud Security',
    desc: 'IAM, least privilege, CSPM, container/K8s security, and policy-as-code.'
  },
  {
    icon: Server,
    title: 'DFIR & Monitoring',
    desc: 'Incident response playbooks, log pipelines, forensics methodology.'
  },
  {
    icon: Lock,
    title: 'GRC & Compliance',
    desc: 'Risk assessments, security policies, ISO 27001, SOC 2 readiness.'
  },
  {
    icon: Fingerprint,
    title: 'Identity & Access',
    desc: 'SSO, MFA, PAM, secrets management, and lifecycle automation.'
  },
  {
    icon: Globe,
    title: 'Network Security',
    desc: 'Segmentation, WAF, EDR/XDR, VPN, and modern perimeter-less design.'
  },
  {
    icon: Database,
    title: 'Data Protection',
    desc: 'Encryption at rest/in transit, key management, backup strategy.'
  }
];

const Expertise = () => {
  return (
    <section id="expertise" className="relative mx-auto max-w-6xl px-6 py-24">
      <div className="mb-10 flex items-center gap-2">
        <div className="h-6 w-1 rounded-full bg-emerald-400" />
        <h2 className="text-2xl font-semibold text-white sm:text-3xl">End‑to‑End Cybersecurity Expertise</h2>
      </div>
      <p className="max-w-3xl text-zinc-300/90">
        A broad, hands-on foundation across the security spectrum with a focus on pragmatic risk reduction and delightful developer experience.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map(({ icon: Icon, title, desc }) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.5 }}
            className="group rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-colors hover:bg-white/[0.08]"
          >
            <div className="mb-3 inline-flex rounded-xl bg-emerald-500/10 p-2 text-emerald-400 ring-1 ring-emerald-500/20">
              <Icon className="h-5 w-5" />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-zinc-300">{desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Expertise;
