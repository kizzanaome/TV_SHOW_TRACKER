import React from 'react';
import { Link } from 'react-router-dom';
import movielogo from '../../assets/images/mov.jpg';
import '../Signup/signup.css';
import Theform from '../../shared/Form';

const Signup = () => {

    return (
        <div>
            <div className="right_container">
                <div className="right_container_box">
                    <img alt="logo" className="logo" src={ movielogo } width="170px" />

                    <div id="intro1">
                        <p>Kuky films is the world’s most popular and authoritative source for movie, TV, and celebrity information. Watch trailers, get showtimes, and buy tickets for upcoming films.</p>
                        <p><small>Make that order now by <Link to="/">Signing up</Link>.</small></p>
                    </div>
                    <div id="intro" className="introduction">
                        <h1>Sign up with us and make <br />any orders for they will be at <br />your doorstep, <br />If you
                        have
                        an account then </h1>
                        <p><a href="login.html">Login here</a>.</p>
                    </div>
                </div>
            </div>

            <div className="left_container">
                <div className="signup_box">

                    <div id="introduce" className="introduction">

                        <h1>Sign up with us and be able to manage your TV shows while accessing the latest of them all,
                        rating them and saving them to watch them later.</h1>
                        <p><Link to="/login">Login here</Link>.</p>
                    </div>
                    <Theform>
                        <form method="" action="/home">
                            <div className="input-box">
                                <input type="text" name="" placeholder="Username" required="" />
                            </div>
                            <div className="input-box">
                                <input type="tel" maxlength="14" name="" placeholder="Phone Number" required="" />
                            </div>
                            <div className="input-box">
                                <input type="password" name="" placeholder="Password" required="" />
                            </div>
                            <div className="input-box">
                                <input type="password" name="" placeholder="Confirm Password" required="" />
                            </div>
                            <div className="input-box">
                                <input type="submit" name="" value="Sign Up" />
                            </div>
                            <p></p>
                            <p><small>By signing in, you agree to the <Link to="/">Terms and Conditions</Link> here.</small></p>
                        </form>
                    </Theform>
                </div>
            </div>
        </div>
    );

};

export default Signup;
