import React, { useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import 'font-awesome/css/font-awesome.min.css';
 


const Login = () => {


    const[user, setUser]=useState({
        userEmail:"",
        userPassword:""
      })
////////////////////////////
    const[error, setError]=useState({
        userEmailError:null,
        userPasswordError:null,
      })
/////////////eyeVisibility//////////////
// const[visible, setVisibility]=useState(false);
// const Icon=(
//     <FontAwesomeIcon icon={visible?"eye-slash" : "eye"}/>
// )
// const InputeType = visible? "text":"password"
       

//////////////////////////////
    const  handelInputChange=(event)=>{
        //    console.log(event.target.name, event.target.value)
///////////////password/////////
        if(event.target.name=="userPassword"){
            setError({
                ...error,
                userPasswordError:
                event.target.value.length==0
                ?"this field is required":
                event.target.value.length<8
                ?"password should not be less than 8 characters"
                :null,
            });
        }
 //////email///////////////
 const regexpemail = /^[a-zA-Z]{3,5}(@)[0-9]{3}(gmail.com)$/
 if(event.target.name=="userEmail"){
    setError({
        ...error,
        userEmailError:
        event.target.value.length==0
        ?"this field is required":
          !regexpemail.test(event.target.value)
        ?" email  do not match regular expression"
        :null,
    });
}



///////////////////
        if(event.target.name=="userEmail"){
            setUser({
                ...user,
                userEmail:event.target.value,
            });
        }else if(event.target.name=="userPassword"){
            setUser({
                ...user,
                userPassword:event.target.value,
            });
        }

        // setUser({
        //     ...user,
        //     [event.target.name]:event.target.value
        // })
    }
     
    const show= () => {
        var x =document.getElementById("exampleInputPassword1");
        if(x.type === "password"){
            x.type = "text";
        }else{
            x.type ="password";
            // <span><i  class="fa-regular fa-eye-slash" style={{position:'absolute', right:"36%", top:"38%"}} onClick={()=>show()}></i></span>
            // class="fa-regular fa-eye-slash"
        }
    }
     

    return (<>
    
    <div className='container-fluid '>
        <div className='row col-3 mx-auto m-5'>
            <div class='m-5'></div>
                <form className='border m-5 ' >
                    <h3>Login Form</h3>
            <div className="mb-3 text-start">
                <label for="exampleInputEmail1" className="form-label">Email address</label>
                <input type="email"
                 className={`form-control ${error.userEmailError? "border-danger shadow-none":" "}`}
                id="exampleInputEmail1" 
                aria-describedby="emailHelp"
                placeholder='enter your email'
                value={user.userEmail}
                name='userEmail'
                onChange={(e)=>handelInputChange(e)}/>
                 <small className='text-danger'>{error.userEmailError}</small>
                 
            </div>
            <div className="mb-3 text-start">
                <label for="exampleInputPassword1" className="form-label">Password</label>
                <input type='password'
                className={`form-control ${error.userPasswordError? "border-danger shadow-none":" "}`}
                id="exampleInputPassword1"
                placeholder='enter your password'
                value={user.userPassword}
                name='userPassword'
                onChange={(e)=>handelInputChange(e)} style={{position:'relative'}}/>
                
                <small className='text-danger'>{error.userPasswordError}</small>
                {/* <span><i  class="fa-regular fa-eye" style={{position:'absolute', right:"36%", top:"53%"}} onClick={()=>show()}></i></span> */}
               
            </div>
             
            <button type="submit" className="btn btn-primary mb-2">Login</button>
            </form>
        </div>
    </div>
    </>
    );
}

export default Login;

