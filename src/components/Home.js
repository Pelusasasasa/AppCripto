import axios from 'axios';
import {useEffect, useState} from 'react';
import Header from './Header';
import TableCoins from "./TableCoins"


const App =  () => {
  const [coins,setCoins] = useState([]);
  const [search,setSearch] = useState("")
  const getData = async()=>{

    const arregloInicial = await axios.get(`https://api.nomics.com/v1/currencies/ticker?key=af9c7b5f652aaaded4073fa356098a13986ee1d9&per-page=100&interval=1h`  )
     setCoins(()=>{
       return arregloInicial.data.filter(coin=>{
         return (search !== "" ) ? coin.name.toUpperCase().startsWith(search) : arregloInicial.data;
       })
     })
  }

    useEffect(()=>{ 
      getData()
    },[search])

  return <div className='container'> 
      <Header/>
      <div className="row">
        <input type="text" onChange={e => setSearch(e.target.value.toUpperCase())} placeholder='Buscar Criptomonedas' className='mt-0 form-control bg-dark text-light border-0  text-center' />
         <TableCoins coins={coins} />
        
      </div>
  </div>;
};

export default App;
