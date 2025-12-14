import {SidebarClose} from "lucide-react";
import { AnimatePresence, motion } from "motion/react"
import {useState} from "react";

const Drawer = ({children, onClose, isOpen, title}) => {

  const [isVisible, setIsVisible] = useState(!!isOpen)

  return (
    <AnimatePresence onExitComplete={onClose}>
      {isVisible ? (
        <motion.div
          initial={{ opacity: 0, minWidth: "0px" }}
          animate={{ opacity: 1, minWidth: "384px" }}
          exit={{ opacity: 0, minWidth: "0px" }}
          transition={{
            duration: 0.8,
            delay: 0.3,
            ease: [0, 0.71, 0.2, 1.01],
          }}
          className="rounded-2xl w-0 flex flex-col bg-white/90 backdrop-blur-md shadow-2xl overflow-hidden"
        >
          <div className="z-10 sticky top-0 flex items-center justify-between bg-linear-to-b from-white to-transparent py-1 px-2 min-h-10">
            <div className="flex gap-2">
              <button className="button-icon" onClick={() => setIsVisible(false)}>
                <SidebarClose size={16}/>
                {title ?? "close"}
              </button>
            </div>
            <div>item 2</div>
          </div>
          <div className="relative px-12 h-fit w-full z-0 py-4">
            {children}
          </div>
        </motion.div>
      ) : null}

    </AnimatePresence>

  )
}
export default Drawer