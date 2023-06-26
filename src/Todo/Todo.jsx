import React,{useState} from "react";
import './Todo.css';
// import todoReducer from "../Reducer/todoReducer";
import {useSelector,useDispatch} from 'react-redux';
import { addList ,deleteList} from "../Actions/todoAction";
const Todo=()=>{
    const [data,setData]=useState("");
    const list=useSelector((state)=>
        state.todoReducer.allData
    );
    const dispatch=useDispatch();
    return(
        <>
      
    <div className='main-div'> 

      <div className='child-div'>
      <h1 className='heading'>Add your list here</h1>
         <div className='add-items'>
          <input type='text' placeholder='add list' value={data} onChange={(e)=>setData(e.target.value)}/>
          <button className='add-list-button' onClick={()=>dispatch(addList(data),setData(''))}>Add</button>
         </div>
        <div className="showAllData">
         {
            list.map((element)=>{
                return(
                <div className="each-item" key={element.id}>
                <h3 className="element_data">{element.data}</h3>
           <button className="deleteList" onClick={()=>dispatch(deleteList(element.id))}>Delete</button>  
             </div>)
            })
         }
           
        </div>
     
       

      </div>

    </div>



  
   
    </>

    )
}
export default Todo;