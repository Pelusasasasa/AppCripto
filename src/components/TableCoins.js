import React from 'react';
import RowCoin from './RowCoin';


const TableCoins = ({coins=[]}) => {
  return (
             <table className=''>
               <thead>
                    <tr>
                        <th>Pos</th>
                        <th>Img</th>
                        <th>Nombre</th>
                        <th>Price</th>
                        <th>Change at 1Hour</th>
                    </tr>
               </thead>
                <tbody>
                    {coins.map((coin,index)=>(
                        <RowCoin key={coin.name} coin={coin} index={index+1} />
                    ))}
                </tbody>
            </table>
            )

};

export default TableCoins;
