import React from 'react';
import { Link } from 'react-router-dom';

import movielogo from '../assets/images/mov.jpg';
import styled from 'styled-components';

const Nav = styled.div`

    background-color:#fff;
    border-bottom: 1px solid #eb2429;
    padding: 0;
    height: 77px;
    width: 100%;
    

    ul{
        height: 75px;
        float: right;
        margin: 0;
    }

    ul li{
        display: inline-table;
        list-style-type: none;
        margin: 0;
    }

    ul li a{
        text-decoration: none;
        font-size: 15px;
        font-family: Rubik;
        color: #1d1d1d;
        display: block;
        padding: 30px 10px;
        width: 110px;
        text-align: center;
        transition-duration: 0.5s;
    }

    ul li a:hover{
        color: #eb2429;
        transition-duration: 0.5s;
    }

    label {
        margin: 0 40px 0 0;
        font-size: 26px;
        line-height: 70px;
        display: none;
        width: 26px;
        float: right;
    }

    #toggle {
        display: none;
    }

    .navigation{
        width: 70%;
        margin: 0 auto;
    }

    .logo{
        margin-top: 15px;
        float: left;
    }

    .menu_icon{
        display: none;
    }

    .menu input[type="submit"] {
        font-size: 15px;
        padding: 7px 25px;
        border: none;
        background: #eb2429;
        border-radius:25px;
        color: #fff;
        font-weight: bold;
    }

`

const Navbar = () => {

    return (
        <Nav>
            <div className="navigation">
                <Link to="/"><img className="logo" alt="logo" src={movielogo} width="170px" /></Link>
                <label for="toggle">&#9776;</label>
                <input type="checkbox" id="toggle" />
                <ul className="menu">
                    <li><Link to="/">Home</Link></li><li>
                        <a href="orders.html">Profile</a></li><li>
                        <Link to="/about">About</Link></li>
                        <li><input type="submit" name="" value="Log Out" /></li>
                </ul>
            </div>
        </Nav>
    );

};

export default Navbar;
