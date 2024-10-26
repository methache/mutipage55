import Form from 'react-bootstrap/Form';
import { useRef } from 'react';
import './Login.css';
import { verifyUser } from '../../data/users';

function Login({ setToken, setRole }) {
    const userRef = useRef();
    const passRef = useRef();

    const handleLogin = () => {
        const username = userRef.current.value.trim();
        const password = passRef.current.value.trim();

        // Reset input fields
        userRef.current.value = '';
        passRef.current.value = '';

        // Verify user credentials
        const userInfo = verifyUser(username, password);
        if (!userInfo) {
            alert('Wrong username or password');
            userRef.current.focus();  // Focus on username input if error
        } else {
            setToken(userInfo.token);
            setRole(userInfo.role);   // Set token and role on successful login
        }
    };

    return (
        <div className='login-container'>
            <Form.Label htmlFor="username">Username</Form.Label>
            <Form.Control
                type="text"
                id="username"
                placeholder="user"
                ref={userRef}
                style={{ textAlign: 'center' }}
            />
            <Form.Label htmlFor="password">Password</Form.Label>
            <Form.Control
                type="password"
                id="password"
                placeholder="password"
                ref={passRef}
                style={{ textAlign: 'center' }}
            />
            <button
                className="btn btn-success mt-3"
                onClick={handleLogin}
            >
                Login
            </button>
        </div>
    );
}

export default Login;
