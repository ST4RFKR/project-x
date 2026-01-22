import { motion } from "motion/react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Sparkles } from "lucide-react";

export function AnimationIcon({
  isOpen,
  setIsOpen,
  children,
  title,
  suptitle,
  description,
  animateComponent,
}: {
  isOpen: boolean;
  setIsOpen: (open: boolean) => void;
  children: React.ReactNode;
  title: string;
  suptitle: string;
  description: string;
  animateComponent: React.ReactNode;
}) {
  return (
    <Popover open={isOpen} onOpenChange={setIsOpen}>
      <PopoverTrigger
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        <motion.div
          whileHover={{ scale: 1.15, rotate: 5 }}
          whileTap={{ scale: 0.95 }}
          animate={isOpen ? { scale: 1.1 } : { scale: 1 }}
          className="relative cursor-pointer"
        >
          {/* Continuous pulse effect */}
          <motion.div
            className="absolute inset-0 rounded-full bg-emerald-500/20"
            animate={{
              scale: [1, 1.4, 1],
              opacity: [0.5, 0, 0.5],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />

          {/* Glow effect on hover */}
          <motion.div
            className="absolute inset-0 rounded-full bg-emerald-500/30 blur-md"
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
          />

          {/* Icon container with subtle breathing animation */}
          <motion.div
            className="relative"
            animate={{
              y: [0, -2, 0],
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            {children}
          </motion.div>

          {/* Sparkle indicator - rotates continuously */}
          <motion.div
            className="absolute -top-1 -right-1"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Sparkles
              className="w-3 h-3 text-emerald-500"
              fill="currentColor"
            />
          </motion.div>
        </motion.div>
      </PopoverTrigger>

      <PopoverContent className="w-80 p-6" sideOffset={12}>
        <div className="space-y-4">
          <div className="text-center">
            <h3 className="font-semibold text-foreground">{title}</h3>
            <p className="text-sm text-muted-foreground mt-1">{suptitle}</p>
          </div>

          <div className="flex items-center justify-center">
            {animateComponent}
          </div>

          <div className="text-center text-xs text-muted-foreground">
            {description}
          </div>
        </div>
      </PopoverContent>
    </Popover>
  );
}
