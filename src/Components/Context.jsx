import React, { useContext, useEffect, useState } from "react";

const AppContext = React.createContext();
// const apiKey = process.env.VITE_API_KEY;
const API_URL = `http://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}`;


const AppProvider =({children}) => {

    const[isLoading , setIsLoading]=useState(true);
    const [movie , setMovie] = useState([]);
    const [isError , setIsEroor] = useState({show:"false", msg:""});
    const [query , setQuery] = useState("titanic");

    const getMovies = async(url)=>{
        try {
            const res = await fetch(url);
            const data = await res.json();
            
            if (data.Response === "True"){
                setIsLoading(false);
                setMovie(data.Search);
            }
         else{
            setIsEroor({
                show: true,
                msg: data.Error,
            })
                       
        }
    } catch(error){
        console.log(error);
    }}

    useEffect(()=>{
        let timeOut =setInterval(() => {
            getMovies(`${API_URL}&s=${query}`);

            
        }, 1000);

        return ()=> clearTimeout(timeOut);
            
    },[query])

    return (<AppContext.Provider value={{isLoading, isError , movie , query , setQuery}}> 
    
                {children}
            </AppContext.Provider>)
}

const useGlobalContext = ()=> {
    return useContext(AppContext)
}

export { AppContext, AppProvider, useGlobalContext };