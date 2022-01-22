import React, { useContext } from 'react'
import SmartmenuContext from '../context/SmartmenuContext'

export default function useSmartMenu () {
    return useContext(SmartmenuContext)
}