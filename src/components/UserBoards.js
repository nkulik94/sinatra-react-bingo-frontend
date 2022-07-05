import React, { useContext } from "react";
import { Link } from 'react-router-dom'
import { UserContext } from '../context/user';

function UserBoards() {
    const user = useContext(UserContext).user
    if (!user) return <p className="login-msg">Please <Link to='/'>log in</Link> to view your boards</p>
    
    console.log(user)


    return <h1>My Boards</h1>
}

export default UserBoards