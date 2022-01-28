import React from "react";

interface ISmartMenuContext {
    history: string[]
    current: string,
    navigateTo(menuName: string): void,
    navigatePrev(): void,
    reset(): void,
    direction: number,
    setHeight(height: number): void
}

const SmartMenuContext = React.createContext({} as ISmartMenuContext)

export default SmartMenuContext