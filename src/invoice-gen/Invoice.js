import React, { useState } from 'react'
import './invoice.css'
function Invoice() {

  // const [errors,setErrors]=useState({})
  const [inputFields,setInputFields]=useState([
      {service:"",taxfree:undefined,taxpercent:undefined,tax:undefined}

  ]);
//   const [service,setService]=useState('');
//   const [taxfree,setTaxfree]=useState('');
//   const [taxpercent,setTaxPercent]=useState('');
//   const [tax,setTax]=useState('');
  const [total,setTotal]=useState('')
  const [isSubmit,setIsSubmit]=useState(false);
  const [isInputs,setisInputs]=useState(false)
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
  const initialValues={
      service:'',
      taxfree:undefined,
      tax:undefined,
  }
  const [formValues,setFormValues]=useState(initialValues)
  const handleChange=(e)=>{
      const {name,value}=e.target;
      setFormValues({...formValues,[name]:value}); 
}
  const handleSubmit=(e)=>{
            e.preventDefault();
            setIsSubmit(true);
}
      const handleformChange=(index,e)=>{
      let data=[...inputFields];
       data[index][e.target.name]=e.target.value;
       setInputFields(data);
   }
const addFields=()=>{
      let newFields={service:"",taxfree:undefined,taxpercent:undefined,tax:undefined}
      setInputFields([...inputFields,newFields])
}
  return (
    <div className='container'>
        <div className='sidebarWrapper'>
            <h3>Member</h3><br/>
            <label>Id</label><br/>
                  <input 
                  type="number"
                  name='id'
                  value={id}
                  className='sidebarInputId' 
                  placeholder='Enter id' 
                  onChange={(e)=>setId(e.target.value)} /><br/>
            <label>Invoice Number</label><br/>
            <input 
                  type="number"
                  value={invoicenumber}
                  name='invoicenumber'
                  className='sidebarInputInvoiceNumber' 
                  placeholder='Enter invoice number'
                  onChange={e=>setInvoicenumber(e.target.value)}/><br/>
            <h3>Sender</h3><br/>
            <label>Company</label><br/>
            <input 
                  type="text"
                  name='company'
                  value={company}
                  className='sidebarInputcompany'
                  placeholder='Enter company name'  
                  onChange={e=>setCompany(e.target.value)}/><br/>
            <label>Name</label><br/>
            <input 
                  type="text"
                  name='name'
                  value={name}
                  className='sidebarInputname'
                  placeholder='Enter Name' 
                  onChange={e=>setName(e.target.value)}/><br/>
            <label>Address</label><br/>
            <input 
                  type="text"
                  name='address'
                  value={address}
                  placeholder='Enter Address'
                  onChange={e=>setAddress(e.target.value)}/><br/>
            <label>city</label><br/>
            <input 
                  type="text"
                  name='city'
                  value={city}
                  className='sidebarInputcity'
                  placeholder='Enter City' 
                  onChange={e=>setCity(e.target.value)}/><br/>
            <label>postal code</label><br/>
            <input
                  type="number"
                  name='postalcode'
                  value={postalcode}
                  className='sidebarInputpostalcode' 
                  placeholder='Enter postal code'  
                  onChange={e=>setPostalcode(e.target.value)}/><br/>
            <label>phone</label><br/>
            <input 
                  type="text"
                  name='phone'
                  value={phone}
                  className='sidebarInputphone' 
                  placeholder='Enter phone' 
                  onChange={e=>setPhone(e.target.value)}/><br/>
            <label>Company ID</label><br/>
            <input 
                  type="number"
                  name='companyId'
                  value={companyId}
                  className='sidebarInputcompanyId' 
                  placeholder='Enter company id'  
                  onChange={e=>setCompanyId(e.target.value)}/><br/>
            <label>IBAN</label><br/>
            <input  
                  type="text"
                  name='iban'
                  value={iban}
                  className='sidebarInputIban'
                  placeholder='Enter IBAN'
                  onChange={e=>setIban(e.target.value)}/><br/>
            <label>BIC/SWIFT</label><br/>
            <input 
                  type="text"
                  name='bic'
                  value={bic}
                  className='sidebarInputBic'
                  placeholder='Enter BIC/SWIFT'
                  onChange={e=>setBic(e.target.value)}/><br/>
            <h3>Recipent</h3><br/>
            <label>Company</label><br/>
            <input 
                  type="text"
                  name='rcompany'
                  value={rcompany}
                  className='sidebarInputRcompany' 
                  placeholder='Enter COMPANY' 
                  onChange={e=>setRcompany(e.target.value)}/><br/>
            <label>Name</label><br/>
            <input   
                  type="text"
                  name='rname'
                  value={rName}
                  className='sidebarInputId'
                  placeholder='Enter NAME' 
                  onChange={e=>setRname(e.target.value)}/><br/>
            <label>Address</label><br/>
            <input 
                  type="text"
                  name='raddress'
                  value={raddress}
                  className='sidebarInputRaddress'
                  placeholder='Enter ADDRESS'
                  onChange={e=>setRaddress(e.target.value)}/><br/>
            <label>city</label><br/>
            <input 
                  type="text"
                  value={rCity}
                  name='rcity'
                  className='sidebarInputRcity'
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
              {companyId}
              {iban}<br/>
              {bic}<br/><br/>
              {rcompany}<br/>
              {rName}<br/>
              {raddress}<br/>
              {rCity}<br/><br/>
              
              {isSubmit?(
                  <>
                   <table name='outerTable'>
                        <tr>
                              <td>
                                    <table name='innerTable'>
                                    <tr>
                                          <td>Service</td>
                                          <td>Tax free</td>
                                          <td>Tax %</td>
                                          <td>Tax</td>
                                    </tr>
                                    </table>
                              </td>
                        </tr>
                  </table>
                  <form>
                  {inputFields.map((input,index)=>{
            return (
                <div key={index}>
                <input 
                        name='ip1'
                        className='ip1'
                        type='number'
                        onChange={(e)=>handleformChange(index,e)}
                        value={formValues.service}
                  />
                  <input
                        name='ip2'
                        className='ip2'
                        type='number'
                        onChange={(e)=>handleformChange(index,e)}
                        value={formValues.taxfree}
                  />
                  <input
                        name='ip3'
                        className='ip3'
                        type='number'
                        onChange={(e)=>handleformChange(index,e)}
                        value={formValues.tax}
                  />
                  <input
                        name='ip4'
                        className='ip4'
                        type='number'
                        onChange={(e)=>handleChange(index,e)}
                        //value={tax}
                  />
                  <button onClick={addFields}>Add service</button>
                </div>
            )
           
        })}
                 
                  </form>
                 
                   </>
                 
              )
              :(
                  <>
                {  isInputs?(
                        <>
                        <form onSubmit={handleSubmit}>
                              <label>Add service</label><br/>
                              <input
                                    name='service'
                                    className='serviceName'
                                    placeholder='Enter Service/product name'
                                    value={formValues.service}
                                    onChange={handleChange}
                              /><br/>
                              <label>TaxFree ammount</label><br/>
                              <input
                                    name="taxfree"
                                    className='taxFreeeAmmount'
                                    placeholder='Enter tax free ammount'
                                    value={formValues.taxfree}
                                    onChange={handleChange}
                              /><br/>
                              <label>Tax %</label><br/>
                              <input
                                    name='taxpercent'
                                    className='taxpercent'
                                    placeholder='Enter tax percentage'
                                    value={formValues.tax}
                                    onChange={handleChange}
                              /><br/>
                              <button  type='submit' >Submit</button> 
                        </form>            
                        </>
                    ):(
                       <>
               <button className='addService' onClick={()=>setisInputs(true)}>Add service</button>
                       </> 
                    ) }

                  </>
              )
              }
       </div>
       <div className='rightbar'>
             rightbar 
       </div>
    </div>
  )
}

export default Invoice
