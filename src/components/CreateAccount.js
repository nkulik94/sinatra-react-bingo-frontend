import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap'

function CreateAccount( { handleSubmit, displayError, toggleForm } ) {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: ''
    })

    function handleForm(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function resetForm() {
        setFormData({
            name: '',
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
                <Form.Label htmlFor='name'>Name</Form.Label>
                <Form.Control 
                    type="text" 
                    name="name"
                    value={formData.name} 
                    placeholder='Enter Your Name'
                    onChange={handleForm}
                />
            </Form.Group>
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
                Create Account
            </Button>
            {displayError ? <p>Sorry, that username already exists</p> : null}
            <br/>
            <p>Already have an account? <a href="#" onClick={toggleForm}>Sign in</a></p>
        </Form>
    )
}

export default CreateAccount