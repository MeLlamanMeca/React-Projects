// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion"

import './GridItem.css'

export default function GridItem({ item, isEmpty, size, pos }) {
  
  const handleClick = () => {if (!isEmpty && item.url) window.open(item.url, "_blank")}

  return (

    <motion.div {...(!isEmpty && {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, amount: 0.5},
        transition: { duration: 0.2, delay: 0.5+(0.05*pos) }
        })}
      className={!isEmpty && "adaptable-grid-bg"}
      style={{ "--hover-color": !isEmpty ? item?.hoverColor : "transparent" }}
      onClick={handleClick}
    >
      <motion.div {...(!isEmpty && {
        initial: { opacity: 0 },
        whileInView: { opacity: 1 },
        viewport: { once: true, amount: 0.5},
        transition: { duration: 0.2, delay: 0.5+(0.05*pos) }
        })}
        className={`adaptable-grid-item ${isEmpty ? "adaptable-grid-empty" : ""}`}
        style={{ "--component-size": `${size}px` }}
      >
        {!isEmpty && (
          <>
            <img src={item.imgSrc} alt={`${item.name} icon`} className="adaptable-grid-item-src"/>
            <img src={item.imgSrc} alt={`${item.name} blurred`} className="adaptable-grid-item-bg"/>
          </>
        )}
      </motion.div>
    </motion.div>
  )
}