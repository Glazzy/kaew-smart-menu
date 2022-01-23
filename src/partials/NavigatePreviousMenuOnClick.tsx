import React, {cloneElement} from 'react';
import useSmartMenu from '../hooks/useSmartMenu';

export default function NavigatePreviousMenuOnClick({children}) {

    const {navigatePrev} = useSmartMenu()
 
    return React.Children.map(children, (child) => cloneElement(child, {onClick: () => navigatePrev()}));
}
