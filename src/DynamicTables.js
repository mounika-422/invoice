import { useState } from "react";
import Table from "react-bootstrap/Table";
const rowData = {
    service:'',
    taxFree:null,
    taxPercent:null,
    tax: null,
    total:null ,
};
const DynamicTables = () => {
  const [row, setRow] = useState();
  const [allRowsAdded, updateAllRows] = useState(0);
  const [viscosity, setViscosity] = useState([]);

  const [IntensificationRatio, setIntensificationRatio] = useState(1)
  const [editFormData, setEditFormData] = useState([rowData])
  const [isRowId, setIsRowId] = useState(null)

  const handleEditFormChange = (event, fieldName, index) => {
    event.preventDefault();

    const fieldValue = event.target.value;
    setEditFormData(prevState => {
        const newState = [...prevState];
        newState[index][fieldName] = fieldValue;
        return newState;
    })
  }

  const handleEditFormSubmit = (event) => {
      event.preventDefault();

      setEditFormData(prevState => {
        const newState = [...prevState];
        newState.map(item => {
            let tax = item['taxFree'] * item['taxPercent'] ;
            item.tax = tax;
            let total = item.tax+item['taxFree'];

            item.total = total;
        })
        return newState;
      });
  }

  const addRow = (e) => {
    e.preventDefault();
    setRow(e.target.value);
  };

  const increaseRow = () => {
    setEditFormData(prevState => {
        const newState = [...prevState];
        for (let i = 0; i < parseInt(row); i++) {
            newState.push(rowData);
        }
        return newState;
    })
  };

  const deleteRow = (key) => {
    setEditFormData(prevState => {
        const newState = prevState.splice(key, 1);
        return newState;
    })
  };

  const demo = (id) => {
    setIsRowId(id)
  }

  return (
    <>
      <div>
        <form>
          <input type="text" onChange={addRow} placeholder="Enter Number Of Row's" /><br />
          <input type="text" onChange={(e) => setIntensificationRatio(e.target.value)} placeholder="Enter Intensification Ratio" />
        </form>
        <button onClick={increaseRow}> Add service </button>
      </div>

      <div className="container">
        <form onSubmit={handleEditFormSubmit} >
          <Table striped bordered hover responsive variant="light">
            <thead>
              <tr>
                <th>
                  {" "}
                  <h6>Service</h6>{" "}
                </th>
                <th>
                  {" "}
                  <h6> Tax Free </h6>{" "}
                </th>
                <th>
                  {" "}
                  <h6> Tax % </h6>{" "}
                </th>
                <th>
                  {" "}
                  <h6> Tax </h6>{" "}
                </th>
                <th>
                  {" "}
                  <h6> Total </h6>{" "}
                </th>
              </tr>
            </thead>
            <tbody className="grid_style">
              {editFormData.map((element, rowId) => {
                return (
                  <tr key={rowId}>

                    <td> <input type='text' className="form-control" defaultValue={element.service} onChange={e => handleEditFormChange(e, 'service',rowId)} onClick={() => demo(rowId)} /> </td>

                    <td> <input type='text' className="form-control" defaultValue={element.taxFree} onChange={e => handleEditFormChange(e,'taxFree',rowId)} onClick={() => demo(rowId)}/></td>

                    <td><input type='text' className="form-control" defaultValue={element.taxPercent} onChange={e => handleEditFormChange(e, 'taxPercent',rowId)} onClick={() => demo(rowId)}/> </td>

                    <td> <input type='text' className="form-control" value={element.tax } onChange={e => handleEditFormChange(e,rowId)} onClick={() => demo(rowId)} readOnly/> </td>

                    <td>  <input type='text' className="form-control" value={element.total} readOnly /> </td>

                   
                    <td> <i className="fa fa-trash viscocity_icons" onClick={() => deleteRow(element, rowId)}></i> </td>
                  </tr>
                )
              })}
            </tbody>
          </Table>
          <button type="submit"> Calculate </button>
        </form>
      </div>
    </>
  );
};

export default DynamicTables;
