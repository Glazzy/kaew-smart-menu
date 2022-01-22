import React from "react";
import { SmartMenu } from ".";
import Menu from "../partials/Menu";
import NavigateToMenuOnClick from "../partials/NavigateToMenuOnClick";

export default {
    title: 'Smartmenu',
    component: SmartMenu
}

const Template = (args: JSX.IntrinsicAttributes) => {
    return (
        <SmartMenu {...args}  defaultOpen="menu1">
            <Menu name="menu1">
                menu1
                <NavigateToMenuOnClick name="menu2">
                    <button>test</button>
                </NavigateToMenuOnClick>
            </Menu>
            <Menu name="menu2">
                menu2
                <NavigateToMenuOnClick name="menu1">
                    <button>test</button>
                </NavigateToMenuOnClick>
            </Menu>
        </SmartMenu>
    )
};

export const Default = Template.bind({})