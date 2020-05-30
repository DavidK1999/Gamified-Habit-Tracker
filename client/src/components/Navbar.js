import React from 'react'
import {Menu} from 'semantic-ui-react'

const Navbar = () => {
    return (
        <Menu id="menu">
            <Menu.Menu position="left">
                <Menu.Item icon="align justify"/>
            </Menu.Menu>

            <Menu.Menu position="right">
                <Menu.Item icon="undo"/>
                <Menu.Item icon="bell"/>
                <Menu.Item icon="user"/>
            </Menu.Menu>
        </Menu>
    )
}
 
export default Navbar