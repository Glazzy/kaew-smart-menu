import React, { ReactNode } from "react"
import useSmartMenu from "../hooks/useSmartMenu"
import "../scss/smart-menu.scss"

export interface MenuProps {
    name: string,
    children?: ReactNode
}

export default function Menu({name, children}: MenuProps): JSX.Element | null {
    const {current} = useSmartMenu()
    
    if(name !== current) return null

    return (
        <div className="menu">
            {children}
        </div>
    )
}