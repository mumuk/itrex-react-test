import React from 'react';
import {useSelector} from "react-redux"



export const DetailsComponent = () => {
  const {currentItem} = useSelector(state => state.data)

  return (
    <div className='profile-info-container'>
      <ul className='profile-info-container__list'>
        <li>Selected profile: {`${currentItem.firstName} ${currentItem.lastName}`}</li>
        <li>Email: {`${currentItem.email}`}</li>
        <li>Phone: {`${currentItem.phone}`}</li>
        <li>Adress {`${currentItem.adress.state}, ${currentItem.adress.zip} ${currentItem.adress.city} , ${currentItem.adress.streetAddress}`}</li>
      </ul>
    </div>
  )}


