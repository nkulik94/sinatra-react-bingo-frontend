import React, { useState, useContext } from "react";
import { UserContext } from '../context/user';
import CreateAccount from "./CreateAccount";
import LoginForm from "./LoginForm";

function LoginPage() {
    const [form, setForm] = useState('logi')

    const [displayError, setError] = useState(false)

    const userObj = useContext(UserContext)

    function handleError(inputData, setFormData) {
        setFormData(inputData)
        setError(true)
        setTimeout(() => setError(false), 3000)
    }

    function handleSubmit(e, formInfo) {
        e.preventDefault()
        const inputData = formInfo.formData
        userObj.getAndSetUser(formInfo.formData, () => handleError(inputData, formInfo.setFormData))
        console.log(userObj.user)
        formInfo.resetForm()
    }

    return (
        <div>
            {form === 'login' ? <LoginForm handleSubmit={handleSubmit} displayError={displayError} /> : <CreateAccount handleSubmit={handleSubmit} displayError={displayError} />}
        </div>
    )
}

export default LoginPage