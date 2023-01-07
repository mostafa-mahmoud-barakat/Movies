// import  "../images/"
import React from 'react'
import "./home.css";


export default class Home extends React.Component {



    render() {
        return < > {
                /* <div className="container-fluid col-12 mt-2">
                       <div className="background img-fluid  ">
                         <img src={require('../images/istockphoto-1124629093-170667a.jpg')} className="img-responsive col-12"/>
                         <div class="bg-text ">
                           <h2 className='col-12'>testing</h2>
                            <h2 className='col-12'>Text</h2>
                         </div>
                       </div>
                     </div> */
            } <div className = 'container-fluid img-fluid col-12 mt-2 content' >

                <img id = 'img'
            className = "img-responsive col-12"
            src = {
                require('../images/istockphoto-1124629093-170667a.jpg')
            }
            alt = "image"/>
                <div className = 'caption' >
                <h1> Mostafa Barakat </h1> 
                <h5 > front end developer </h5> 
                <button> Contact Me </button>
                </div>
        </div> 
            </>
    }

}