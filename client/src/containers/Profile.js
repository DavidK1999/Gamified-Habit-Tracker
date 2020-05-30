import React from 'react'
import {Container, Header, Divider, Placeholder} from 'semantic-ui-react'
import Stats from './Stats'

const Profile = () => {
    return (
        <Container id="profile-container">
        <Header as="h3" textAlign="center">
            Username
        </Header>
        <Divider />
        
        <Placeholder>
            <Placeholder.Image square /> 
        </Placeholder>
        
            
        <Stats/>
        </Container>

    )
}
 
export default Profile