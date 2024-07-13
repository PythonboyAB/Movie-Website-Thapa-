import React from 'react'
import { useGlobalContext } from "./Context";

const Movies = () => {
  const {movie} = useGlobalContext();

  return (<>

        {movie.map((curMovie , index)=>{
          return (
            <div key= {index}>
              <h2  >{curMovie.Title}</h2>
            </div>
          )
        })}

    </>
  )
}

export default Movies