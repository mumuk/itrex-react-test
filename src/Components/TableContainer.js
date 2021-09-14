import React, {useEffect, useMemo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux"
import {fetchData, setTextFilter} from "../actions/actions"
import {Table} from "./Table";
import {DetailsComponent} from "./DetailsComponent";


export const TableContainer = () => {
  const columns = useMemo(() => [
    {
      Header: 'Id',
      accessor: 'id'
    },
    {
      Header: 'First Name',
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

  ], [])

  const [inputText, setInputText] = useState('')
  const dispatch = useDispatch()
  const {isFetching, items,currentItem} = useSelector(state => state.data)


  useMemo(() => {
    items.length === 0 && dispatch(fetchData())
  }, [])

  const filteredItems = items.filter((item) => {
    return item.firstName.toLowerCase().includes(inputText.toLowerCase())
  })


  return (
    <div className='table-container'>
      <input
        type="text"
        onChange={e => setInputText(e.target.value)}
        value={inputText}
        placeholder='search by First Name'
      />

      <Table className='data-table' columns={columns} data={filteredItems}/>
      {currentItem!==null&& <DetailsComponent/>}
    </div>
  );
};



