import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className, id, ...props }: SectionProps) => {
  return (
    <section
      id={id}
      className={cn("min-h-screen py-20 relative overflow-hidden flex flex-col justify-center", className)}
      {...props}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true, margin: "-100px" }}
        className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        {children}
      </motion.div>
    </section>
  );
};
