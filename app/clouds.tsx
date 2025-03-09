"use client";

import { motion } from "framer-motion";

export default function Clouds() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="absolute bottom-[-300px] w-full border-none cursor-pointer flex justify-center items-center z-10 flex-col"
    >
      <img src="/clouds.svg" alt="Nuages" className="w-full" />
      <h1 className="p-0 m-0 text-[#F2E3DE] text-4xl font-bold">Je t'ai eu !</h1>
    </motion.div>
  );
}
