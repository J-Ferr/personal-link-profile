import React from "react";
import ProfileCard from "./components/ProfileCard";
import LinkButton from "./components/LinkButton";
import { profile } from "./data/profile";
import { links } from "./data/links";
import { motion, easeOut, type Variants } from "framer-motion";

const container: Variants = {
  hidden: { opacity: 0, y: 14 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.55,
      ease: easeOut,
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const item: Variants = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.35, ease: easeOut },
  },
};

export default function App() {
  return (
    <div className="relative min-h-screen bg-linear-to-br from-slate-200 via-slate-300 to-slate-400 text-white flex items-center justify-center px-4 overflow-hidden">
      <motion.div
        variants={container}
        initial="hidden"
        animate="show"
        className="relative w-full max-w-md space-y-6 rounded-2xl border border-blue-400/60 bg-white/80 p-6 backdrop-blur-md shadow-[0_0_30px_rgba(59,130,246,0.25)]"
      >
        <motion.div variants={item}>
          <ProfileCard profile={profile} />
        </motion.div>

        <motion.div variants={item} className="space-y-4">
          <p className="text-xs uppercase tracking-widest text-lime-700 text-center">
            Connect
          </p>

          <div className="space-y-3">
            {links.map((link) => (
              <motion.div key={link.label} variants={item}>
                <LinkButton
                  label={link.label}
                  url={link.url}
                  icon={link.icon}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Footer */}
        <motion.div variants={item} className="text-center pt-4">
          <p className="text-xs text-slate-400">
            © {new Date().getFullYear()} Jose Armando Arellano Ferrara
          </p>
        </motion.div>

      </motion.div>
    </div>
  );
}