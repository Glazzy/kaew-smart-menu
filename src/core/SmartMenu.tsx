
import React, { ReactNode, useState } from "react"
import SmartmenuContext from "../context/SmartmenuContext"

interface SmartmenuProps {
    defaultOpen: string,
    children?: ReactNode
}


export default function SmartMenu ({children, defaultOpen} : SmartmenuProps) : JSX.Element {
    const [stack, setStack] = useState<string[]>([defaultOpen])

    const push = (value: string) => setStack(prevState => {
        prevState.push(value)
        return prevState
    })

    const pop = () => setStack(prevState => {
        prevState.pop()
        return prevState
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


    return (
        <SmartmenuContext.Provider value={value}>
            {children}
        </SmartmenuContext.Provider>
    )
}

