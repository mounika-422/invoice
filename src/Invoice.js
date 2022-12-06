import React, { useEffect, useState } from 'react'
import Tablecopy from  './Tablecopy'
import './invoice-gen/invoice.css'
import Table from './Table';

function Invoice() {
   const [send,setSend]=useState(false);
  const [list,setList]=useState([])
  const [isInputs,setIsInputs]=useState(false);
  const [id,setId]=useState()
  const [invoicenumber,setInvoicenumber]=useState()
  const [company,setCompany]=useState("");
  const [name,setName]=useState('');
  const [address,setAddress]=useState('')
  const [city,setCity]=useState('');
  const [postalcode,setPostalcode]=useState();
  const [phone,setPhone]=useState('');
  const [companyId,setCompanyId]=useState();
  const [iban,setIban]=useState('');
  const [bic,setBic]=useState('');
  const [rcompany,setRcompany]=useState('');
  const [rName,setRname]=useState('');
  const [raddress,setRaddress]=useState('')
  const [rCity,setRcity]=useState('');
  const [service,setService]=useState('');
  const [taxfree,setTaxfree]=useState();
  const [taxpercent,setTaxpercent]=useState();
  const [tax,setTax]=useState();
  const [total,setTotal]=useState(0);
  const [wtotal,setWtotal]=useState(0);
 
useEffect(()=>{
  
        setTax(taxfree*taxpercent);
       
},[tax]);
useEffect(()=>{
  
    setTotal(parseInt(taxfree)+parseInt(tax));
},[total]);
// const Print = () => {
//       let printContents=document.getElementById('printablediv').innerHTML;
//       let originalContents=document.body.innerHTML;
//       document.body.innerHTML=printContents;
//       window.print()
//       document.body.innerHTML=originalContents;
//     }
  return (
    <div className='container'>
        <div className='sidebarWrapper'>
            <h3>Member</h3><br/>
            <label>Id</label><br/>
                  <input 
                  type="number"
                  name='id'
                  autoComplete='off'
                  value={id}
                  className='sidebarInput' 
                  placeholder='Enter id' 
                  onChange={(e)=>setId(e.target.value)} /><br/>
            <label>Invoice Number</label><br/>
            <input 
                  type="number"
                  value={invoicenumber}
                  autoComplete='off'
                  name='invoicenumber'
                  className='sidebarInput' 
                  placeholder='Enter invoice number'
                  onChange={e=>setInvoicenumber(e.target.value)}/><br/>
            <h3>Sender</h3><br/>
            <label>Company</label><br/>
            <input 
                  type="text"
                  name='company'
                  value={company}
                  autoComplete='off'
                  className='sidebarInput'
                  placeholder='Enter company name'  
                  onChange={e=>setCompany(e.target.value)}/><br/>
            <label>Name</label><br/>
            <input 
                  type="text"
                  name='name'
                  value={name}
                  autoComplete='off'
                  className='sidebarInput'
                  placeholder='Enter Name' 
                  onChange={e=>setName(e.target.value)}/><br/>
            <label>Address</label><br/>
            <input 
                  type="text"
                  name='address'
                  autoComplete='off'
                  value={address}
                  className='sidebarInput'
                  placeholder='Enter Address'
                  onChange={e=>setAddress(e.target.value)}/><br/>
            <label>city</label><br/>
            <input 
                  type="text"
                  name='city'
                  autoComplete='off'
                  value={city}
                  className='sidebarInput'
                  placeholder='Enter City' 
                  onChange={e=>setCity(e.target.value)}/><br/>
            <label>postal code</label><br/>
            <input
                  type="number"
                  name='postalcode'
                  autoComplete='off'
                  value={postalcode}
                  className='sidebarInput' 
                  placeholder='Enter postal code'  
                  onChange={e=>setPostalcode(e.target.value)}/><br/>
            <label>phone</label><br/>
            <input 
                  type="text"
                  name='phone'
                  autoComplete='off'
                  value={phone}
                  className='sidebarInput' 
                  placeholder='Enter phone' 
                  onChange={e=>setPhone(e.target.value)}/><br/>
            <label>Company ID</label><br/>
            <input 
                  type="number"
                  name='companyId'
                  autoComplete='off'
                  value={companyId}
                  className='sidebarInput' 
                  placeholder='Enter company id'  
                  onChange={e=>setCompanyId(e.target.value)}/><br/>
            <label>IBAN</label><br/>
            <input  
                  type="text"
                  name='iban'
                  autoComplete='off'
                  value={iban}
                  className='sidebarInput'
                  placeholder='Enter IBAN'
                  onChange={e=>setIban(e.target.value)}/><br/>
            <label>BIC/SWIFT</label><br/>
            <input 
                  type="text"
                  name='bic'
                  autoComplete='off'
                  value={bic}
                  className='sidebarInput'
                  placeholder='Enter BIC/SWIFT'
                  onChange={e=>setBic(e.target.value)}/><br/>
            <h3>Recipent</h3><br/>
            <label>Company</label><br/>
            <input 
                  type="text"
                  name='rcompany'
                  autoComplete='off'
                  value={rcompany}
                  className='sidebarInput' 
                  placeholder='Enter COMPANY' 
                  onChange={e=>setRcompany(e.target.value)}/><br/>
            <label>Name</label><br/>
            <input   
                  type="text"
                  name='rname'
                  autoComplete='off'
                  value={rName}
                  className='sidebarInput'
                  placeholder='Enter NAME' 
                  onChange={e=>setRname(e.target.value)}/><br/>
            <label>Address</label><br/>
            <input 
                  type="text"
                  name='raddress'
                  autoComplete='off'
                  value={raddress}
                  className='sidebarInput'
                  placeholder='Enter ADDRESS'
                  onChange={e=>setRaddress(e.target.value)}/><br/>
            <label>city</label><br/>
            <input 
                  type="text"
                  value={rCity}
                  autoComplete='off'
                  name='rcity'
                  className='sidebarInput'
                  placeholder='Enter CITY' 
                  onChange={e=>setRcity(e.target.value)}/><br/>
        </div>
       <div className='middlebar'>
             <h2> {company}</h2>
              {name}<br/>
              {address}<br/>
              {city}<br/>
              {postalcode}<br/>
              {phone}<br/>
              {companyId}<br/>
              {iban}<br/>
              {bic}<br/><br/>
              <h2>{rcompany}</h2><br/>
              {rName}<br/>
              {raddress}<br/>
              {rCity}<br/><br/>
              {isInputs?(
               <>
                  {/* <button onClick={()=>setSend(true)}>Send</button> */}
                   <Tablecopy 
                        service={service} 
                        setService={setService}
                        taxfree={taxfree} 
                        setTaxfree={setTaxfree}
                        taxpercent={taxpercent} 
                        setTaxpercent={setTaxpercent}
                        tax={tax} 
                        setTax={setTax}
                        total={total}
                        setTotal={setTotal}
                        list={list}
                        setList={setList}
                        wtotal={wtotal}
                        setWtotal={setWtotal}/> 

                  <Table  
                  
                  service={service} 
                  taxfree={taxfree} 
                  taxpercent={taxpercent} 
                  tax={tax} 
                  total={total}
                  wtotal={wtotal}
                  setWtotal={setWtotal}
                  list={list}
                  setList={setList}
                  
                  />
               </>
              )
              :( 
                  <button  type='button' className='addService' onClick={()=>setIsInputs(true)}>Add service</button>        
            )}
       </div>
       {/* <div id='printablediv' className='print'>Print</div>
       <button type='button' onClick={Print}>Print div </button> */}
       <div className='rightbar'>
            <h3>Invoice</h3>
            {new Date().getDate()}.{new Date().getMonth()}.{new Date().getFullYear()}  <br/>
            {invoicenumber}   
       </div>
    </div>
  )
}
export default Invoice
