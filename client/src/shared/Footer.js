import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Foot = styled.div`

    
        float: none;
        clear: both;
        text-align: center;
        padding-top: 27px;
        padding-bottom: 30px;
        background-color: #fff;
        border-top: 1px solid #eb2429;
     

`

const Footer = () => {

    return (
        <Foot>
            <p>@2020 ©<Link to="/">kuky</Link> Design by Naume Kizza.<br />Project by <Link to="/">Digital Foundation</Link>.</p>
            <p><small>As a user, you agree to the <Link to="/">Terms and Conditions</Link> here.</small></p>
        </Foot>
    )

};

export default Footer;
