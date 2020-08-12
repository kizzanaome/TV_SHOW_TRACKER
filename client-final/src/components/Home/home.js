import React, {Fragment}from 'react';
import '../Home/home.css'
import poster1 from '../../assets/images/1.jpg';
import poster2 from '../../assets/images/2.jpg';
import poster3 from '../../assets/images/3.jpg';
import poster4 from '../../assets/images/5.jpg';
import poster5 from '../../assets/images/4.jpg';
import poster6 from '../../assets/images/6.jpg';
import Footer from '../../shared/Footer';
import Navbar from '../../shared/Navbar';
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import TvShowCard from './tvshowcard';

   
const GET_TVSHOWS = gql`
  query tvshowlist($after: String) {
    tvshows(after: $after){
      hasMore
      cursor
        tvshows {
          id
          name
          genres
          rating{
            average
          }
          premiered
          status
          cursor
        }
      }
    }
`;

const Home = () => {

    const {loading, error, data, fetchMore} = useQuery(GET_TVSHOWS)
    if (loading) return <p>Loading</p>
    if (error) return <p>Error</p>
    if (!data) return <p>Not Found</p>

    return (
        <Fragment>
        <div className="body">
            <Navbar />
            <div className="container">
                {
                    data.tvshows &&
                    data.tvshows.tvshows &&
                    data.tvshows.tvshows.map(tvshow=>(
                        <TvShowCard 
                        key={tvshow.id} 
                        id={tvshow.id}  
                        name ={tvshow.name} 
                        genres={tvshow.genres}
                        premiered={tvshow.premiered}
                        status={tvshow.status}/>
                    ))
                }

                    {data.tvshows && 
                        data.tvshows.hasMore && (
                        <button
                            onClick={() =>
                            fetchMore({
                                variables: {
                                after: data.tvshows.cursor,
                                },
                                updateQuery: (prev, { fetchMoreResult, ...rest }) => {
                                if (!fetchMoreResult) return prev;
                                return {
                                    ...fetchMoreResult,
                                    tvshows: {
                                    ...fetchMoreResult.tvshows,
                                    tvshows: [
                                        ...prev.tvshows.tvshows,
                                        ...fetchMoreResult.tvshows.tvshows,
                                    ],
                                    },
                                };
                                },
                            })
                            }
                        >
                            Load More
                        </button>
                        )
                    }
                {/* <div className="serie">
                    <div className="img-poster"><img alt="poster1" src={ poster5 } /></div>
                    <div className="content">
                        <h1>Riverdale</h1>
                        <p className="about-content">A small town with wierd secrets and a case to solve</p>
                        <p><span>Genre</span>: Love & Homicide</p>
                        <p><span>Rating</span>: 31 votes</p>
                        <p><span>Posted</span>: 21st Jan 2018</p>
                    </div>
                </div> */}
                {/* <div className="serie">
                    <div className="img-poster"><img alt="poster1" src={ poster4 } /></div>
                    <div className="content">
                        <h1>Riverdale</h1>
                        <p className="about-content">A small town with wierd secrets and a case to solve</p>
                        <p><span>Genre</span>: Love & Homicide</p>
                        <p><span>Rating</span>: 31 votes</p>
                        <p><span>Posted</span>: 21st Jan 2018</p>
                    </div> */}
                {/* </div>
                <div className="serie">
                    <div className="img-poster"><img alt="poster1" src={ poster1 } /></div>
                    <div className="content">
                        <h1>Riverdale</h1>
                        <p className="about-content">A small town with wierd secrets and a case to solve</p>
                        <p><span>Genre</span>: Love & Homicide</p>
                        <p><span>Rating</span>: 31 votes</p>
                        <p><span>Posted</span>: 21st Jan 2018</p>
                    </div>
                </div> */}
                {/* <div className="serie">
                    <div className="img-poster"><img alt="poster1" src={ poster3 } /></div>
                    <div className="content">
                        <h1>Riverdale</h1>
                        <p className="about-content">A small town with wierd secrets and a case to solve</p>
                        <p><span>Genre</span>: Love & Homicide</p>
                        <p><span>Rating</span>: 31 votes</p>
                        <p><span>Posted</span>: 21st Jan 2018</p>
                    </div>
                </div> */}
                {/* <div className="serie">
                    <div className="img-poster"><img alt="poster1" src={ poster6 } /></div>
                    <div className="content">
                        <h1>Riverdale</h1>
                        <p className="about-content">A small town with wierd secrets and a case to solve</p>
                        <p><span>Genre</span>: Love & Homicide</p>
                        <p><span>Rating</span>: 31 votes</p>
                        <p><span>Posted</span>: 21st Jan 2018</p>
                    </div>
                </div> */}
                {/* <div className="serie">
                    <div className="img-poster"><img alt="poster1" src={ poster2 } /></div>
                    <div className="content">
                        <h1>Riverdale</h1>
                        <p className="about-content">A small town with wierd secrets and a case to solve</p>
                        <p><span>Genre</span>: Love & Homicide</p>
                        <p><span>Rating</span>: 31 votes</p>
                        <p><span>Posted</span>: 21st Jan 2018</p>
                    </div>
                </div> */}
            </div>
            <Footer />
        </div>
        </Fragment>
    )
};

export default Home;
