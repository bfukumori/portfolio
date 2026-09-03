"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  title: string;
  disableBorder?: boolean;
}

export function SectionHeading({
  title,
  disableBorder = false,
}: SectionHeadingProps) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-20px" }}
      transition={{ duration: 0.4 }}
      className={`text-3xl font-bold tracking-tight text-zinc-100 ${
        disableBorder ? "" : "mb-8 border-b border-zinc-800 pb-4"
      }`}
    >
      {title}
    </motion.h2>
  );
}
