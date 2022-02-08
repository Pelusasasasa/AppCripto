import axios from 'axios';
import {useEffect, useState} from 'react';
import TableCoins from "./components/TableCoins"


const App =  () => {
  const [coins,setCoins] = useState([]);
  const [search,setSearch] = useState("");
  const getData = async()=>{
    const arregloInicial = await axios.get(process.env.REACT_APP_URL_COINS  )
     setCoins(()=>{
       return arregloInicial.data.filter(coin=>{
         return (search !== "" )? coin.name.toUpperCase().startsWith(search) : arregloInicial.data;
       })
     })
  }
  
    
    useEffect(()=>{
    getData()
    },[search])

  return <div className='container'> 
      <div className="row">
        <input type="text" onChange={e => setSearch(e.target.value.toUpperCase())} placeholder='Buscar Criptomonedas' className='form-control bg-dark text-light border-0 mt-4 text-center' />
        <TableCoins coins={coins} />
      </div>
  </div>;
};

export default App;
