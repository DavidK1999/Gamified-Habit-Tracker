import React from 'react'
import {Form, Button} from 'semantic-ui-react'
import {useRouteMatch} from 'react-router-dom'

const Login = () => {
    const match = useRouteMatch();
    return (
        <Form className="auth-form">
            <h1>Login</h1>
            <Form.Field>
                <label>Login</label>
                <input placeholder="Enter your email"/>
            </Form.Field>
            
            <Form.Field>
                <label>Password</label>
                <input placeholder="Enter your password"/>
            </Form.Field>

            <small>Don't have an account? <strong>Register</strong></small>
        </Form>
    );
}
 
export default Login;