import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Hero.css'
import Headerintro from './Headerintro'
import Tooglebar from './Tooglebar'
import Crypto from './Crypto'

const Hero = () => {

  const [coins, setCoins] = useState([])

  useEffect(() => {
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      }).catch(error => console.log(error))
    }, []);

  // const filteredCoins = coins.filter(coin =>
  //   coin.name.toLowerCase().includes(search.toLowerCase())
  // );

  return (
    <section id='hero' className='container'>

      <Headerintro />
      <Tooglebar />
      
      <div className='coin__table container'>
        <h1>#</h1>
        <h1>Coin</h1>
        <h1>Price</h1>
        <h1>24hr</h1>
        <h1>24hr High</h1>
        <h1>24hr Low</h1>
        <h1>24h volume</h1>
        <h1>Mkt Cap</h1>
        <h1>Total Supply</h1>
      </div>

      {coins.map(coin => {
        return (
          <Crypto
            key={coin.id}
            rank={coin.market_cap_rank}
            name={coin.name}
            price={coin.current_price}
            symbol={coin.symbol}
            marketcap={coin.total_volume}
            volume={coin.market_cap}
            image={coin.image}
            priceChange={coin.price_change_percentage_24h}
            high={coin.high_24h}
            low={coin.low_24h}
            supply={coin.circulating_supply}

          />
        );
      })}


    </section>
  )
}

export default Hero