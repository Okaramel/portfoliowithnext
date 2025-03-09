"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Clouds() {
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 2, ease: "easeOut" }}
      className="absolute lg:-bottom-[500px] sm:-bottom-[550px] w-full border-none cursor-pointer flex justify-center items-center z-10 flex-col"
    >
      <Image src="/clouds.svg" alt="Nuages" width={500} height={300} className="w-full sm:translate-y-0" />
      <h1 className="p-0 m-0 text-[#F2E3DE] text-4xl font-bold hidden sm:block">
        Je t&apos;ai eu !
      </h1>
    </motion.div>
  );
}
