
import './App.css';
import React from 'react';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Component from '../src/component';

function App() {
  const [coins, setCoins] = useState([]);


  useEffect(() => {
    refreshPage();
  }, []);


  const refreshPage = () => {
    //setIsLoading(true);
    axios.get(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    ).then((response) => {
      //console.log(response.data);
      //setIsLoading(false);
      setCoins(response.data);
      //console.log(coins);
    });
  };
  
  

  return (
    <div className='Mainclass'>
      <div className='EntireWebsite'>
        <div className='Header'>
          CryptoMan
        </div>
      </div>
      <div className='Components'>
        <div className='eachone'>
          {coins.map((coin, index) => {
            return (
              <Component
                key={index}
                brand={coin}
              />
            );
          })}

        </div>
      </div>
    </div>

  );
}

export default App;
