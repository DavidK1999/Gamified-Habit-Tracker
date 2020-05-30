import React from 'react'
import {Progress} from 'semantic-ui-react'

const Stats = () => {
    return (
        <>
        <Progress color="red" percent={90} label="Health" progress/>
        <Progress color="yellow" percent={42} label="Magic" progress/>
        </>
    )
}
 
export default Stats