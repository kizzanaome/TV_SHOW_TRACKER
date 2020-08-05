import React from 'react'
import './components.css'

const   TvShowTile =({id,name, genres,premiered,status}) =>{
    return(
        <div className="tvshowtile">
            <h3>TvShow {id}</h3>
            <hr/>
            <p>Name:{name}</p>
            <p>genres:{genres}</p>
            <p>premiered:{premiered}</p>
            <p>status:{status}</p>
        </div>
    )
}

export default TvShowTile;
