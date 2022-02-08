import React from 'react';
import './rowCoin.css'

const RowCoin = ({coin,index}) => {
    const {name,logo_url,price,symbol} = coin
    console.log(coin["1h"]);
  return (
        <tr>
            <td>{index}</td>
            <td><img src={logo_url} alt={name} /></td>
            <td>{name} <span className='text-muted ms-3 text-uppercase'>{symbol}</span></td>
            <td>u$s {parseFloat(price).toFixed(2)}</td>
            <td>{parseFloat(coin["1h"].price_change_pct) > 0 
            ? <p className='text-success'>{coin["1h"].price_change_pct}</p>
            : <p className='text-danger'>{coin["1h"].price_change_pct}</p>}</td>
        </tr>
    )
};

export default RowCoin;
