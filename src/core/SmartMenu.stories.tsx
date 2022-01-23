import React from "react";
import { SmartMenu } from ".";
import Menu from "../partials/Menu";
import MenuItem from "../partials/MenuItem";
import NavigateToMenuOnClick from "../partials/NavigateToMenuOnClick";
import SmartMenuContent from "../ui/SmartMenuContent";
import SmartMenuFooter from "../ui/SmartMenuFooter";
import SmartMenuHeader from "../ui/SmartMenuHeader";

export default {
    title: 'Smartmenu',
    component: SmartMenu
}

const Template = (args: JSX.IntrinsicAttributes) => {
    return (
        <SmartMenu {...args}  defaultOpen="menu1">
            <Menu name="menu1">
                <SmartMenuHeader>
                    menu1
                </SmartMenuHeader>
                <SmartMenuContent>
                    <MenuItem title='Support' navigateTo={'support'} />
                    <MenuItem title='Settings' navigateTo={'settings'} />
                    <MenuItem title='Account' navigateTo={'account'} />
                </SmartMenuContent>
                <SmartMenuFooter>
                    footer
                </SmartMenuFooter>
            </Menu>
            <Menu name="support">
                support
            </Menu>
            <Menu name="settings">
                settings
            </Menu>
            <Menu name="account">
                account
            </Menu>
        </SmartMenu>
    )
};

export const Default = Template.bind({})