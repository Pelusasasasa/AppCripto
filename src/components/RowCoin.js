import React from 'react';
import { Link, NavLink } from 'react-router-dom';

import '../css/rowCoin.css'

const RowCoin = ({coin,index}) => {
    const {name,logo_url,price,symbol} = coin
  return (

        <tr>
                <td><Link to={`${symbol}`}>{index}</Link></td>
                <td><Link to={`${symbol}`}><img src={logo_url} alt={name} /></Link></td>
                <td> <Link to={`${symbol}`}>{name} <span className=''>{symbol}</span></Link></td>
                <td> <Link to={`${symbol}`}>u$s {parseFloat(price).toFixed(2)}</Link></td>
                <td><Link to={`${symbol}`}>{parseFloat(coin["1h"].price_change_pct) > 0 
                    ? <p className='green'>{(parseFloat(coin["1h"].price_change_pct)).toFixed(3)}%</p>
                    : <p className='red'>{(parseFloat(coin["1h"].price_change_pct).toFixed(3))}%</p>}
                </Link></td>
        </tr>
    )
};

export default RowCoin;
