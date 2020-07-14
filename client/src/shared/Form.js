import React from 'react';
import styled from 'styled-components';


const Theform = styled.div`

    
        width: 300px;
        margin: 50px auto;
    

    .input-box {
        margin: 20px 0;
    }

    .input-box input {
        width: 100%;
        font-size: 15px;
        padding: 13px;
        color: #1d1d1d;
        border: none;
        border-bottom: 1px solid #ccc;
        outline: none;
        background: #fbf9f966;
        box-sizing: border-box;
    }

    .input-box input:focus,
    .myform .input-box input:valid {
        border-bottom: 0.5px solid #eb2429;
    }

    .input-box input[type="submit"] {
        border: none;
        background: #eb2429;
        border-radius:25px;
        color: #fff;
        font-weight: bold;
    }

    .input-box input[type="submit"]:hover {
        background: #1d1d1d;
        transition: 0.7s;
    }

`

export default Theform;
