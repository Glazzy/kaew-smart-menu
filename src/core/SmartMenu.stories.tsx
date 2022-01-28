import React from "react";
import { SmartMenu } from ".";
import Menu from "../partials/Menu";
import MenuItem from "../partials/MenuItem";
import NavigatePreviousMenuOnClick from "../partials/NavigatePreviousMenuOnClick";
import NavigateToMenuOnClick from "../partials/NavigateToMenuOnClick";
import SmartMenuContent from "../ui/SmartMenuContent";
import SmartMenuFooter from "../ui/SmartMenuFooter";
import SmartMenuHeader from "../ui/SmartMenuHeader";

export default {
    title: 'Smartmenu',
    component: SmartMenu,
    parameters: {
        backgrounds: {
          default: 'dark',
          values: [
              { name: 'dark', value: '#171820'}
          ]
        },
      },
}

const Template = (args: JSX.IntrinsicAttributes) => {
    return (
        <SmartMenu {...args}  defaultOpen="default">
                <Menu name="default">
                    <SmartMenuHeader>
                        Default
                    </SmartMenuHeader>
                    <SmartMenuContent>
                        <MenuItem title='Support' navigateTo={'support'} />
                        <MenuItem title='Settings' navigateTo={'settings'} />
                    </SmartMenuContent>
                    <SmartMenuFooter>
                        footer
                    </SmartMenuFooter>
                </Menu>
                <Menu name="support">
                    <SmartMenuHeader>
                        <NavigatePreviousMenuOnClick>
                            <button>back</button>
                        </NavigatePreviousMenuOnClick>
                        support
                    </SmartMenuHeader>
                    <SmartMenuContent>
                        <MenuItem title='Default' navigateTo={'default'} />
                        <MenuItem title='Settings' navigateTo={'settings'} />
                        <MenuItem title='test' navigateTo={'settings'} />
                    </SmartMenuContent>
                    <SmartMenuFooter>
                        footer
                    </SmartMenuFooter>
                </Menu>
                <Menu name="settings">
                    <SmartMenuHeader>
                        settings
                    </SmartMenuHeader>
                    <SmartMenuContent>
                        <MenuItem title='Default' navigateTo={'default'} />
                        <MenuItem title='Support' navigateTo={'support'} />
                    </SmartMenuContent>
                    <SmartMenuFooter>
                        footer
                    </SmartMenuFooter>
                </Menu>
        
        </SmartMenu>
    )
};

export const Default = Template.bind({})