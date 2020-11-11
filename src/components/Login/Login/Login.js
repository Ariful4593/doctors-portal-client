import React from 'react';
import { useForm } from 'react-hook-form';
import { FormControl, Input, InputLabel } from '@material-ui/core';
import { useState } from 'react';
import loginImg from '../../../images/Group 140.png';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';

const Login = () => {
    // For Firebase JS SDK v7.20.0 and later, measurementId is optional
    const firebaseConfig = {
        apiKey: "AIzaSyCR_o89aCbJl9Uj1bZbcjz7gEE8abWeC7I",
        authDomain: "doctor-portalss.firebaseapp.com",
        databaseURL: "https://doctor-portalss.firebaseio.com",
        projectId: "doctor-portalss",
        storageBucket: "doctor-portalss.appspot.com",
        messagingSenderId: "725765166464",
        appId: "1:725765166464:web:c69usereccc0df58bdf6fc9d65",
        measurementId: "G-NDXJ6H178W"
    };
    if (!firebase.apps.length) {
        firebase.initializeApp(firebaseConfig);
    }
    const { register, handleSubmit } = useForm();
    const [newUser, setNewUser] = useState(false);
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const [user, setUser] = useState({
        email: '',
        password: '',
        success: false,
        error: false,
        loginSuccess: false,
        loginFailed: false,
    });
    const handleChange = (e) => {
        let isFieldValid;
        if (e.target.name === 'email') {

            isFieldValid = e.target.value;

        }
        if (e.target.name === 'password') {

            isFieldValid = e.target.value;

        }
        if (isFieldValid) {
            const newUser = { ...user };
            newUser[e.target.name] = e.target.value;
            setUser(newUser);
        }
    }
    
    
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/appointment" } };
    const onSubmit = (data) => {
        
        if (newUser && user.email && user.password) {
            firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const successfully = { ...user };
                    successfully.success = true;
                    successfully.error = false;
                    setUser(successfully);
                    
                    setLoggedInUser(successfully.email)
                    history.replace(from)
                })
                .catch(function (error) {
                    var errorMessage = error.message;
                    const successfully = { ...user };
                    successfully.success = false;
                    successfully.error = errorMessage;
                    setUser(successfully);
                });
        }
        if (!newUser && user.email && user.password) {
            firebase.auth().signInWithEmailAndPassword(user.email, user.password)
                .then(res => {
                    const loginUser = { ...user };
                    loginUser.loginSuccess = true;
                    loginUser.loginFailed = false;
                    loginUser.email = user.email;
                    setUser(loginUser);
                    setLoggedInUser(loginUser)
                    sessionStorage.setItem('user', JSON.stringify(loginUser))
                    history.replace(from);
                })
                .catch(function (error) {
                    // Handle Errors here.
                    var errorCode = error.code;
                    var errorMessage = error.message;
                    const successfully = { ...user };
                    successfully.error = errorMessage;
                    setUser(successfully);

                    // ...
                });
        }
    }
    return (
        <div className="container">
            <div className="row">
                <div className="col-md-5 d-flex align-items-center" >

                    <form onSubmit={handleSubmit(onSubmit)} className="mt-4" style={{ width: '100%' }}>

                        <div className="text-center login-form" >
                            {
                                !newUser && <div>
                                    <h2>Login</h2>
                                    <FormControl className="w-100">
                                        <InputLabel htmlFor="email" >Email</InputLabel>
                                        <Input id="email" aria-describedby="my-helper-text" type="email" name="email" onBlur={handleChange} required />
                                    </FormControl><br />
                                    <FormControl className="w-100">
                                        <InputLabel htmlFor="password">Password</InputLabel>
                                        <Input id="password" aria-describedby="my-helper-text" type="password" name="password" onBlur={handleChange} required />
                                    </FormControl><br />
                                </div>
                            }

                            {
                                newUser && <div> <h2>SignUp</h2>
                                    <FormControl className="w-100">
                                        <InputLabel htmlFor="name" >Username</InputLabel>
                                        <Input id="name" aria-describedby="my-helper-text" type="name" name="name" onBlur={handleChange} required />
                                    </FormControl><br />
                                    <FormControl className="w-100">
                                        <InputLabel htmlFor="email" >Your Email</InputLabel>
                                        <Input id="email" aria-describedby="my-helper-text" type="email" name="email" onBlur={handleChange} required />
                                    </FormControl><br />
                                    <FormControl className="w-100">
                                        <InputLabel htmlFor="password">Password</InputLabel>
                                        <Input id="password" aria-describedby="my-helper-text" type="password" name="password" onBlur={handleChange} required />
                                    </FormControl>
                                </div>
                            }

                            <div className="row">
                                <div className="col">
                                    <p className="text-left">Forget your password?</p>
                                </div>
                            </div>
                            <input type="submit" className="w-100  mt-2 btn-brand-login" value={newUser ? 'SignUp' : 'SignIn'} />

                            {newUser ? <p>Already have account? <span onClick={() => setNewUser(!newUser)} style={{ cursor: 'pointer', color: 'gray' }}>Login</span></p> : <p>Don't have account? <span onClick={() => setNewUser(!newUser)} style={{ cursor: 'pointer', color: 'gray' }}>Create account</span></p>
                            }
                            <br />
                            {
                                user.loginSuccess ? <p style={{ color: 'green' }}>Account {newUser ? 'Created' : 'LoggedIn'} Successfully!</p> : <p style={{ color: 'red' }}>{user.error}</p>
                            }
                        </div>
                    </form>
                </div>
                <div className="col-md-7">
                    <img style={{ width: '100%' }} src={loginImg} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;