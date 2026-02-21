import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface HackerTextProps {
  text: string;
  className?: string;
  speed?: number; // ms per frame
}

export const HackerText = ({ text, className = "", speed = 30 }: HackerTextProps) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovered, setIsHovered] = useState(false);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"; // Removed special chars to reduce width variance

  const scramble = () => {
    let iteration = 0;
    
    // Clear any existing interval if triggered multiple times quickly
    // (In this simple implementation, we rely on the state update to trigger re-renders,
    // but a ref for the interval ID would be robust for frequent triggers. 
    // For now, we'll keep it simple for the effect).
    
    const interval = setInterval(() => {
      setDisplayText((prev) =>
        text
          .split("")
          .map((letter, index) => {
            if (index < iteration) {
              return text[index];
            }
            return letters[Math.floor(Math.random() * letters.length)];
          })
          .join("")
      );

      if (iteration >= text.length) {
        clearInterval(interval);
      }

      iteration += 1 / 4; // Slower reveal for smoothness
    }, speed);
  };

  useEffect(() => {
    // Initial scramble on mount
    scramble();
  }, []);

  return (
    <motion.span
      className={`${className}`} // Use inherited font
      onMouseEnter={() => {
        setIsHovered(true);
        scramble();
      }}
      onMouseLeave={() => setIsHovered(false)}
    >
      {displayText}
    </motion.span>
  );
};
