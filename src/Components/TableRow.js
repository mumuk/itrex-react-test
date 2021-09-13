import React from 'react';


const TableRow = props => {
  console.log('CardList item props: ', props)


  return (

    <tr>
      <td> {props.element.lastName}</td>
      <td> {props.element.firstName}</td>
      <td> {props.element.email}</td>
      <td> {props.element.phone}</td>
      <td> {props.element.description}</td>

    </tr>

  );
};


export default TableRow;