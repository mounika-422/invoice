import React from 'react'

function Table({formvalues}) {
  return (
    <>
      <table width="90%">
        
                        <thead>
                            <tr className='theader'>
                                <td >Service</td>
                                <td >TaxFree</td>
                                <td >Tax %</td>
                                <td >Tax</td>
                                <td >Total</td>
                            </tr>
                        </thead>
                        <tbody >
                            <tr>
                                <td >{formvalues.service}</td>
                                <td >{formvalues.taxfree}</td>
                                <td >{formvalues.taxpercent}</td>
                                <td >{formvalues.tax}</td>
                                <td >{formvalues.total}</td>
                            </tr>
                        </tbody>
        </table>
    </>
  )
}

export default Table
