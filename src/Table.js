import React from "react"

export default function Table({ list, wtotal }) {
  return (
    <>
      <table width="100%" className="mb-10">
        <thead>
          <tr className="bg-gray-100 p-1">
            <td className="tableHeaders">Service</td>
            <td className="tableHeaders">Tax free</td>
            <td className="tableHeaders">Tax %</td>
            <td className="tableHeaders">Tax</td>
            <td className="tableHeaders">Total</td>
          </tr>
        </thead><br/>
        {list.map(({ id, service,taxfree, taxpercent, tax,total }) => (
          <React.Fragment key={id}>
            <tbody className='tbody'>
              <tr className="h-10">
                                <td >{service}</td>
                                <td >{taxfree}</td>
                                <td >{taxpercent}</td>
                                <td >{tax}</td>
                                <td >{total}</td>

              </tr>
            </tbody>
          </React.Fragment>
        ))}
      </table>

      <div>
        <h2 className="flex items-end justify-end text-gray-800 text-4xl font-bold">
          Rs {wtotal.toLocaleString()}
        </h2>
      </div>
    </>
  )
}
