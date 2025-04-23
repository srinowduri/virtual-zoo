import React, {useState} from 'react'
import './Login.css';
const Login = ({ onLoginSuccess }) => {
    const [username, setUserame] = useState('');
    const [passWord, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = (event) => {
        event.preventDefault();
        if(!username && !passWord) {
            setError('username and password both are required');
        } else {
            setError(' ');
            console.log(`Logged in with ${username}`);
            onLoginSuccess();
        }
    }
  return (
    <div className='login-container'>
        <form onSubmit={handleLogin}>
            <h2>Login</h2>
            <input type='text' placeholder='enter username' value={username}
                    onChange={(event) => setUserame(event.target.value)}/>
            <input type='password' placeholder='enter password' value={passWord}
                    onChange={(event) => setPassword(event.target.value)}/>
            {error && <p className="error">{error}</p>}
            <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Login;