import { motion } from "framer-motion";
import { useState } from "react";

const FloatingInput = ({ label, type = "text" }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState("");

  const isActive = focused || value !== "";

  return (
    <div className="relative w-full mb-5">
      {/* Floating Label */}
      <motion.label
        initial={false}
        animate={{
          y: isActive ? -12 : 12,
          x: 12,
          scale: isActive ? 0.85 : 1,
          color: isActive ? "#008C9E" : "#6b7280",
        }}
        transition={{ duration: 0.25 }}
        className="absolute left-3 top-0 pointer-events-none px-1
                   bg-white text-gray-500 font-medium"
      >
        {label}
      </motion.label>

      {/* Input Field */}
      <input
        type={type}
        value={value}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
        onChange={(e) => setValue(e.target.value)}
        className="w-full border border-gray-300 rounded-lg px-3 py-3
                   focus:outline-none focus:border-[#008C9E]
                   text-gray-700"
      />
    </div>
  );
};

export default FloatingInput;
