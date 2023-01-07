import React from "react";

  const Card = (props) => {
  return <>
     <div className="col-md-4 col-sm-12 col-lg-3 m-4">
        <div class="card" style={props.style}>
            <div class="card-body">
               <p className="card-text p-5 text-white text-center">{props.name}</p> 
            </div>
        </div>
    </div>
  </>
};

export default Card;
