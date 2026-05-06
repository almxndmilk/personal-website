import { useState } from "react";
import { motion } from "framer-motion";
import { DraggableContainer } from "./DraggableContainer";

export function CardStack({
  items,
  children,
  containerClassName = "relative h-90 w-100",
  cardClassName = "absolute h-90 w-100 cursor-grab",
  stackConfig = { rotation: 6, scale: 0.05 },
}) {
  const [cards, setCards] = useState(items);

  function sendToBack(id) {
    setCards((prev) => {
      const newCards = [...prev];
      const index = newCards.findIndex((item) => item.id === id);
      const [item] = newCards.splice(index, 1);
      newCards.unshift(item);
      return newCards;
    });
  }

  return (
    <div
      className={containerClassName}
      style={{ perspective: 1000 }}
    >
      {cards.map((item, index) => (
        <DraggableContainer
          key={item.id}
          onSendBack={() => sendToBack(item.id)}
          className={cardClassName}
        >
          <motion.div
            className="h-full w-full"
            animate={{
              rotateZ: -((cards.length - index - 1) * stackConfig.rotation),
              scale: 1 + index * stackConfig.scale - cards.length * stackConfig.scale,
              transformOrigin: "10% 90%",
            }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 50,
            }}
          >
            {children(item)}
          </motion.div>
        </DraggableContainer>
      ))}
    </div>
  );
}