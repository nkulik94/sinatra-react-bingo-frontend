import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { Form, Button } from 'react-bootstrap'

function LoginForm() {
    const userObj = useContext(UserContext)
    
    
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })
    const [displayError, setError] = useState(false)

    function handleForm(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function handleError() {
        setError(true)
        setTimeout(() => setError(false), 3000)
    }

    function handleSubmit(e) {
        e.preventDefault()
        userObj.getAndSetUser(formData, handleError)
        setFormData({
            username: '',
            password: ''
        })
    }

    return (
        <Form className='account-form' onSubmit={handleSubmit}>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='username'>Username</Form.Label>
                <Form.Control 
                    type="text"
                    name="username"
                    value={formData.username}
                    placeholder='Enter Username'
                    onChange={handleForm}
                />
            </Form.Group>
            <Form.Group className='mb-3'>
                <Form.Label htmlFor='password'>Password</Form.Label>
                <Form.Control
                    type='password'
                    name="password"
                    value={formData.password}
                    placeholder='Enter Password'
                    onChange={handleForm}
                />
            </Form.Group>
            <Button variant="primary" type="submit">
                Log In
            </Button>
            {displayError ? <p>Sorry, the username or password do not match our records, please try again</p> : null}
        </Form>
    )
}

export default LoginForm