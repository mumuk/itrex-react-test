import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {fetchData} from "../actions/filtersActions"
import {useTable, useSortBy} from 'react-table'



const Table =({ columns, data })=>{
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable(
    {
      columns,
      data,
    },
    useSortBy
  )

  const firstPageRows = rows.slice(0, 10)

  return (
    <>
      <table {...getTableProps()}>
        <thead>
        {headerGroups.map(headerGroup => (
          <tr {...headerGroup.getHeaderGroupProps()}>
            {headerGroup.headers.map(column => (
              // Add the sorting props to control sorting. For this example
              // we can add them into the header props
              <th {...column.getHeaderProps(column.getSortByToggleProps())}>
                {column.render('Header')}
                {/* Add a sort direction indicator */}
                <span>
                    {column.isSorted
                      ? column.isSortedDesc
                        ? ' 🔽'
                        : ' 🔼'
                      : ''}
                  </span>
              </th>
            ))}
          </tr>
        ))}
        </thead>
        <tbody {...getTableBodyProps()}>
        {firstPageRows.map(
          (row, i) => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()}>
                {row.cells.map(cell => {
                  return (
                    <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                  )
                })}
              </tr>
            )}
        )}
        </tbody>
      </table>
      <br />
      <div>Showing the first 10 results of {rows.length} rows</div>
    </>
  )

}


export const TableComponent = () => {
  const columns =useMemo(()=>[
    {Header: 'First Name',
      accessor: 'firstName'
    },
    {
      Header: 'Last Name',
      accessor: 'lastName'
    },
    {
      Header: 'Email',
      accessor: 'email'
    },
    {
      Header: 'Phone',
      accessor: 'phone'
    },
    {
      Header: 'Description',
      accessor: 'description'
    },

  ],[])

  const dispatch = useDispatch()
  const {isFetching, items} = useSelector(state => state.data)
  const [arrItems, setArrItems] = useState(items)


  useEffect(() => {
    items.length === 0 && dispatch(fetchData())
     console.log(items)
  },[])

  // const data = useMemo(()=>{
  //   items.length === 0 && dispatch(fetchData())
  //   console.log(items)
  // },[])




  return (
      <Table className='data-table' columns={columns} data={items} />
  );
};

export default TableComponent;

