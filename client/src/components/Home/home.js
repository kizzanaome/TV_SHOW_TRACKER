import React from 'react';
import '../Home/home.css'
import poster1 from '../../assets/images/1.jpg';
import poster2 from '../../assets/images/2.jpg';
import poster3 from '../../assets/images/3.jpg';
import poster4 from '../../assets/images/5.jpg';
import poster5 from '../../assets/images/4.jpg';
import poster6 from '../../assets/images/6.jpg';
import Footer from '../../shared/Footer';
import Navbar from '../../shared/Navbar';

const Home = () => {

    return (
        <div className="homebox">
            <Navbar />
            <div className="container">
                <div className="serie">
                    <div className="img-poster"><img alt="poster1" src={ poster5 } /></div>
                    <div className="content">
                        <h1>Riverdale</h1>
                        <p className="about-content">A small town with wierd secrets and a case to solve</p>
                        <p>Genre: Love & Homicide</p>
                        <p>Rating: 31 votes</p>
                        <p>Posted: 21st Jan 2018</p>
                        {/* <!-- <img className="watched" src="images/watched.svg"> --> */}
                    </div>
                </div>
                <div className="serie">
                    <div className="img-poster"><img alt="poster1" src={ poster4 } /></div>
                    <div className="content">
                        <h1>Riverdale</h1>
                        <p className="about-content">A small town with wierd secrets and a case to solve</p>
                        <p>Genre: Love & Homicide</p>
                        <p>Rating: 31 votes</p>
                        <p>Posted: 21st Jan 2018</p>
                        {/* <!-- <img className="watched" src="images/watched.svg"> --> */}
                    </div>
                </div>
                <div className="serie">
                    <div className="img-poster"><img alt="poster1" src={ poster1 } /></div>
                    <div className="content">
                        <h1>Riverdale</h1>
                        <p className="about-content">A small town with wierd secrets and a case to solve</p>
                        <p>Genre: Love & Homicide</p>
                        <p>Rating: 31 votes</p>
                        <p>Posted: 21st Jan 2018</p>
                        {/* <!-- <img className="watched" src="images/watched.svg"> --> */}
                    </div>
                </div>
                <div className="serie">
                    <div className="img-poster"><img alt="poster1" src={ poster3 } /></div>
                    <div className="content">
                        <h1>Riverdale</h1>
                        <p className="about-content">A small town with wierd secrets and a case to solve</p>
                        <p>Genre: Love & Homicide</p>
                        <p>Rating: 31 votes</p>
                        <p>Posted: 21st Jan 2018</p>
                        {/* <!-- <img className="watched" src="images/watched.svg"> --> */}
                    </div>
                </div>
                <div className="serie">
                    <div className="img-poster"><img alt="poster1" src={ poster6 } /></div>
                    <div className="content">
                        <h1>Riverdale</h1>
                        <p className="about-content">A small town with wierd secrets and a case to solve</p>
                        <p>Genre: Love & Homicide</p>
                        <p>Rating: 31 votes</p>
                        <p>Posted: 21st Jan 2018</p>
                        {/* <!-- <img className="watched" src="images/watched.svg"> --> */}
                    </div>
                </div>
                <div className="serie">
                    <div className="img-poster"><img alt="poster1" src={ poster2 } /></div>
                    <div className="content">
                        <h1>Riverdale</h1>
                        <p className="about-content">A small town with wierd secrets and a case to solve</p>
                        <p>Genre: Love & Homicide</p>
                        <p>Rating: 31 votes</p>
                        <p>Posted: 21st Jan 2018</p>
                        {/* <!-- <img className="watched" src="images/watched.svg"> --> */}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
};

export default Home;
