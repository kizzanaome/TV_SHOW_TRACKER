import React, {useState} from 'react'

import './components.css'

const LoginForm =({login}) =>{
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailHandler = (e) =>{
        setEmail(e.target.value)
    }

    const passwordHandler = (e) =>{
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

    return(
        <div className="loginform">
            <h1>LogIn</h1>
            <form className="form-group" onSubmit ={submitHandler}>
                <label htmlFor="email">Email
                    <input type="text" placeholder="Enter email address" value = {email} onChange ={emailHandler}/>
                </label>
                <label htmlFor="password"> Password
                    <input type="text" placeholder="Enter Password" value = {password} onChange ={passwordHandler}/>
                </label>
                <input className ="btn" type ="submit" value ="LogIn"/>
            </form>
        </div>
    )
}

export default LoginForm