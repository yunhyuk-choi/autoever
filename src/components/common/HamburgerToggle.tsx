"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function HamburgerToggle() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <button
      className="xl:hidden relative w-10 h-10 flex items-center justify-center group p-2 m-1"
      onClick={toggleMenu}
      aria-label="Toggle menu"
    >
      {/* Top Line */}
      <motion.span
        animate={{
          rotate: isOpen ? 45 : 0,
          y: isOpen ? 6 : 0,
        }}
        className="absolute w-5 h-0.5 top-3.5 bg-black"
        transition={{ duration: 0.3 }}
      />
      {/* Middle Line */}
      <motion.span
        animate={{
          opacity: isOpen ? 0 : 1,
        }}
        className="absolute w-5 h-0.5 top-5 bg-black"
        transition={{ duration: 0.3 }}
      />
      {/* Bottom Line */}
      <motion.span
        animate={{
          rotate: isOpen ? -45 : 0,
          y: isOpen ? -6 : 0,
        }}
        className="absolute w-5 h-0.5 top-6.5 bg-black"
        transition={{ duration: 0.3 }}
      />
    </button>
  );
}
