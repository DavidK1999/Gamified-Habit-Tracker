import React from 'react'
import {Container, Header} from 'semantic-ui-react'
import AddHabit from '../components/AddHabit'
import Habit from '../components/Habit'

const Habits = () => {
    return (
        <Container fluid id="habits-container">
            <Header as="h3">Habits</Header>
            <AddHabit/>
            <Habit/>
        </Container>
    )
}
 
export default Habits