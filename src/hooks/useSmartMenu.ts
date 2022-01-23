import React, { useContext } from 'react'
import SmartMenuContext from '../context/SmartMenuContext'

export default function useSmartMenu () {
    return useContext(SmartMenuContext)
}