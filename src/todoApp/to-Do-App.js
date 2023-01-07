import React from 'react';
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { ListGroup } from 'react-bootstrap';
  const ToDoApp = () => {

    const[user, setUser]=useState({
        taskField:"",
        list:[]
    })

    const[error, setError]=useState({
        taskFieldError:null,
        
      })


     const addItem=()=>{
        if(user.taskField !== '' ){
          const taskField = {
      
            // Add a random id which is used to delete
            id :  Math.random(),
      
            // Add a user value to list
            value : user.taskField
          };
      
          // Update list
          const list = [...user.list];
          list.push( taskField);
      
          // reset state
          setUser({
            list,
            taskField:""
          });
        }
      }
    
      const deleteItem=(key)=>{
        const list = [...user.list]
        const updateList = list.filter(item => item.id !== key); 
         setUser({
            list:updateList
         })
      }
    
    //   const completeItem=(key2)=>{
        // const list = [...user.list]
        // const updateList2 = list.filter(item => item.id !== key2); 
        //  setUser({
        //     list:updateList2
        //  })
    //   }
        
      

    const handelChange=(event)=>{
        
        if(event.target.name=="taskInput"){
            setUser({
                ...user,
                taskField:event.target.value,
            });
    }
    if(event.target.name=="taskInput"){
        setError({
            ...error,
            taskFieldError:
            event.target.value.length==0
            ?"this field is required"
            :null,
        });
    }  
  }
     

  const handleSubmit=(evet)=>{
    evet.preventDefault();
   }
  
    return (
        <>
        <div className='container-fluid'>
            <div className='row col-4 mx-auto mb-5 bg-primary opacity-75'>
                <form onSubmit={(event)=>handleSubmit(event)}>
                    <h2 className='text-end text-white my-3'>To-Do App!</h2>
                    <div className="mb-3 text-start">
                        <input type="text" className="form-control"
                         placeholder='enter new task..' id="InputTask"
                        aria-describedby="emailHelp"
                        name='taskInput'
                        value={user.taskField}
                        onChange={(ev)=>handelChange(ev)}/>
                        <small className='text-danger bg-white text-start'>{error.taskFieldError}</small>
                    </div>
                   
                    <button type="submit" onClick={()=>addItem()} className=" bg-gray border-light text-dark text-start my-3">Add</button>
                </form>
                
            </div>
            <div className='col-4 mx-auto p-3 mb-3 border bg-info opacity-75'>
                         {user.list.map((item)=>{return <ul> 
                            <li key={item}>{item.value} <button onClick={()=>deleteItem(item.id)} className='btn btn-danger mx-5'>Delete</button>
                            {/* <button onClick={()=>completeItem(item.id)} className='btn btn-success'>Complete</button> */}
                            </li> 
                         </ul>})}
            </div>
        </div>
        
        
        </>
    );
}

export default ToDoApp;
