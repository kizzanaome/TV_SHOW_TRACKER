import React from 'react'
import '../Home/home.css'
import poster5 from '../../assets/images/4.jpg';



const TvShowCard = ({id, name,genres, premiered, status })=>{

    return(
        <div className="serie">
            <div className="img-poster"><img alt="poster1" src={ poster5 } /></div>
            <div className="content">
                <h1>{name}</h1>
                <p className="about-content">A small town with wierd secrets and a case to solve</p>
                <p><span>Id</span>: {id}</p>
                <p><span>Genre</span>: {genres}</p>
                <p><span>Status</span>: {status}</p>
                <p><span>Premiered</span>:{premiered}</p>
            </div>
        </div>

    )

}

export default TvShowCard;