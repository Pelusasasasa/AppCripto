import React from 'react';
import './rowCoin.css'

const RowCoin = ({coin,index}) => {
    const {name,logo_url,price} = coin
  return (
        <tr>
            <td>{index}</td>
            <td><img src={logo_url} alt={name} /></td>
            <td>{name}</td>
            <td>{parseFloat(price).toFixed(2)}</td>
        </tr>
    )
};

export default RowCoin;
