import { memo, PropsWithChildren } from "react";
import { motion } from "framer-motion";

interface FloatingActionButtonProps {
  className?: string;
  onClinkEvent: () => void;
}

function FloatingActionButton({
  children,
  onClinkEvent,
  className,
}: PropsWithChildren<FloatingActionButtonProps>) {
  const cn = `sticky ${className}`;
  return (
    <div>
      <motion.div>
        <button className={cn} onClick={onClinkEvent}>
          {children}
        </button>
      </motion.div>
    </div>
  );
}

export default memo(FloatingActionButton);
