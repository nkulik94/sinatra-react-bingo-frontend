import React, { useState } from "react";

const UserContext = React.createContext();

function UserProvider({ children }) {
    const [user, setUser] = useState(null)
    
    function getAndSetUser(body, handleError) {
        const config = {
            method: 'POST',
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify(body)
        }
        fetch('http://localhost:4000/users', config)
            .then(r => r.json())
            .then(user => setUser(user))
            .catch(() => {
                handleError()
                setUser(null)
            })
    }
    const currentUser = {
        user,
        setUser,
        getAndSetUser
    }

    return <UserContext.Provider value={currentUser}>{children}</UserContext.Provider>;
}

export { UserContext, UserProvider };