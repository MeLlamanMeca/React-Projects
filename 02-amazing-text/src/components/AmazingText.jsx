// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { useState } from "react";

import "./AmazingText.css";

export default function AmazingText({ texts = ["Amazing Text"] }) {
  const maxIndex = texts.length;

  const [items, setItems] = useState(
    texts.map((_, i) => randomConfig(i))
  );

  function randomConfig(index) {
    return {
      top: 5 + Math.random() * 75 + "%",
      left: 5 + Math.random() * 85 + "%",
      duration: 3 + Math.random() * 5,
      delay: Math.random() * 3,
      key: index, // clave inicial = posición en array
      toggled: false, // para saber si se sumó maxIndex
    };
  }

  const handleAnimationComplete = (index) => {
    setItems((prev) => {
      const newItems = [...prev];
      const toggled = !newItems[index].toggled;

      newItems[index] = {
        ...newItems[index],
        top: 5 + Math.random() * 75 + "%",
        left: 5 + Math.random() * 85 + "%",
        duration: 3 + Math.random() * 5,
        delay: Math.random() * 3,
        key: toggled ? index + maxIndex : index, // alternamos la key
        toggled: toggled,
      };
      return newItems;
    });
  };

  return (
    <>
      {texts.map((text, index) => {
        const config = items[index];
        return (
          <motion.p
            key={config.key}
            className="amazing-text"
            style={{
              position: "absolute",
              top: config.top,
              left: config.left,
              display: "inline-block",
            }}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ opacity: 1, filter: "blur(1px)" }}
            transition={{
              duration: config.duration / 2,
              repeat: 1,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: config.delay,
            }}
            onAnimationComplete={() => handleAnimationComplete(index)}
          >
            {text}
          </motion.p>
        );
      })}
    </>
  );
}