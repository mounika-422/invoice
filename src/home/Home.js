import React, { useState } from 'react'
import Invoice from '../invoice-gen/Invoice';
import './home.css';
export default function Home() {
  const [createinvoice,setCreateInvoice]=useState(false);
  return (
    <div>
      <div>
           <h2 className='header'><center>Invoice List</center></h2>
      </div>
       <div>
            <button className='invoice'>Add New Invoice</button>
       </div>
    </div>
  )
}


