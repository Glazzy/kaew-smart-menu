import React, { ReactNode } from 'react';
import NavigateToMenuOnClick from './NavigateToMenuOnClick';

interface MenuItemProps {
    navigateTo: string
    title: string
    children?: ReactNode
}

export default function MenuItem({navigateTo, title, children}: MenuItemProps) {
  return (
        <NavigateToMenuOnClick name={navigateTo}>
            <button className='menu__menu-item' type="button">
                {title || children}
                <span>></span>
            </button>
        </NavigateToMenuOnClick>
  );
}
