import React from 'react';
import { useState } from 'react';


const Register = () => {
   
    const[user, setUser]=useState({
        Name:"",
        userEmail:"",
        userName:"",
        userPassword:"",
        userconfirmPassword:"",
      })

      const[error, setError]=useState({
        NameError:null,
        userEmailError:null,
        userNameError:null,
        userPasswordError:null,
        userconfirmPasswordError:null,
       
      })
      
     
    const handelChange=(evt)=>{

        // console.log(evt.target.name, evt.target.value)
        if(evt.target.name=="Name"){
            setUser({
                ...user,
                Name:evt.target.value,
            });
        }else if(evt.target.name=="userEmail"){
            setUser({
                ...user,
                userEmail:evt.target.value,
            });
        }else if (evt.target.name=="userName"){
            setUser({
                ...user,
                userName:evt.target.value,
            });
        }else if(evt.target.name=="userPassword"){
            setUser({
                ...user,
                userPassword:evt.target.value,
            });
        }else if(evt.target.name=="userconfirmPassword"){
            setUser({
                ...user,
                userconfirmPassword:evt.target.value,
            });
        }

        if(evt.target.name=="Name"){
            setError({
                ...error,
                 NameError:
                evt.target.value.length==0
                ?"this field is required"
                :null,
            });
        }

        const regexpemail = /^[a-zA-Z]{3,5}(@)[0-9]{4}(gmail.com)$/
         if(evt.target.name=="userEmail"){
            setError({
            ...error,
            userEmailError:
            evt.target.value.length==0
            ?"this field is required":
            !regexpemail.test(evt.target.value)
            ?" email  do not match regular expression"
            :null,
        });
       }

        
        var regexp = /^\S+$/;
         if(evt.target.name=="userName"){
            setError({
            ...error,
            userNameError:
            evt.target.value.length==0
            ?"this field is required":
            !regexp.test(evt.target.value)
            ?" username  do not match regular expression"
            :null,
        });
       }
        
        var regexpPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
         if(evt.target.name=="userPassword"){
            setError({
            ...error,
            userPasswordError:
            evt.target.value.length==0
            ?"this field is required":
            !regexpPass.test(evt.target.value)
            ?" password  do not match regular expression"
            :null,
        });
       }

       if(evt.target.name=="userconfirmPassword"){
        setError({
        ...error,
        userconfirmPasswordError:
        evt.target.value.length==0
        ?"this field is required":
        evt.target.value != user.userPassword
        ?" password  do not match"
        :null,
    });
   }
    }

    const handleSubmit=(evet)=>{
        evet.preventDefault();
       }
    return (
        <>
        <div className='container-fluid '>
            <div className='row col-3 mx-auto'>
            <div class='m-5'></div>
                <form onSubmit={(event)=>handleSubmit(event)} className='border m-5'>
                <h3>Registration Form</h3>
                    <div className="mb-3 text-start">
                        <label for="exampleInputName" className="form-label">Name</label>
                        <input type="text" className="form-control"
                         placeholder='enter your name' id="exampleInputName"
                          aria-describedby="emailHelp"
                          name='Name'
                          value={user.Name}
                          onChange={(ev)=>handelChange(ev)}/>
                           <small className='text-danger'>{error.NameError}</small>
                    </div>
                    <div className="mb-3 text-start">
                        <label for="exampleInputEmail1" className="form-label">Email address</label>
                        <input type="email" className="form-control" 
                        placeholder='enter your email address' id="exampleInputEmail1" 
                        aria-describedby="emailHelp"
                        name='userEmail'
                        value={user.userEmail}
                        onChange={(ev)=>handelChange(ev)}/>
                        <small className='text-danger'>{error.userEmailError}</small>
                    </div>
                    <div className="mb-3 text-start">
                        <label for="exampleInputUserName" className="form-label">User Name</label>
                        <input type="text" className="form-control" 
                        placeholder='enter user name' id="exampleInputUserName"
                         aria-describedby="emailHelp"
                         name='userName'
                         value={user.userName}
                         onChange={(ev)=>handelChange(ev)}/>
                         <small className='text-danger'>{error.userNameError}</small>
                    </div>
                    <div className="mb-3 text-start">
                        <label for="exampleInputPassword1" className="form-label">Password</label>
                        <input type="password" className="form-control" 
                        placeholder='enter  password' 
                        id="exampleInputPassword1"
                        name='userPassword'
                        value={user.userPassword}
                        onChange={(ev)=>handelChange(ev)}/>
                        <small className='text-danger'>{error.userPasswordError}</small>
                    </div>
                    <div className="mb-3 text-start">
                        <label for="exampleInputConfirmPassword" className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" 
                        placeholder='confirm password'
                         id="exampleInputConfirmPassword"
                         name='userconfirmPassword'
                         value={user.userconfirmPassword}
                         onChange={(ev)=>handelChange(ev)}/>
                         <small className='text-danger'>{error.userconfirmPasswordError}</small>
                    </div>
                    
                    <button type="submit" className="btn btn-primary mb-2">Submit</button>
                </form>
            </div>
        </div>
        </>
    );
}

export default Register;
