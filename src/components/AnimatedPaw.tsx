import { useState } from "react";
import { motion } from "framer-motion";

interface AnimatedPawProps {
  label: string;
  className?: string;
  flip?: boolean;
  rotate?: number;
}

const AnimatedPaw = ({ label, className = "", flip = false, rotate = 0 }: AnimatedPawProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isActive, setIsActive] = useState(false);

  // Animation variants for vertical floating
  const floatingVariants = {
    initial: {
      y: [0, -20, 0],
      transition: {
        duration: 2.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
    active: {
      y: [0, -10, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <div className={`absolute ${className}`}>
      <motion.div
        className="relative cursor-pointer"
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        onClick={() => setIsActive(!isActive)}
        animate={isActive ? "active" : "initial"}
        variants={floatingVariants}
      >
        {/* Paw Image Container */}
        <div
          className={`relative w-32 h-32 md:w-40 md:h-40 ${flip ? "scale-x-[-1]" : ""}`}
          style={{ transform: `rotate(${rotate}deg) ${flip ? "scaleX(-1)" : ""}` }}
        >
          {/* Base grey paw (always visible) */}
          <img
            src="/paw.png"
            alt="paw"
            className="absolute inset-0 w-full h-full object-contain opacity-50 grayscale"
          />

          {/* White blinking paw (initial state) */}
          {!isActive && (
            <motion.img
              src="/paw.png"
              alt="paw"
              className="absolute inset-0 w-full h-full object-contain"
              animate={{
                opacity: [0.7, 1, 0.7],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          )}

          {/* Orange paw (active state) */}
          {(isActive || isHovered) && (
            <motion.img
              src="/paw.png"
              alt="paw"
              className="absolute inset-0 w-full h-full object-contain"
              style={{
                filter: "brightness(1.1) saturate(0.8) hue-rotate(-10deg)",
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3 }}
            />
          )}
        </div>

        {/* Label */}
        <div
          className={`mt-2 text-center text-base md:text-xl font-bold transition-all duration-300 ${
            isActive || isHovered
              ? "text-[#E8A87C]"
              : "text-primary/70"
          }`}
          style={{
            textShadow:
              isActive || isHovered
                ? "0 0 6px rgba(232, 168, 124, 0.5), 0 0 12px rgba(232, 168, 124, 0.3)"
                : "none",
          }}
        >
          {label}
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedPaw;
