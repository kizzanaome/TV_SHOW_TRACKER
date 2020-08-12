import React from 'react'
import gql from 'graphql-tag'
import {useMutation, useApolloClient} from '@apollo/react-hooks'
import Login from './Login'

const LOGIN_USER = gql`
    mutation login($email:String!, $password:String!){
        login(email:$email, password:$password)
    }
`;

function LoginHandler () {
    const client = useApolloClient()
    console.log(client)
    console.log(localStorage.getItem("token"))
    const [login, {loading,error}]= useMutation(LOGIN_USER,
        {
        onCompleted({login}){
        console.log(login)
        console.log("login>>>>>>>")
        localStorage.setItem('token',login);
        if(login){
            client.writeData({data:{isLoggedIn:true}});
        }
        }
    }
    );

    if (loading) return <p>loading....... Please Wait</p>
    if (error) return <p>An error occured</p>
    
    return(
        <div>
            <Login login={login}/>
        </div>
    )
}

export default LoginHandler;