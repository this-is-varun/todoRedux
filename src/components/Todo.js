import React from 'react'
import { useState } from 'react'
import {useDispatch, useSelector} from 'react-redux';
import './todo.css'
import {addTodo,deleteTodo,removeTodo} from '../actions/index'

const Todo = () => {

const [inputData, setInputData] = useState('');
const dispatch = useDispatch();
const list = useSelector((state)=> state.todoreducer.list);
  return (
    <>
    <div className='main_div'>
    <div className='child-div'>

    <div className='title'><h2> Every task is important </h2>
    <br /> 
    </div>

      
    <div className='addItems'>
    <div className='input'>
        <input  type="text"  value={inputData}
        onChange={(event)=>setInputData(event.target.value)} 
        placeholder='✍️ Add item...'/>   
       <i class="fa-solid fa-plus"  onClick={()=> dispatch(addTodo(inputData),setInputData(' '))} ></i>
    </div>
           <br /> <br />
    </div>

    {
  list.map((elem)=>{
  return(
  <div className='showItems' key={elem.id}>
 
<div className='left'>
<h3>{elem.data}
  </h3>
</div>
 

<div className='right'>
<i class="fa-solid fa-xmark" 
  onClick={()=> dispatch(deleteTodo(elem.id))}>
  </i>
</div>
 
  
  </div>
    )})
}

  <div className='remove'>
      <i class="fa-solid fa-ban" onClick={()=> dispatch(removeTodo())}> REMOVE ALL</i>
  </div>

    </div>
    </div>
    </>
  )
}

export default Todo








