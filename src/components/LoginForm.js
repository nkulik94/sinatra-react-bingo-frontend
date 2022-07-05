import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'

function LoginForm( { handleSubmit, displayError } ) {
    
    const [formData, setFormData] = useState({
        username: '',
        password: ''
    })

    function handleForm(e) {
        setFormData({...formData, [e.target.name]: e.target.value})
    }

    function resetForm() {
        setFormData({
            username: '',
            password: ''
        })
    }

    const formInfo = {
        formData,
        setFormData,
        resetForm
    }

    return (
        <Form className='account-form' onSubmit={e => handleSubmit(e, formInfo)}>
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