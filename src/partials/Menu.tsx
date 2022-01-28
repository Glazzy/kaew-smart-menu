import React, { ReactNode, useRef } from "react"
import useSmartMenu from "../hooks/useSmartMenu"
import {AnimatePresence, motion, Variants} from "framer-motion"
import "../scss/smart-menu.scss"

export interface MenuProps {
    name: string,
    children?: ReactNode
}

export default function Menu({name, children}: MenuProps): JSX.Element {
    const {current, direction, setHeight} = useSmartMenu()
    const menuRef = useRef()


    const variants: Variants = {
        enter: (direction: number) => ({x:  direction > 0 ? '100%' : '-100%', position: 'absolute', top: 0, left: 0 }),
        center: { x: 0, position: 'relative' },
        exit: (direction: number) => ({x:  direction < 0 ? '100%' : '-100%', position: 'absolute',  top: 0, left: 0 })
    }
  
    return (
        <AnimatePresence initial={false} custom={direction}>
            {current === name && (
                <motion.div
                    ref={menuRef}
                    custom={direction}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{duration: 0.2}}
                    className="menu"
                    onAnimationStart={(variant) => {
                        if(variant !== 'center') return
                        setHeight(menuRef.current.offsetHeight)
                    }}
               >
                   {children}
               </motion.div>
            )}
        </AnimatePresence>
     
    )
}