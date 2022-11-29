import React, { useState } from 'react'
import './invoice.css'
function Invoice() {
  // const [formValues,setFormValues]=useState(initialValues);
  const [data,setData]=useState({
    id: null,
    invoicenumber:null,
    company:'',
    name:'',
    address:'',
    city:'',
    postalcode:'',
    phone:'',
    companyId:null,
    iban:'',
    bic:'',
    rcompany:'',
    rname:'',
    raddress:'',
    rcity:'',
  })
  // const [errors,setErrors]=useState({})
  // const [id,setId]=useState(0)
  // const [invoicenumber,setInvoicenumber]=useState(0)
  // const [company,setCompany]=useState("");
  // const [name,setName]=useState('');
  // const [address,setAddress]=useState('')
  // const [city,setCity]=useState('');
  // const [postalcode,setPostalcode]=useState(0);
  // const [phone,setPhone]=useState('');
  // const [companyId,setCompanyId]=useState(0);
  // const [iban,setIban]=useState('');
  // const [bic,setBic]=useState('');
  // const [rcompany,setRcompany]=useState('');
  // const [rName,setRname]=useState('');
  // const [raddress,setRaddress]=useState('')
  // const [rCity,setRcity]=useState('');

  const handleChange=(e)=>{
      const {name,value}=e.target;
      setData({...data,[name]:value})
      console.log(data)
  }
  return (
    <div className='container'>
        <div className='sidebarWrapper'>
            <h3>Member</h3><br/>
            <label>Id</label><br/>
            <input 
            type="number"
            name='id'
            value={data.id}
            className='sidebarInputId' 
            placeholder='Enter id' 
            onChange={handleChange} /><br/>
            <label>Invoice Number</label><br/>
            <input 
            type="number"
            value={data.number}
            name='invoicenumber'
            className='sidebarInputInvoiceNumber' 
            placeholder='Enter invoice number'
            onChange={handleChange}/><br/>
            <h3>Sender</h3><br/>
            <label>Company</label><br/>
            <input 
            type="text"
            name='company'
           value={data.company}
            className='sidebarInputcompany'
            placeholder='Enter company name'  
            onChange={handleChange}/><br/>
            <label>Name</label><br/>
            <input 
            type="text"
            name='name'
            value={data.name}
            className='sidebarInputname'
            placeholder='Enter Name' 
            onChange={handleChange}/><br/>
            <label>Address</label><br/>
            <input 
            type="text"
            name='address'
            value={data.address}
            placeholder='Enter Address'
            onChange={handleChange}/><br/>
            <label>city</label><br/>
            <input 
            type="text"
            name='city'
           value={data.city}
            className='sidebarInputcity'
            placeholder='Enter City' 
            onChange={handleChange}/><br/>
            <label>postal code</label><br/>
            <input
            type="number"
            name='postalcode'
            value={data.postalcode}
            className='sidebarInputpostalcode' 
            placeholder='Enter postal code'  
            onChange={handleChange}/><br/>
            <label>phone</label><br/>
            <input 
             type="text"
            name='phone'
           value={data.phone}
            className='sidebarInputphone' 
            placeholder='Enter phone' 
            onChange={handleChange}/><br/>
            <label>Company ID</label><br/>
            <input 
            type="number"
            name='companyId'
           value={data.companyId}
            className='sidebarInputcompanyId' 
            placeholder='Enter company id'  
            onChange={handleChange}/><br/>
            <label>IBAN</label><br/>
            <input  
            type="text"
            name='iban'
            value={data.iban}
            className='sidebarInputIban'
             placeholder='Enter IBAN'
            onChange={handleChange}/><br/>
            <label>BIC/SWIFT</label><br/>
            <input 
            type="text"
            name='bic'
            value={data.bic}
            className='sidebarInputBic'
             placeholder='Enter BIC/SWIFT'
            onChange={handleChange}/><br/>
            <h3>Recipent</h3><br/>
            <label>Company</label><br/>
            <input 
            type="text"
            name='rcompany'
            value={data.rcompany}
            className='sidebarInputRcompany' 
            placeholder='Enter COMPANY' 
            onChange={handleChange}/><br/>
            <label>Name</label><br/>
            <input   
            type="text"
            name='rname'
           value={data.rname}
            className='sidebarInputId'
            placeholder='Enter NAME' 
            onChange={handleChange}/><br/>
            <label>Address</label><br/>
            <input 
            type="text"
            name='raddress'
           value={data.raddress}
            className='sidebarInputRaddress'
            placeholder='Enter ADDRESS'
            onChange={handleChange}/><br/>
            <label>city</label><br/>
            <input 
            type="text"
            value={data.rcity}
            name='rcity'
            className='sidebarInputRcity'
            placeholder='Enter CITY' 
            onChange={handleChange}/><br/>
        </div>
       <div className='middlebar'>
  
       </div>
       <div className='rightbar'>
              hddd
       </div>
    </div>
  )
}

export default Invoice
