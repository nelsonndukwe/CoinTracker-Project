import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Exchnage.css'
import Exchangetitle from './Exchangetitle'
import Exchnagelist from './Exchnagelist'

const Exchnage = () => {

  const [exchanges, setExchange] = useState([])
  
  const url = "https://api.coingecko.com/api/v3/exchanges"

  useEffect(() => {
    axios.get(url)
      .then(res => {
        setExchange(res.data);
        console.log(res.data);
      }).catch(error => console.log(error))
  }, []);

  return (

    <>
      <Exchangetitle 
         title="Top Cryptocurrency Spot Exchanges"
            desc="Cointrackers ranks and scores exchanges based on traffic, liquidity, trading volumes, and confidence in the legitimacy of trading volumes reported. <span>Read More</span> "
            spot="Spot"
            Derivative="Derivatives"
            Nft="NFTs"
      />

      <div className='exchange__table container'>
        <h1>#</h1>
        <h1>Exchange</h1>
        <h1>Trust Score</h1>
        <h1>24hr Trade Vol</h1>
        <h1>Year Created</h1>
        <h1>24hr Trade Vol Normalized</h1>

      </div>

      {exchanges.map(exchange => {
        return (
          
            <Exchnagelist

              key={exchange.trust_score_rank}
              image={exchange.image}
              rank={exchange.trust_score_rank}
              id={exchange.id}
              score={exchange.trust_score}
              dailyVolume={exchange.trade_volume_24h_btc}
              tradingincentives={exchange.has_trading_incentives}
              dailyvolumeNormalized={exchange.trade_volume_24h_btc_normalized}
              year={exchange.year_established}
              name={exchange.nam}

            />

        

        )
      })}










    </>
  )
}

export default Exchnage