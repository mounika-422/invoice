import React, { useState } from 'react'
import {Routes,Route,useNavigate} from 'react-router-dom';
import Invoice from '../Invoice'
import './home.css';
export default function Home() {
  //const [createinvoice,setCreateInvoice]=useState(false);

  const [isInvoice,setisInvoice]=useState(false);
  return (

    <>
    {isInvoice?(
      <>
      <Invoice/>
      </>
    ):(

      <>
      <div>
      <h2 className='header'><center>Invoice List</center></h2>
      </div> 
          <button className='invoice' onClick={()=>setisInvoice(true)}>Add New Invoice</button>
      </>
    )}
      
    </>
  )
}


