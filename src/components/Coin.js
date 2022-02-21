import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import "./coin.css"
import RowPriceCoin from './RowPriceCoin'
const Coin = (params) => {
  const REACT_APP_API_KEY = process.env.REACT_APP_API_KEY;
  const {id} = useParams();
  const getDataCoin = async(id)=>{
    const coin = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=${REACT_APP_API_KEY}&ids=${id}&interval=1h,1d,7d,30d`  )
    setData(coin.data[0])
  }
  const [data, setData] = useState("");

  useEffect(() => {
    getDataCoin(id)
  }, []);
  

  const {name, logo_url, price, symbol} = data;
  return (
    <div>
        <div className="headerCoin">
          <img className='img' src={logo_url} alt={name} />
          <h1>{name} <span className='text-muted ms-3 text-uppercase'>{symbol}</span></h1>
        </div>

        <section className='tabla'>
          <table className='table table-dark mt-4 table-hover'>
           <thead>
              <tr>
                <th className='text-center'>Price</th>
                <th className='text-center'>1Hr</th>
                <th className='text-center'>1 Day</th>
                <th className='text-center'>7 Day</th>
                <th className='text-center'>1 Month</th>
              </tr>
           </thead>
           <tbody>
             {data !== "" && <RowPriceCoin price={price} hour={data["1h"]} week={data["7d"]} month = {data["30d"]} day={data["1d"]}/>}
           </tbody>
          </table>
          <button className='boton' ><Link className='back text-black' to="/">Volver</Link></button>
        </section>
    </div>
  )
}

export default Coin