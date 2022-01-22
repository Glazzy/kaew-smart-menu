import React, {cloneElement, ReactNode} from 'react';
import useSmartMenu from '../hooks/useSmartMenu';

export default function NavigateToMenuOnClick({name, children}) {

    const {navigateTo} = useSmartMenu()
 
    return React.Children.map(children, (child) => cloneElement(child, {onClick: () => navigateTo(name)}));
}
