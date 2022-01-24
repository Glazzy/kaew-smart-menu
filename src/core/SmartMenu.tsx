
import { AnimatePresence, motion } from "framer-motion"
import React, { ReactNode, useState } from "react"
import SmartMenuContext from "../context/SmartMenuContext"

interface SmartmenuProps {
    defaultOpen: string,
    children?: ReactNode
}


export default function SmartMenu ({children, defaultOpen} : SmartmenuProps) : JSX.Element {
    const [stack, setStack] = useState<string[]>([defaultOpen])

    const push = (value: string) => setStack(prevState => {
        const nextState = [...prevState]
        nextState.push(value)
        return nextState
    })

    const pop = () => setStack(prevState => {
        const nextState = [...prevState]
        nextState.pop()
        return nextState
    })

    const peek = () => stack[stack.length - 1]

    const reset = () => setStack([defaultOpen])

    const value = {
        history: stack,
        current: peek(),
        navigateTo: push,
        navigatePrev: pop,
        reset
    }

    console.log(React.Children.toArray(children))

    return (
        <SmartMenuContext.Provider value={value}>
            <div className="smart-menu">
                
                    {children}
               
            </div>
        </SmartMenuContext.Provider>
    )
}

