import React, { useState, useContext } from "react";
import { app, AuthContext } from "./App";
import { 
    createUserWithEmailAndPassword, 
    signInWithPopup, 
    GoogleAuthProvider, 
    getAuth } from 'firebase/auth';

const Join = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setErrors] = useState("");

    const Auth = useContext(AuthContext);
    const authInit = getAuth(app);
    const handleForm = e => {
        e.preventDefault();
        createUserWithEmailAndPassword(authInit, email, password)
            .then(res => {
                if (res.user) Auth.setLoggedIn(true);
            })
            .catch(err => {
                setErrors(err.message);
            });
    };

    const googleProvider = new GoogleAuthProvider()
    
    const handleLoginByGoogle = () => {
      signInWithPopup(authInit, googleProvider)
      .then(res => {
        if(res.user) Auth.setLoggedIn(true)
      })
      .catch(err => {
        setErrors(err.message)
      })
    }

    return (
        <div>
            <h1>Join</h1>
            <form onSubmit={e => handleForm(e)}>
                <input
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    name="email"
                    type="email"
                    placeholder="email"
                />
                <input
                    onChange={e => setPassword(e.target.value)}
                    name="password"
                    value={password}
                    type="password"
                    placeholder="password"
                />
                <hr />
                <button 
                    className='googleBtn' 
                    type='button'
                    onClick={handleLoginByGoogle}
                >
                    <img
                        src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg"
                        alt="logo"
                    />
                    Join With Google
                </button>
                <button type="submit">Login</button>
                <span>{error}</span>
            </form>
        </div>
    );
};

export default Join;