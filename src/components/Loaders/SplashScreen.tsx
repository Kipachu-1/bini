"use client";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
const SplashScreen = () => {
  const [visible, setVisible] = useState(true);
  const [scope, animate] = useAnimate();
  useEffect(() => {
    animate(scope.current, { opacity: 1, scale: 1 }, { duration: 0.2 });
    setTimeout(() => {
      setVisible(false);
    }, 1500);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          transition={{ duration: 1 }}
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed z-[9999] bg-[#0c2e2b]  inset-0 w-full h-full flex justify-center items-center"
        >
          <motion.div
            initial={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            ref={scope}
          >
            <Image
              alt=""
              src={"/biniLogo.svg"}
              width={250}
              height={250}
              priority
            />
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SplashScreen;
