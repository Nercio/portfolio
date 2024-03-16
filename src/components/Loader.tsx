import { motion } from "framer-motion";
import React from "react";

function Loader({ setLoading }: any) {
  return (
    <div className="w-full h-[100vh] bg-transparent justify-center items-center flex">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ ease: "anticipate", duration: 3 }}
        onAnimationComplete={() => {
          setLoading(false);
        }}
      >
        <p className="font-mono text-sm">NNN</p>
      </motion.div>
    </div>
  );
}

export default Loader;
