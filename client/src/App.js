import React, { Fragment } from 'react';
import './App.css';
import { useQuery, useApolloClient } from '@apollo/react-hooks';
import gql from 'graphql-tag';
import TvShowTile from './components/tvshowtile';
import Header from './components/header';


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

function TvShows() {
    const client = useApolloClient();
    console.log(client)
    const { data, loading, error, fetchMore} = useQuery(GET_TVSHOWS);

    const logoutHandler = (e) =>{
      e.preventDefault()
      client.writeData({ data: { isLoggedIn: false } });
      localStorage.clear()


    }

    if (loading) return <p>Loading! </p>;
    if (error) return <p>ERROR</p>;
    // if (!data) return <p>Not found</p>;

    return (
      <Fragment>
        <Header />
        <div className="main">
          <button type="submit" onClick={logoutHandler}>Log Out</button>
          {data.tvshows &&
            data.tvshows.tvshows &&
            data.tvshows.tvshows.map(tvshow => (
              <TvShowTile 
                key={tvshow.id} 
                id={tvshow.id}  
                name ={tvshow.name} 
                genres={tvshow.genres}
                premiered={tvshow.premiered}
                status={tvshow.status}
              />
            ))}
            
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
                            launches: {
                              ...fetchMoreResult.tvshows,
                              launches: [
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

        </div>
      </Fragment>
    );
  }


export default TvShows;
