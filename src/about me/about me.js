import React from "react";


export default class Aboutme extends React.Component {


  render() {
    return <>
    {
        <div className="container-fluid">
            <div className="row">
                <div className="col-4 mt-5 fs-2">
                    <h2>About me</h2>
                </div>
                <div className="col-8 my-5 text-start">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut illo, sit non aspernatur ipsa esse dolorem
                         maxime velit enim optio  sit amet consectetur, adipisicing elit. Ut illo, sit non aspernatur ipsa esse dolorem
                         maxime velit enim optiovel explicabo vitae incidunt. 
                         Facere ratione blanditiissit amet consectetur, adipisicing elit. Ut illo, sit non aspernatur ipsa esse dolorem
                         maxime velit enim optiosit amet consectetur, adipisicing elit. Ut illo, sit non aspernatur ipsa esse dolorem
                         maxime velit enim optio recusandae magnam rem.</p>
                         <button className="px-3 py-1 text-white bg-black mt-5">download Resume</button>
                </div>
            </div>
        </div>
    }
    
    </>;
  }
}
