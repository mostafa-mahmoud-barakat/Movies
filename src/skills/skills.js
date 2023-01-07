import React from "react";
import Progress from "../progress/progress";
// import Progress from './../progress/progress';

export default class Skills extends React.Component {



  render() {
    return <>
    <div className="container-fluid">
            <div className="row bg-dark opacity-75">
                <div className="col-12 text-center my-5 text-white">
                    <h2>Skills</h2>
                </div>
                <div className="col-12 ">
                    <p className="text-center mb-5 mx-5 text-white">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut illo, sit non aspernatur ipsa esse dolorem
                         maxime velit enim optio  sit amet consectetur, adipisicing elit. Ut illo, sit non aspernatur ipsa esse dolorem
                         maxime velit enim optiovel explicabo vitae incidunt. 
                         Facere ratione blanditiissit amet consectetur, adipisicing elit. Ut illo, sit non aspernatur ipsa esse dolorem
                         maxime velit enim optiosit amet consectetur, adipisicing elit. Ut illo, sit non aspernatur ipsa esse dolorem
                         maxime velit enim optio recusandae magnam.</p>
                        
                </div>
                <div className="row">
                    <div className="col-6 text-center my-5 text-white">
                        My focus
                        <hr/>
                        <p>Web Design</p>
                        <p>Front end</p>
                        <p>Back end</p>
                        <p>Fullstack </p>
                        
                    </div>
                    <div className="col-6 my-5">
                    
                         <Progress style={{width:'70%'}}   name="javascript"/>
                         <Progress style={{width:'65%'}}   name="CSS"/>
                         <Progress style={{width:'75%'}}   name="HTML"/>
                         <Progress style={{width:'55%'}}   name="React"/>
                         <Progress style={{width:'70%'}}   name="Bootstrap"/>
                    </div>

                </div>
            </div>
        </div>
    </>
    
  }
}
