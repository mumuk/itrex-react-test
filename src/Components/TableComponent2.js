import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {fetchData} from "../actions/filtersActions"
import TableRow from "./TableRow";


export const TableComponent = () => {
  const dispatch = useDispatch()
  const {isFetching, items} = useSelector(state => state.data)
  const [arrItems, setArrItems] = useState(items)

  useEffect(() => {
    items.length === 0 && dispatch(fetchData())
     console.log(items)
  },[])

  return (

    <table className='data-table'>
      <tbody>
<tr>
<th>Last name</th>
<th>First name</th>
<th>email</th>
<th>Phone</th>
<th>Description</th>
</tr>
      {items.map(el => {

        return <TableRow
          key={el.email}
          element={el}
        />
      })}

      </tbody>


    </table>
  );
};

export default TableComponent;