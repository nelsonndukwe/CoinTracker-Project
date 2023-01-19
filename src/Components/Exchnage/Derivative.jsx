import axios from 'axios'
import React, { useState, useEffect } from 'react'
import DerivativeList from './DerivativeList'
import Exchangetitle from './Exchangetitle'
import './Exchnage.css'
const Derivative = () => {

    const [derivativeCall, setDerivativeCall] = useState([])

    const url = "https://api.coingecko.com/api/v3/derivatives/exchanges"

    useEffect(() => {
        axios.get(url)
        .then(res => {
            setDerivativeCall(res.data)
            console.log(res.data);
        })
    }, [])

    return (
        <div>
            <Exchangetitle
                title="Top Derivative Exchanges Ranked by Open Interest & Trade Volume"
                desc="The total derivatives volume is $2.71 Trillion, a -7.17% change in the last 24 hours. We track 63 crypto derivative exchanges with BTCEX (Futures), Binance (Futures), and BTCC Futures in the top 3 rankings."
                spot="Spot"
                Derivative="Derivatives"
                Nft="NFTs"
            />

            <div className='exchange__table container'>
                <h1>Exchange</h1>
                <h1>Open Interest</h1>
                <h1>24hr Volume</h1>
                <h1>Perpetual Pairs</h1>
                <h1>Futures Pairs</h1>
                <h1>Offical Website</h1>


            </div>

            {derivativeCall.map(derv =>{
                return(
                    <DerivativeList
                    key={derv.id}
                    name={derv.name}
                    openintrest={derv.open_interest_btc}
                    dailyvol={derv.trade_volume_24h_btc}
                    perpairs={derv.number_of_perpetual_pairs}
                    image={derv.image}
                    futurepairs={derv.number_of_futures_pairs}
                    website={derv.url}
                    dateestablished={derv.year_established}
                    />

                )
            })}
            
        </div>
    )
}

export default Derivative