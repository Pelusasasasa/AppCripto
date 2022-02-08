import axios from 'axios';
import {useEffect, useState} from 'react';
import TableCoins from "./components/TableCoins"


const App =  () => {
  const [coins,setCoins] = useState([]);
  const [search,setSearch] = useState({
    loading: true,
    text: ""
  })
  const getData = async()=>{
    const arregloInicial = await axios.get(process.env.REACT_APP_URL_COINS  )
     setCoins(()=>{
       return arregloInicial.data.filter(coin=>{
         return (search.text !== "" ) ? coin.name.toUpperCase().startsWith(search.text) : arregloInicial.data;
       })
     })
  }
    useEffect(()=>{
      if(coins.length !== 0){
       setSearch({
         ...search,
         loading:false
       }) 
      }
    },[coins])

    useEffect(()=>{
    getData()
    },[search])

  return <div className='container'> 
      <div className="row">
        <input type="text" onChange={e => setSearch({
          ...search,
          text:e.target.value.toUpperCase()
        })} placeholder='Buscar Criptomonedas' className='form-control bg-dark text-light border-0 mt-4 text-center' />
        {search.loading ? (<div className='alert alert-info text-center'>Loanding....</div>) : <TableCoins coins={coins} />}
        
      </div>
  </div>;
};

export default App;
