import React from 'react'
import {Form, Button} from 'semantic-ui-react'
import {useRouteMatch} from 'react-router-dom'
import Authenticate from '../hooks/authentication'

const Login = () => {
    const match = useRouteMatch();
    const {handleSubmit, handleInputChange} = Authenticate()
    return (
        <Form className="auth-form" onSubmit={(e) => handleSubmit(e)}>
            <h1>Login</h1>
            <Form.Field>
                <label>Login</label>
                <input 
                    placeholder="Enter your email"
                    name="email" 
                    onChange={handleInputChange}/>
            </Form.Field>
            
            <Form.Field>
                <label>Password</label>
                <input 
                    placeholder="Enter your password" 
                    name="password"
                    onChange={handleInputChange}/>
            </Form.Field>

            <Form.Field>
                <Button>Submit</Button>
            </Form.Field>

            <small>Don't have an account? <strong>Register</strong></small>
        </Form>
    );
}
 
export default Login;