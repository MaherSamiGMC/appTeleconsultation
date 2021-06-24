import React from 'react'
import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

function AppSidebar() {
    return (
        <ProSidebar>
            <Menu iconShape="square">
                <MenuItem icon={ <FontAwesomeIcon icon={faCoffee} />}>Dashboard</MenuItem>
                <SubMenu title="Components" icon={<FontAwesomeIcon icon={faCoffee} />}>
                <MenuItem>Component 1</MenuItem>
                <MenuItem>Component 2</MenuItem>
                <MenuItem>Component 3</MenuItem>
                </SubMenu>
            </Menu>
        </ProSidebar>
    )
}

export default AppSidebar
