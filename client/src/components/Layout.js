import React from 'react'
import {Grid} from 'semantic-ui-react'
import Navbar from '../Navbar'
import Profile from '../containers/Profile'
import Habits from '../containers/Habits'

const Layout = () => {
    return (
        <Grid id="layout">
        <Grid.Row>
            <Navbar/>
        </Grid.Row>

        <Grid.Row>
            <Profile/>
        </Grid.Row>

        <Grid.Row>
            <Habits/>
        </Grid.Row>
        </Grid>
    );
}
 
export default Layout;