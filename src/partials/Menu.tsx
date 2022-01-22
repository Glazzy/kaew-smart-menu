import React, { ReactNode } from "react"
import useSmartMenu from "../hooks/useSmartMenu"

export interface MenuProps {
    name: string,
    children?: ReactNode
}

export default function Menu({name, children}: MenuProps): JSX.Element | null {
    const {current} = useSmartMenu()

    console.log(current)
    
    if(name !== current) return null

    return (
        <div>
            {children}
        </div>
    )
}