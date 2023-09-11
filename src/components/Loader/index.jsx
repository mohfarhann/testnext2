"use client"

import { motion } from 'framer-motion';

const Loader = () => {
  return (
    <div className="absolute top-0  w-full flex justify-center items-center h-screen bg-blue-700">
      <motion.div
        className="w-16 h-16 rounded-full border-t-4 border-orange-400 border-solid"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      ></motion.div>
    </div>
  );
};

export default Loader;
