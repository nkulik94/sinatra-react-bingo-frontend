import React, { useState, useContext } from 'react';
import { UserContext } from '../context/user';
import { Form, Button } from 'react-bootstrap'

function CreateAccount() {
    const [formData, setFormData] = useState({
        name: '',
        username: '',
        password: ''
    })
    const [displayError, setError] = useState(false)

    const userObj = useContext(UserContext)

    function handleForm(e) {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    function handleError(inputData) {
        setFormData(inputData)
        setError(true)
        setTimeout(() => setError(false), 3000)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const inputData = formData
        userObj.getAndSetUser(formData, () => handleError(inputData))
        console.log(userObj.user)
        setFormData({
            name: '',
            username: '',
            password: ''
        })
    }

    return (
        <Form className='account-form' onSubmit={handleSubmit}>
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
        </Form>
    )
}

export default CreateAccount