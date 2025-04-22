import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export const Available = () => {
  const isAvailable = true;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className={cn(
        "flex items-center mx-auto w-fit gap-2 text-base font-normal px-3 py-1 rounded-full border",
        isAvailable
          ? "border-green-200 bg-green-50/50 text-green-600 dark:border-green-800 dark:bg-green-950/50 dark:text-green-400"
          : "border-red-200 bg-red-50/50 text-red-600 dark:border-red-800 dark:bg-red-950/50 dark:text-red-400"
      )}
    >
      <motion.span
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        className={cn(
          "w-2 h-2 rounded-full animate-pulse",
          isAvailable ? "bg-green-500" : "bg-red-500"
        )}
      />
      <motion.span
        initial={{ x: -10, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ delay: 0.1 }}
      >
        {isAvailable ? "Available for hire" : "Currently busy"}
      </motion.span>
    </motion.div>
  );
};
