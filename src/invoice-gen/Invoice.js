import React, { useState } from 'react'
import Table from  '../Table'
// import Table from "react-bootstrap/Table";
import './invoice.css'
function Invoice() {
 const initialValues={
      // id:window.self.crypto.randomUUID(),
      service:'',
      taxfree:'',
      taxpercent:'',
      tax:'',
      total:'',
 }
  let [formValues,setFormValues]=useState([
      // {
      //       id:1,
      //       service:'',
      //       taxfree:'',
      //       taxpercent:'',
      //       tax:'',
      //       total:'',
      // }
      initialValues
     
  ]);
  const [list,setList]=useState([])
  const [isInputs,setIsInputs]=useState(false);
  const [isSubmit,setIsSubmit]=useState(false);
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
 
const handleChange= (e) => {
      setFormValues({...formValues,[e.target.name]:e.target.value}); 
 }
 
const handleSubmit=(e)=>{
      e.preventDefault();
      const {name,value}=e.target;
      let taxx=parseInt(formValues.taxfree)*parseInt(formValues.taxpercent);
      formValues.tax=taxx;
      let totall=parseInt(formValues.taxfree)+parseInt(formValues.tax);
      formValues.total=totall;
      setFormValues({...formValues,[name]:value}); 
      // const list={
      //       service:'',
      //       taxfree:'',
      //       taxpercent:'',
      //       tax:'',
      //       total:'',
      //       id:window.self.crypto.randomUUID(),
      // }
      // setFormValues([...formValues,list])
      // }
      setIsSubmit(true);

}

// const handletaxChange=(e)=>{
//       const {name,value}=e.target;
//       let tax=parseInt(formValues.taxfree)*parseInt(formValues.taxpercent)
//       formValues.tax=tax;
//       setFormValues({...formValues,[name]:value}); 
//       console.log(formValues)
// }
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
              {companyId}
              {iban}<br/>
              {bic}<br/><br/>
              {rcompany}<br/>
              {rName}<br/>
              {raddress}<br/>
              {rCity}<br/><br/>
              {isSubmit?(
               <>
                   <Table formvalues={formValues}/>
                   <button onMouseOver={()=>setIsSubmit(false)}>Edit</button>
                   <button onMouseOver={()=>setFormValues(initialValues)}>Delete</button>
               </>
              )
              :( 
                  <>
                  {isInputs?(
                        <>
                        <form onSubmit={handleSubmit}>
                              <label>Add service</label><br/>
                              <input
                                    name='service'
                                    type='text'
                                    autoComplete='off'
                                    className='tInput'
                                    placeholder='Enter Service/product name'
                                    value={formValues?.service}
                                    onChange={handleChange}
                              /><br/>
                              <label>TaxFree ammount</label><br/>
                              <input
                                    name="taxfree"
                                    type='text'
                                    autoComplete='off'
                                    className='tInput'
                                    placeholder='Enter tax free ammount'
                                    value={formValues.taxfree}
                                    onChange={handleChange}
                              /><br/>
                              <label>Tax %</label><br/>
                              <input
                                    name='taxpercent'
                                    type='text'
                                    autoComplete='off'
                                    className='tInput'
                                    placeholder='Enter tax percentage'
                                    value={formValues.taxpercent}
                                    onChange={handleChange}
                              /><br/>
                              {/* <input
                                    name='tax'
                                    type='number'
                                    className='tInput'
                              
                                    
                                    // onChange={handletaxChange}
                                    value={formValues.tax}
                              /><br/>
                              <input
                                    name='total'
                                    type='number'
                                    className='tInput'
                              
                                    value={formValues.total}
                                    // onChange={handletotalChange}
                              /><br/> */}
                              {/* <button   type='button'className="taxcalc" onClick={handleTax}>Calculate Tax & Total</button><br/> */}
                              <button className="taxcalc" type='submit'>submit</button>
                        </form>
                      
                        </>
                     ):(
                        <>
                        <button  type='button' className='addService' onClick={()=>setIsInputs(true)}>Add service</button>        
                        </>
                        
                     )}
                  </>
                    )}
       </div>
       <div className='rightbar'>
            <h3>Invoice</h3>
            {new Date().getDate()}.{new Date().getMonth()}.{new Date().getFullYear()}  <br/>
            {invoicenumber}   
       </div>
    </div>
  )
}
export default Invoice
