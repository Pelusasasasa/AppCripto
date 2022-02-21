import React from 'react'
import { Link } from 'react-router-dom'

const RowPriceCoin = ({price,hour,month,day,week}) => {
    // console.log(hour)
  return (
    <>
        <tr>
       <td className='text-center'>{parseFloat(price).toFixed(2)}</td>
       <td className='text-center'>{parseFloat(hour.price_change_pct)>0 ? <p className='text-success'>{(parseFloat(hour.price_change_pct)).toFixed(3)}%</p> : <p className='text-danger'>{(parseFloat(hour.price_change_pct).toFixed(3))}%</p>}</td>
       <td className='text-center'>{parseFloat(day.price_change_pct)>0 ? <p className='text-success'>{(parseFloat(day.price_change_pct)).toFixed(3)}%</p> : <p className='text-danger'>{(parseFloat(day.price_change_pct).toFixed(3))}%</p>}</td>
       <td className='text-center'>{parseFloat(week.price_change_pct)>0 ? <p className='text-success'>{(parseFloat(week.price_change_pct)).toFixed(3)}%</p> : <p className='text-danger'>{(parseFloat(week.price_change_pct).toFixed(3))}%</p>}</td>
       <td className='text-center'>{parseFloat(month.price_change_pct)>0 ? <p className='text-success'>{(parseFloat(month.price_change_pct)).toFixed(3)}%</p> : <p className='text-danger'>{(parseFloat(month.price_change_pct).toFixed(3))}%</p>}</td>
         </tr>
    </>
  )
}

export default RowPriceCoin