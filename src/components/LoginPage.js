import React, { useState, useContext } from "react";
import { UserContext } from '../context/user';
import CreateAccount from "./CreateAccount";
import LoginForm from "./LoginForm";

function LoginPage() {
    const [loginForm, setForm] = useState(true)

    const [displayError, setError] = useState(false)

    const userObj = useContext(UserContext)

    const toggleForm = () => setForm(!loginForm)

    function handleError(inputData, setFormData) {
        setFormData(inputData)
        setError(true)
        setTimeout(() => setError(false), 3000)
    }

    function handleSubmit(e, formInfo) {
        e.preventDefault()
        const inputData = formInfo.formData
        userObj.getAndSetUser(formInfo.formData, () => handleError(inputData, formInfo.setFormData))
        formInfo.resetForm()
    }

    return (
        <div>
            {loginForm ? <LoginForm handleSubmit={handleSubmit} displayError={displayError} toggleForm={toggleForm} /> : <CreateAccount handleSubmit={handleSubmit} displayError={displayError} toggleForm={toggleForm} />}
        </div>
    )
}

export default LoginPage