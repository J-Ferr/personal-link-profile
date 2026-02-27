import { motion } from "framer-motion";
import type { IconType } from "react-icons";
import React from "react";

type LinkButtonProps = {
  label: string;
  url: string;
  icon: IconType;
};

export default function LinkButton({ label, url, icon: Icon }: LinkButtonProps) {
  return (
    <motion.a
      href={url}
      target="_blank"
      rel="noreferrer"
      whileHover={{ y: -6 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
      className="
        flex items-center justify-center gap-2 w-full rounded-xl
        border border-slate-300 bg-slate-100 px-4 py-3
        text-slate-800 font-medium
        transition duration-300
        hover:bg-blue-500 hover:text-white hover:border-blue-500 hover:shadow-md
        active:bg-blue-500 active:text-white active:border-blue-500 active:shadow-md
        focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 active:scale-[0.99]"
    >
      <Icon className="h-5 w-5" />
      {label}
    </motion.a>
  );
}