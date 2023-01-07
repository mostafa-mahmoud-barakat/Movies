import React from 'react';
import { useState, useEffect} from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import axiosInstance from "./../instance/instance"
 


const Details = () => {

    const params=useParams()

    const[movie, setMovie]=useState({})

     useEffect(()=>{
        axiosInstance.get(`movie/${params.id}`).then((res)=>{
            console.log(res.data)
            setMovie(res.data)
        }).catch((err)=>{
            console.log(err)
        })
     },[])

    return (
        <>
        {/* <div className="col-4 mx-auto bg-secondary text-white">
        <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} style={{height:300}} alt="O  "/>
        <h1>{movie.original_title}</h1>
        <p>{movie.overview}</p>
        </div> */}

        
                <div className='container '>
                <div className='row mx-auto mb-5'>
                <div className=" col-md-4 col-sm-6  my-4 mx-auto  w-40" > 
                <div className="card  w-100 align-middle bg-secondary text-white" style={{height:500}}>
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} style={{height:300}} alt="O  "/>
                    <div className="card-body">
                    <h5 className="card-title">{movie.original_title}</h5>
                    <p className="card-text">release date:{movie.release_date}</p>
                    <p className="card-text">language:{movie.original_language}</p>
                </div>          
                </div>
                </div> 
                </div>
                </div>  
   
              
        
        
        {/* {movie.map((m)=>{
                    return (
                        <div className="col-4">
                    < div className="card" key={m.id} style={{width: "18rem"}}>
                    <img src={m.homepage} className="card-img-top" alt="..."/>
                    <div className="card-body">
                        <h5 className="card-title">{m.original_title}</h5>
                         <p className="card-text">{m.overview}</p>
                       <Link to={`/details/${movie.id}`}> <a  className="btn btn-primary">show details</a></Link>
                    </div>
                </div>
                </div>
               )})}  */}
               {/* {movie.map((m) => {
            return (
              <Link to={`/movie/${m.id}`} key={m.id} >

<div className=" m-5 p-5 col-4" >
  <div className="card" style={{width:"18rem"}}>
  <img src={m.image} alt="O  "/>
    <div className="card-body">
    <h5 className="card-title">{m.original_title}</h5>
    <p className="card-text">{m.overview}</p>

    <a href="#q" class="btn btn-primary">Go</a>
  </div>          </div>

  </div>


  </Link> 
            );
          })} */}

{/*           
           {movie.map((mx) => {
            return (
            //   <Link to={`/details/${m.id}`} key={m.id} >

<div className=" m-5 p-5 col-4" >
  <div className="card" style={{width:"18rem"}}>
  <img src={mx.image} alt="O  "/>
    <div className="card-body">
    <h5 className="card-title">{mx.original_title}</h5>
    <p className="card-text">{mx.overview}</p>

    <Link to={`/details/${m.id}`}><a  className="btn btn-primary">Go</a></Link>
  </div>          </div>

  </div>


   // </Link>  
            );
          })} */}

        </>
    );
}

export default Details;
