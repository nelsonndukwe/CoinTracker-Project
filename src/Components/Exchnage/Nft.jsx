import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Exchangetitle from './Exchangetitle'
import Nftlist from './Nftlist'


const Nft = () => {

    const [nftCall, setNftCall] = useState([])

    const url = "https://api.coingecko.com/api/v3/nfts/list"

    useEffect(() => {
        axios.get(url)
            .then(res => {
                setNftCall(res.data)
                console.log(res.data);
            })
    }, [])




    return (
        <div>
            <Exchangetitle
                title="Top NFT Collection Prices Ranked by 24H Trading Volume"
                desc="Explore all the top NFT collections by price floor, market cap, and total volume. We aggregate NFT from various blockchains such as Etheruem, Polygon, Optimism, Arbitrum, Klaytn, and more."
                spot="Spot"
                Derivative="Derivatives"
                Nft="NFTs"
            />


            <div className='exchange__container-nft container'>
                <h1>Symbol</h1>
                <h1>NFt collection</h1>
                <h1>Contract Address</h1>
                <h1>Blockchian Platform</h1>
                

            </div>

            {nftCall.map(nft => {
                return (
                    <Nftlist
                        key={nft.id}
                        name={nft.name}
                        symbol={nft.symbol}
                        contradd={nft.contract_address}
                        assetplat={nft.asset_platform_id}

                    />
                )
            })}




        </div>
    )
}

export default Nft