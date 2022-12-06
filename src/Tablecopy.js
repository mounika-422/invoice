import React, { useState, useEffect } from "react"
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai"
import { v4 as uuidv4 } from "uuid"
function Table({
  service,
  setService,
  taxfree,
  setTaxfree,
  taxpercent,
  setTaxpercent,
  tax,
  setTax,
  total,
  setTotal,
  list,
  setList,
  wtotal,
  setWtotal,
}) {

  const [isEditing, setIsEditing] = useState(false)

  // Submit form function
  const handleSubmit = (e) => {
    e.preventDefault()

    if (!service || !taxfree || !taxpercent) {
      alert("Please fill in all inputs")
    } else {
      const newItems = {
        id: uuidv4(),
        service,
        taxfree,
        taxpercent,
        tax,
        total,
      }
      setService("")
      setTaxfree("")
      setTaxpercent("")
      setTax("")
      setTotal("")
      setList([...list, newItems])
      setIsEditing(false)
    }
  }
  useEffect(() => {
    const calculateAmount = (tax) => {
      setTax(taxfree * taxpercent)
    }

    calculateAmount(tax)
  }, [tax,taxfree, taxpercent, setTax])
  useEffect(() => {
    const calculateTotal = (total) => {
      setTotal(taxfree + tax)
    }

    calculateTotal(total)
  }, [total,taxfree, tax, setTotal])

  // Calculate total amount of items in table
  useEffect(() => {
    let rows = document.querySelectorAll(".total")
    let sum = 0
    for (let i = 0; i < rows.length; i++) {
      if (rows[i].className === "total") {
        sum += isNaN(rows[i].innerHTML) ? 0 : parseInt(rows[i].innerHTML)
        setWtotal(sum)
      }
    }
  })
  const editRow = (id) => {
    const editingRow = list.find((row) => row.id === id)
    setList(list.filter((row) => row.id !== id))
    setIsEditing(true)
    setService(editingRow.service)
    setTaxfree(editingRow.taxfree)
    setTaxpercent(editingRow.taxpercent)

  }
  const deleteRow = (id) => setList(list.filter((row) => row.id !== id))
  return (
    <>

          <form onSubmit={handleSubmit}>
            <div className="flex flex-col md:mt-16">
              <label htmlFor="service">Service :</label><br/>
              <input
                type="text"
                className='inputs'
                name="service"
                id="service"
                placeholder="Service Name"
                value={service}
                onChange={(e) => setService(e.target.value)}
              />
            </div>

            <div className="md:grid grid-cols-3 gap-10">
              <div className="flex flex-col">
                <label htmlFor="Tax free">Taxfree :</label><br/>
                <input
                  type="number"
                  className='inputs'
                  name="taxfree"
                  id="taxfree"
                  placeholder="taxfree"
                  value={taxfree}
                  onChange={(e) => setTaxfree(e.target.value)}
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="taxpercent">Tax % : </label><br/>
                <input
                  type="number"
                  className='inputs'
                  name="taxpercent"
                  id="taxpercent"
                  placeholder="Tax %"
                  value={taxpercent}
                  onChange={(e) => setTaxpercent(e.target.value)}
                />
              </div>
              <br/>
            </div>
            <button
              type="submit"
              className="submitbutton"
            >
              {isEditing ? "Editing Row Item" : "Add Table Item"}
            </button>
            <br/><br/>
          </form>
                 <table width="100%" className="mb-10">
        
                        <thead>
                            <tr className="bg-gray-100 p-1">
                                <td  className="tableHeaders" >Service</td>
                                <td  className="tableHeaders">TaxFree</td>
                                <td  className="tableHeaders">Tax %</td>
                                <td  className="tableHeaders">Tax</td>
                                <td  className="tableHeaders">Total</td>
                            </tr>
                        </thead><br/>
                        {list.map(({ id, service, taxfree, taxpercent,tax,total }) => (
          <React.Fragment key={id}>
                        <tbody className='tbody'>
                            <tr className="h-10">
                                <td >{service}</td>
                                <td >{taxfree}</td>
                                <td >{taxpercent}</td>
                                <td >{tax}</td>
                                <td className="total">{total}</td>
                                <td>
                                <button onClick={() => editRow(id)}>
                    <AiOutlineEdit className="text-green-500 font-bold text-xl" />
                  </button>
                </td>
                <td>
                  <button onClick={() => deleteRow(id)}>
                    <AiOutlineDelete className="text-red-500 font-bold text-xl" />
                  </button>
                </td>
                            </tr>
                            
                        </tbody>
                        </React.Fragment>
        ))}
        </table>
        <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Rs. {wtotal.toLocaleString()}
        </h2>
      </div>
    </>
  )
}

export default Table
