import React from 'react'
import {Form, Input} from 'semantic-ui-react'

const Register = () => {
    return (
        <Form className="auth-form">
            <h1>Register</h1>
            <Form.Field>
                <label>Email</label>
                <Input placeholder="Enter an email" icon="envelope" iconPosition="left"/>
            </Form.Field>
            
            <Form.Field>
                <label>Password</label>
                <Input placeholder="Enter a password" icon="lock" iconPosition="left"/>
            </Form.Field>

            <small>Already have an account? <strong>Login</strong></small>
        </Form>
    );
}
 
export default Register;