import React from 'react';
import { Link } from 'react-router-dom';
import Theform from '../../shared/Form';
import '../Login/login.css';
import movielogo from '../../assets/images/mov.jpg';


const Login = () => {

    return (
        <div className="new_container">
            <div className="login_box">
                <div className="introduction2">
                    <img alt="logo" id="logo" src={movielogo} />
                    <h1>Continue managing your movies by logging to your account here. If you don't have an account
                    then
                    <Link to="/"> Create yours</Link>.</h1>
                </div>
                <Theform>
                    <form method="post" action="">
                        <div className="input-box">
                            <input type="text" name="" placeholder="Username" required="" />
                        </div>
                        <div className="input-box">
                            <input type="password" name="" placeholder="Password" required="" />
                        </div>
                        <div className="input-box">
                            <input type="submit" name="" value="Log In" />
                        </div>
                        <p></p>
                        <p><small><Link to="/">Forgot Password</Link></small></p>
                    </form>
                </Theform>
            </div>
        </div>
    );

};

export default Login;
