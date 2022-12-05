import React, { useState } from 'react'

function Dynamic() {
    const [inputFields,setInputFields]=useState([
        {name:"",age:""}
    ]);
    const handleChange=(index,e)=>{
       let data=[...inputFields];
        data[index][e.target.name]=e.target.value;
        setInputFields(data);
    }
    const addFields=()=>{
      setInputFields([...inputFields, {name:"",age:""}]);
    }

  return (
    <div>
      <form >
        {inputFields.map((input,index)=>{
            return (
                <div key={index}>
                <input
                name='name'
                className='iname'
                placeholder='Name'
                value={input.name}
                onChange={(e)=>handleChange(e,index)}
                />
                <input
                name='age'
                className='iage'
                placeholder='Age'
                value={input.age}
                onChange={(e)=>handleChange(e,index)} 
                />
              
                </div>
            )
        })}
       
      </form>
      <button onClick={addFields}>Add</button>
    </div>
  )
}

export default Dynamic
