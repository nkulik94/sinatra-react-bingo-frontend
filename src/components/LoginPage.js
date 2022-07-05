import React, { useState } from "react";
import CreateAccount from "./CreateAccount";
import LoginForm from "./LoginForm";

function LoginPage() {
    const [form, setForm] = useState('login')

    return (
        <div>
            {form === 'login' ? <LoginForm /> : <CreateAccount />}
        </div>
    )
}

export default LoginPage