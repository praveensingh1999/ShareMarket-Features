import Listitem from './components/Listitem'
import Searchbar from './components/Searchbar'
import SortbyMarketCapital from './components/SortbyMarketCapital'
import SortbyPercentage from './components/SortbyPercentage'
import './App.css'
import axios from 'axios'
import { useState, useEffect } from 'react'

function App() {
  const [list, setList] = useState([]);
  
  
  const handledata = async () => {
    try {
      const response = await axios.get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false'
      );
      setList(response.data);
     
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    handledata();
  }, []);


  return (
    <div className='app'>
      <div className="header">
        <Searchbar setList={setList} list={list} 
        
        />
        <SortbyMarketCapital setList={setList} list={list} />
        <SortbyPercentage setList={setList} list={list}/>
      </div>
      <div className="list-items">
          <Listitem list={list}/>
          
      </div>
      
     
    </div>
  )
}

export default App
