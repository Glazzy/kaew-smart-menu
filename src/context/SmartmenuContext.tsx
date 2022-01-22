import React from "react";

interface ISmartmenuContext {
    history: string[]
    current: string,
    navigateTo(menuName: string): void,
    navigatePrev(): void,
    reset(): void
}

const SmartmenuContext = React.createContext({} as ISmartmenuContext)

export default SmartmenuContext