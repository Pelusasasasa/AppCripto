import React from 'react'
import { Link } from 'react-router-dom'

const RowPriceCoin = ({price,hour,month,day,week}) => {
    // console.log(hour)
  return (
    <>
        <tr>
       <td className=''>{parseFloat(price).toFixed(2)}</td>
       <td className=''>{parseFloat(hour.price_change_pct)>0 ? <p className=''>{(parseFloat(hour.price_change_pct)).toFixed(3)}%</p> : <p className=''>{(parseFloat(hour.price_change_pct).toFixed(3))}%</p>}</td>
       <td className=''>{parseFloat(day.price_change_pct)>0 ? <p className=''>{(parseFloat(day.price_change_pct)).toFixed(3)}%</p> : <p className=''>{(parseFloat(day.price_change_pct).toFixed(3))}%</p>}</td>
       <td className=''>{parseFloat(week.price_change_pct)>0 ? <p className=''>{(parseFloat(week.price_change_pct)).toFixed(3)}%</p> : <p className=''>{(parseFloat(week.price_change_pct).toFixed(3))}%</p>}</td>
       <td className=''>{parseFloat(month.price_change_pct)>0 ? <p className=''>{(parseFloat(month.price_change_pct)).toFixed(3)}%</p> : <p className=''>{(parseFloat(month.price_change_pct).toFixed(3))}%</p>}</td>
         </tr>
    </>
  )
}

export default RowPriceCoin