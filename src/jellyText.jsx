// components/JellyText.jsx
import { motion } from "framer-motion";

const JellyText = ({ text, className = "" }) => {
  return (
    <motion.span
      className={`inline-block font-bold ${className}`}
      initial={{ scale: 1 }}
      whileHover={{
        scale: [1, 1.2, 0.95, 1.05, 1],
        transition: {
          duration: 0.6,
          ease: "easeInOut",
        },
      }}
    >
      {text}
    </motion.span>
  );
};

export default JellyText;
