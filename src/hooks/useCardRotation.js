import { useMotionValue, useTransform } from "framer-motion";

export function useCardRotation(onSendBack) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useTransform(y, [-100, 100], [60, -60]);
  const rotateY = useTransform(x, [-100, 100], [-60, 60]);

  function handleDragEnd() {
    const currentX = x.get();
    const currentY = y.get();

    if (Math.abs(currentX) > 100 || Math.abs(currentY) > 100) {
      onSendBack();
    }
  }

  return { x, y, rotateX, rotateY, handleDragEnd };
}