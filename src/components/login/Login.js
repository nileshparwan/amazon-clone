import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

function Login() {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');

    const signIn = (e) => {
        e.preventDefault();
        // firebase login
    };

    const register = e => {
        e.preventDefault();
        // do firebase register
    };

    return (
        <div className="login">
            <Link to="/home">
                <img className="login__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" />
            </Link>

            <div className="login__container">
                <h1>Sign in</h1>

                <form>
                    <h5>Email</h5>
                    <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />

                    <button type="submit" className="login__signInButton" onClick={signIn}>Sign In</button>
                </form>

                <p>
                    Bu signining-in you agree to Amazon's Conditions of Use & Sale.
                    Please see our Privacy Notice, our cookies Notice and our Interest-Based Ads
                    Noticed
                </p>

                <button className="login__registerButton" onClick={register}>Create your Amazon Account</button>
            </div>

        </div>
    );
}

export default Login;

