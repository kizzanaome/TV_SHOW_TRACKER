import React from 'react';
import styled from 'styled-components';
import movielogo from '../../assets/images/mov.jpg';
import Navbar from '../../shared/Navbar';
import Footer from '../../shared/Footer';


const Container = styled.div`

    width: 50%;
    margin: 100px auto;
    text-align: center;

    p{
        font-size: 20px;
        margin-top: 50px;
        color: #fff;
    }

    h3, h1{
        font-size: 20px;
        color: #fff;
    }

    p small{
        color: #fff;
        font-size: 13px;
    }

`

const About = () => {

    return (
        <div class="just_about">
            <Navbar />
            <Container>
                <img alt="logo" width="250px" src={movielogo} />
                <p>Kuky films is the world’s most popular and authoritative source for movie, TV, and celebrity
                information. Watch trailers, get showtimes, and buy tickets for upcoming films. Rate and review
                shows you’ve seen and track what you want to watch using your Watchlist. Stay up to date with
                    entertainment news, awards, and events.</p>
                <p><small>Manage your TV shows by first <a href="index.html">Signing up</a>.</small></p>
            </Container>
            <Footer />
        </div>
    );

};

export default About;
