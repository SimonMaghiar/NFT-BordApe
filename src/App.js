import './App.css';
import CollectionCard from './components/CollectionCard';
import Header from './components/Header';
import { useState, useEffect } from 'react';
import axios from 'axios';
import PunkList from './components/PunkList';
import Main from './components/Main';

function App() {

  const [punkListData, setPunkListData] = useState([]);
  const [selectedPunk, setSelectedPunk] = useState(0);

  // useEffect(()=> {
  //   const getMyNfts = async () => {
  //     const openseaData = await axios.get('https://testnets-api.opensea.io/assets?asset_contract_address=0xD85cFF21f7f8A2cd3406B236d5A12B28Fa92b183')
  //     setPunkListData(openseaData.data.assets.reverse());
  //   }  
  //   getMyNfts();
  // }, [])

  useEffect(() => {
    fetch(`https://testnets-api.opensea.io/assets?asset_contract_address=0xD85cFF21f7f8A2cd3406B236d5A12B28Fa92b183`, {
      method: 'GET',
      mode: 'cors'
    })
     .then((response) => response.json()).then((data)=>setPunkListData(data.assets.reverse()));
   }, []);

  return (
    <div className="app">
      <Header />
      {
        punkListData.length > 0 && (
          <>
          <Main selectedPunk={selectedPunk} punkListData={punkListData}/>
          <PunkList punkListData={punkListData} setSelectedPunk={setSelectedPunk}/>
          </>
        )
      }
      
    </div>
  );
}

export default App;
