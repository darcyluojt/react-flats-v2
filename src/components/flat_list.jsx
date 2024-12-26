import React, {Component} from 'react';
import Flat from './flat';


const FlatList = (props) => {
  return (
    <div className="flat-list">
      {props.list.map((flat,index) => {
        return <Flat
      key = {index}
      id = {index}
      image={flat.imageUrl}
      price={flat.price}
      name={flat.name}
      selectedFlat={props.selectedFlat}
      />})}
    </div>
  )
}

export default FlatList;
