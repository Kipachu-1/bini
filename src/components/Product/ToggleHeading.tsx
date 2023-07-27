"use client";
import { duration } from "@mui/material";
import { AnimatePresence, motion, useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { MdNavigateNext } from "react-icons/md";
interface ToggleHeadingProps {
  name: string;
  children: React.ReactNode;
  initial?: boolean;
}

const ToggleHeading: React.FC<ToggleHeadingProps> = ({
  name,
  children,
  initial = false,
}) => {
  const [toggled, setToggled] = useState(initial);
  const toggle = () => {
    setToggled(!toggled);
  };
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [height, setHeight] = useState<number | "auto">("auto");
  const [scope, animate] = useAnimate();
  const [scopeInner, animateInner] = useAnimate();

  useEffect(() => {
    if (containerRef.current) {
      const resizeObserver = new ResizeObserver((entries) => {
        // We only have one entry, so we can use entries[0].
        const observedHeight = entries[0].contentRect.height;
        setHeight(observedHeight);
      });

      resizeObserver.observe(containerRef.current);

      return () => {
        // Cleanup the observer when the component is unmounted
        resizeObserver.disconnect();
      };
    }
  }, []);

  useEffect(() => {
    if (toggled) {
      animate(
        scope.current,
        { height: height },
        { duration: 0.4, type: "tween" }
      );
      animateInner(scope.current, { opacity: 1 }, { duration: 0.6 });
    }
    if (!toggled) {
      animate(
        scope.current,
        { height: "0px" },
        { duration: 0.4, type: "tween" }
      );
      animateInner(scope.current, { opacity: 0 }, { duration: 0.6 });
    }
  }, [toggled, animate]);

  return (
    <div className="flex flex-col w-full">
      <div
        onClick={toggle}
        className="w-full flex items-center justify-between p-[20px_16px] text-[16px] cursor-pointer"
      >
        <p>{name}</p>
        <MdNavigateNext
          className={`${
            toggled ? "rotate-90" : "rotate-0"
          } duration-300 text-xl`}
        />
      </div>
      <motion.div
        className="w-full h-auto overflow-hidden"
        initial={{ height: "0px" }}
        style={{ height: "0px" }}
        ref={scope}
      >
        <motion.div ref={containerRef}>
          <div ref={scopeInner}>{children}</div>
        </motion.div>
      </motion.div>
      <div className="border-b border-[#ffe7ba] h-[2px]"></div>
    </div>
  );
};
export default ToggleHeading;
