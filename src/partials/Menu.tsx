import React, { ReactNode } from "react"
import useSmartMenu from "../hooks/useSmartMenu"
import {AnimatePresence, motion} from "framer-motion"
import "../scss/smart-menu.scss"

export interface MenuProps {
    name: string,
    children?: ReactNode
}

export default function Menu({name, children}: MenuProps): JSX.Element | null {
    const {current} = useSmartMenu()

    const variants = {
        enter: (direction: number) =>  ({x: '-100%', position: 'absolute', top:0, left:0 }),
        center: { x: 0, position: 'relative' },
        exit: (direction: number) => ({ x: '100%', position: 'absolute',  top:0, left:0 })
    }

    const direction = 0

    return (
        <AnimatePresence initial={false} custom={direction}>
            {current === name && (
                <motion.div
                    custom={direction}
                    variants={variants}
                    initial={'enter'}
                    animate={'center'}
                    exit={'exit'}

                    transition={{duration: 0.2}}
                    className="menu"
               >
                   {children}
               </motion.div>
            )}
        </AnimatePresence>
     
    )
}