import React from 'react'
import './Hero.css'

const Crypto = ({ rank, name, image, symbol, price, volume, high, low, priceChange, marketcap, supply}) => {
  return (
    <>
      
      <div className='coin__container container'>

        <h1>{rank}</h1>
        <span className='coin__info'>
          <img src={image} alt='coin' />
          <article className='coin__name-symbol'>
          <h1>{name}</h1>
          <h1>{symbol}</h1>
          </article>
          
          </span>
        <p className='coin__price'>${price.toLocaleString()}</p>
        <p className='coin__price'>{priceChange}%</p>
        <p className='coin__price'>${high}</p>
        <p className='coin__price'>${low}</p>
        <p className='coin__volume'>${marketcap.toLocaleString()}</p>
        <p className='coin__volume'>${volume.toLocaleString()}</p>
        <p className='coin__volume'>${supply.toLocaleString()}</p>






      </div>


      


    </>
  )
}

export default Crypto