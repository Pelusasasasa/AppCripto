import axios from 'axios';
import {useEffect, useState} from 'react';
import TableCoins from "./components/TableCoins"


const App =  () => {
  const [coins,setCoins] = useState([])
  const getData = async()=>{
    const arregloInicial = await axios.get(process.env.REACT_APP_URL_COINS  )
     setCoins(arregloInicial.data)
  }

     useEffect(()=>{
      getData()
     },[])

  return <div className='container'> 
      <div className="row">
        <TableCoins coins={coins} />
      </div>
  </div>;
};

export default App;
