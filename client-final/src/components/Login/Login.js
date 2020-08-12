import React from 'react';
import { Link } from 'react-router-dom';
import Theform from '../../shared/Form';
import '../Login/login.css';
import movielogo from '../../assets/images/mov.jpg';
import { useState } from 'react';


const Login = ({login}) => {
    const [email,setEmail]= useState("")
    const [password, setPassword] = useState("")

    const emailHandler =(e)=>{
        setEmail(e.target.value)
    }

    const passwordHandler=(e)=>{
        setPassword(e.target.value)
    }


    const submitHandler = (e) =>{
        e.preventDefault()
        login({
            variables:{
                email:email,
                password:password
            }
        })
    }

  
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
                    <form method="post" action="" onSubmit={submitHandler}>
                        <div className="input-box">
                            <input type="text" name="" placeholder="Email" required="" value= {email} onChange={emailHandler} />
                        </div>
                        <div className="input-box">
                            <input type="password" name="" placeholder="Password" required="" value= {password} onChange={passwordHandler} />
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
