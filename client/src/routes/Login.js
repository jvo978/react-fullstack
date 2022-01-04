import axios from 'axios';
import { useState } from 'react'
import '../css/Login.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const signIn = () => {
        axios.post('http://localhost:3001/auth/login', { username: username, password: password }).then(response => {
            console.log(response.data)
        })
    } 

    return (
        <div className='login__container'>
            <label>Username:</label>
            <input type="text" placeholder="Username" onChange={(event) => {
                setUsername(event.target.value)
            }} />
            <label>Password:</label>
            <input type="password" placeholder="Password" autoComplete='off' onChange={(event) => {
                setPassword(event.target.value)
            }} />
            <button onClick={signIn}>Sign In</button>
        </div>
    )
}

export default Login
