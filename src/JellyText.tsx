import { motion } from "framer-motion";

interface JellyTextProps {
  text: string;
  className?: string;
}

const JellyText = ({ text, className = "" }: JellyTextProps) => {
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
