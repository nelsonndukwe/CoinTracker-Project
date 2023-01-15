import React, { useState } from 'react'
import './Hero.css'
import { AiTwotoneStar } from 'react-icons/ai'
import { AiTwotonePieChart } from 'react-icons/ai'


const Headerintro = () => {


    const min = new Date().getHours()

    const newdate = 24 - min

    const items = [
        {
            id: 1,
            name: "Watchlist",
            icon: <AiTwotoneStar />
        },

        {
            id: 2,
            name: "Portfolio",
            icon: <AiTwotonePieChart />
        },

        {
            id: 3,
            name: "CryptoCurrencies",

        },

        {
            id: 4,
            name: "Categories",
        },

        {
            id: 5,
            name: "Defi",
        },

        {
            id: 6,
            name: "NFT",
        },

        {
            id: 7,
            name: "Metaverse",
        },

        {
            id: 8,
            name: "polkadot",
        },

        {
            id: 9,
            name: "BNB chain",
        },

        {
            id: 10,
            name: "Solana",
        },

        {
            id: 11,
            name: "Alvalnche",
        },


    ]

    const [color, setColor] = useState(false)




    return (
        <>
            <div className='main__div'>
                <div> <h1 className='big__title'>Today's Cryptocurrency Prices by Market Cap</h1>
                    <h3 className='small__title'>The global crypto market cap is $806.07B, a 1.36% increase over the {newdate} hours. <span>Read More</span>
                    </h3></div>


            </div>

            
            <div className='header__container' >
                {items.map(({ id, name, icon }) => {

                    return (

                        <div className='header__options' id={id}>
                            <span onClick={() =>
                                color === false ? setColor(!false) : setColor(false)}
                                className='icon__item'
                                style={{ color: color === true ? "red" : "" }}>{icon}
                            </span>
                            <h4>{name}</h4>
                        </div>


                    )

                })}
            </div>



        </>

    )
}

export default Headerintro


