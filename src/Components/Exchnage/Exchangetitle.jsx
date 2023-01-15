import React from 'react'
import './Exchnage.css'

const Exchangetitle = () => {
    return (
        <div className='exchange__container container'>
            <div className='exchange__main'>
                <h1>Top Cryptocurrency Spot Exchanges
                </h1>
                <h4>CoinMarketCap ranks and scores exchanges based on traffic, liquidity, trading volumes, and confidence in the legitimacy of trading volumes reported. <span>Read More</span> </h4>

            </div>

            <div className='filter__options'>
                <span>Spot</span>
                <span>Derivative</span>
                <span>DEX</span>
                <span>Lending</span>
            </div>


        </div>
    )
}

export default Exchangetitle