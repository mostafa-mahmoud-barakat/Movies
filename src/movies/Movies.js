import React from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useState, useEffect} from 'react';
// import axios from 'axios';
import {Link} from 'react-router-dom';
import axiosInstance from "./../instance/instance"
// import favoritesReducer from '../redux/Reducer/reducer';
 import addFavorites from '../redux/action/action'

const Movies = () => {

    let[movies, setMovies]=useState([])
    let[page,  setPage]=useState(1)
     
     useEffect(()=>{
        axiosInstance.get("movie/popular",{params:{page:page}})
        .then((res)=>{
            console.log(res)
            setMovies(res.data.results)
        }).catch((err)=>{
            console.log(err)
        })

     },[page]);
     
       function prevBtn(){
        if(page>0){
            setPage(page=> page-1)
        }
     }
     function nextBtn(){
        if(page>0){
            setPage(page=> page+1)
        }
     };

     const dispatch=useDispatch()
     let[favorites, setFavorites]=useState([])
      
     const addFavMovie=(favmovie)=>{
      // console.log(favmovie)
          if(favorites.some(fav=>fav.id==favmovie.id)){
            setFavorites(favorites.filter(fil=>fil.id != favmovie.id))
          }else{
            setFavorites(favorites.concat(favmovie))
          }   
     }
      
     dispatch(addFavorites(favorites)) //action
 
    return (
         <>
                 
                 <div className='container '>
                    <div className='row m-2 '>
                 {movies.map((m) => {
            return (
                <div className=" col-md-4 col-sm-6 v my-2 " > 
                <div className="card shadow-sm w-100 bg-secondary text-white" style={{position:"relative",height:800}}>
                
                <img src={`https://image.tmdb.org/t/p/w500/${m.poster_path}`} style={{height:300}} alt="O  "/>
                    <div className="card-body">
                    <h5 className="card-title">{m.original_title}</h5>
                    <p className="card-text">{m.overview}</p>

                    <Link to={`/details/${m.id}`}><a  className="btn btn-primary">show details</a></Link>
                    <i

                    className={`fa-solid fa-star ${favorites.some(fav=>fav.id==m.id)? 'text-warning':' text-white'}  `}

                    onClick={()=>addFavMovie(m)} style={{  fontSize: '30px', position:"absolute",bottom:"2%", right:"2%"}}></i>
                     
                </div>          
                </div>
                </div> 
   
            );
          })}
          </div>
           </div>
           <div className="container d-flex justify-content-between">
           <button   onClick={()=>prevBtn()} className="btn btn-secondary ms-5 my-5"> &larr; previous</button>
           <button   onClick={()=>nextBtn()} className="btn btn-primary me-5 my-5"> Next &rarr; </button>
            
           </div>
            
         </>
       
    );
}

export default Movies;
