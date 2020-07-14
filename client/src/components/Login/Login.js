import React from 'react';
import { Link } from 'react-router-dom';
import Theform from '../../shared/Form';
import '../Login/login.css';
import movielogo from '../../assets/images/mov.jpg';


const Login = () => {

    return (
        <div class="new_container">
            <div class="login_box">
                <div class="introduction2">
                    <img alt="logo" id="logo" src={movielogo} />
                    <h1>Continue managing your movies by logging to your account here. If you don't have an account
                    then
                    <Link to="/"> Create yours</Link>.</h1>
                </div>
                <Theform>
                    <form method="post" action="">
                        <div class="input-box">
                            <input type="text" name="" placeholder="Username" required="" />
                        </div>
                        <div class="input-box">
                            <input type="password" name="" placeholder="Password" required="" />
                        </div>
                        <div class="input-box">
                            <input onclick="auth_for_user()" type="submit" name="" value="Log In" />
                        </div>
                        <p></p>
                        <p><small><a href="#">Forgot Password</a></small></p>
                    </form>
                </Theform>
            </div>
        </div>
    );

};

export default Login;
