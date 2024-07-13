import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();

const API_URL = `http://www.omdbapi.com/?apikey=18b38376&s=titanic`


const AppProvider =({children}) => {

    const[isLoading , setIsLoading]=useState(true);
    const [movie , setMovie] = useState([]);
    const [isError , setIsEroor] = useState({show:"false", msg:""});

    const getMovies = async(url)=>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            
            if (data.Response === "True"){
                setIsLoading(false);
                setMovie(data.Search);
            }
        } catch (error) {
            setIsEroor({
                show: true,
                msg: data.error,
            })
                       
        }
    }

    useEffect(()=>{
            getMovies(API_URL);
    },[])

    return (<AppContext.Provider value={{isLoading, isError , movie}}> 
    
                {children}
            </AppContext.Provider>)
}

const useGlobalContext = ()=> {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };