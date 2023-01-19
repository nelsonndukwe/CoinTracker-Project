import React, { useState, useEffect } from 'react'
import axios from 'axios'
import './Hero.css'
import { ImFire } from 'react-icons/im'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { FaBtc } from 'react-icons/fa'
import { BsClockHistory } from 'react-icons/bs'
import { AiFillStar } from 'react-icons/ai'
import { AiOutlineArrowDown } from 'react-icons/ai'
import { Switch } from 'antd';
import Market from './Market'


const Tooglebar = () => {

    const [toggle, setToggle] = useState(false)

    const [global, setGlobal] = useState([])

    const url = "https://api.coingecko.com/api/v3/global"

    const apiFun = (url) => {
        axios.get(url)
            .then(res => {
                setGlobal(res.data);
                console.log(res.data);
            }).catch(error => console.log(error))

    }

    useEffect(() => {

        apiFun(url);
    }, []);

    // let myMarks = global.data.markets
    // let marrkCapChange = global.data.market_cap_change_percentage_24h_usd
    // let allCryptoNo = global.data.active_cryptocurrencies
    // let total_market_cap_usd = global.data.total_market_cap.usd
    // let dailyTradeVol = global.data.total_volume.usd

    return (
        <>
            <div className='toole__btn'>
                <h3>Highlights</h3>
                <Switch
                    type="switch"
                    id="custom-switch"
                    options="default"
                    className='radio__item'
                    onChange={() => toggle === false ? setToggle(!false) : setToggle(false)}
                />
            </div>
            <div className={toggle === false ? "toggle__container" : "ontoggle"}>

                <div className='toogle__main-container'>

                    <div className='toogle__title-div'>
                        <div className='toogle__title'>
                            <span><ImFire className='fire__icon' /></span>
                            <div><h1>Trending</h1></div>
                        </div>

                        <div className='toogle__title-right'>
                            <div><h4 className='more__title'>More </h4></div>
                        </div>
                    </div>

                    <div className='toogle__title-div div-2'>
                        <div className='toogle__title'>
                            <span><h1 className='text__faint'>1</h1></span>
                            <span><FaBtc className='fire__icon fire__icon-2' /></span>
                            <div><h1>Solana</h1></div>
                            <span><h1 className='text__faint'>SOL</h1></span>

                        </div>

                        <div className='toogle__title-right'>
                            <div><AiOutlineArrowDown className='price__increase' /></div>
                            <div><h4 className='price__increase'>2.65% </h4></div>

                        </div>
                    </div>

                    <div className='toogle__title-div div-2'>
                        <div className='toogle__title'>
                            <span><h1 className='text__faint'>2</h1></span>
                            <span><ImFire className='fire__icon fire__icon-2' /></span>
                            <div><h1>Bitcoin</h1></div>
                            <span><h1 className='text__faint'>BTC</h1></span>

                        </div>

                        <div className='toogle__title-right'>
                            <div><AiOutlineArrowDown className='price__increase' /></div>
                            <div><h4 className='price__increase'>30.80% </h4></div>


                        </div>
                    </div>

                    <div className='toogle__title-div div-2'>
                        <div className='toogle__title'>
                            <span><h1 className='text__faint'>3</h1></span>
                            <span><ImFire className='fire__icon fire__icon-2' /></span>
                            <div><h1>Polygon</h1></div>
                            <span><h1 className='text__faint'>MATIC</h1></span>

                        </div>

                        <div className='toogle__title-right'>
                            <div><AiOutlineArrowDown className='price__increase' /></div>
                            <div><h4 className='price__increase'>3.35% </h4></div>

                        </div>
                    </div>





                </div>

                <div className='toogle__main-container'>
                    <div className='toogle__title-div'>
                        <div className='toogle__title'>
                            <span><BsClockHistory className='fire__icon' /></span>
                            <div><h1>Recently Added</h1></div>
                        </div>

                        <div className='toogle__title-right'>
                            <div><h4 className='more__title'>More </h4></div>

                        </div>
                    </div>

                    <div className='toogle__title-div div-2'>
                        <div className='toogle__title'>
                            <span><h1 className='text__faint'>1</h1></span>
                            <span><FaBtc className='fire__icon fire__icon-2' /></span>
                            <div><h1>PrivaCoin</h1></div>
                            <span><h1 className='text__faint'>PRVC</h1></span>

                        </div>

                        <div className='toogle__title-right'>
                            <div><AiOutlineArrowDown className='price__increase' /></div>
                            <div><h4 className='price__increase'>$0.0008954 </h4></div>

                        </div>
                    </div>

                    <div className='toogle__title-div div-2'>
                        <div className='toogle__title'>
                            <span><h1 className='text__faint'>2</h1></span>
                            <span><ImFire className='fire__icon fire__icon-2' /></span>
                            <div><h1>Network cap Token</h1></div>
                            <span><h1 className='text__faint'>NETC</h1></span>

                        </div>

                        <div className='toogle__title-right'>
                            <div><AiOutlineArrowDown className='price__increase' /></div>
                            <div><h4 className='price__increase'>$2.50</h4></div>


                        </div>
                    </div>

                    <div className='toogle__title-div div-2'>
                        <div className='toogle__title'>
                            <span><h1 className='text__faint'>3</h1></span>
                            <span><ImFire className='fire__icon fire__icon-2' /></span>
                            <div><h1>Virtual reality</h1></div>
                            <span><h1 className='text__faint'>VRG</h1></span>

                        </div>

                        <div className='toogle__title-right'>
                            <div><AiOutlineArrowDown className='price__increase' /></div>
                            <div><h4 className='price__increase'>$0.0004051 </h4></div>

                        </div>
                    </div>







                </div>


                <div className='toogle__main-container'>
                    <div className='toogle__title-div'>
                        <div className='toogle__title'>
                            <span><AiFillStar className='fire__icon' /></span>
                            <div><h1>Top Losses</h1></div>
                        </div>

                        <div className='toogle__title-right'>
                            <div><h4>More </h4></div>
                            <div><AiOutlineArrowRight /></div>
                        </div>
                    </div>


                    <div className='toogle__title-div div-2'>
                        <div className='toogle__title'>
                            <span><h1 className='text__faint'>1</h1></span>
                            <span><FaBtc className='fire__icon fire__icon-2' /></span>
                            <div><h1>Ripple</h1></div>
                            <span><h1 className='text__faint'>XRP</h1></span>

                        </div>

                        <div className='toogle__title-right'>
                            <div><AiOutlineArrowDown className='price__increase' /></div>
                            <div><h4 className='price__increase'>-3.65% </h4></div>

                        </div>
                    </div>

                    <div className='toogle__title-div div-2'>
                        <div className='toogle__title'>
                            <span><h1 className='text__faint'>2</h1></span>
                            <span><ImFire className='fire__icon fire__icon-2' /></span>
                            <div><h1>Hedera</h1></div>
                            <span><h1 className='text__faint'>HBAR</h1></span>

                        </div>

                        <div className='toogle__title-right'>
                            <div><AiOutlineArrowDown className='price__increase' /></div>
                            <div><h4 className='price__increase'>-7.5% </h4></div>


                        </div>
                    </div>

                    <div className='toogle__title-div div-2'>
                        <div className='toogle__title'>
                            <span><h1 className='text__faint'>3</h1></span>
                            <span><ImFire className='fire__icon fire__icon-2' /></span>
                            <div><h1>Terra</h1></div>
                            <span><h1 className='text__faint'>LUNA</h1></span>

                        </div>

                        <div className='toogle__title-right'>
                            <div><AiOutlineArrowDown className='price__increase' /></div>
                            <div><h4 className='price__increase'>-30.35% </h4></div>

                        </div>
                    </div>






                </div>
            </div>

            <Market
                // active={allCryptoNo}
                // percentagechange={marrkCapChange}
                // market={myMarks}
                // markcap={total_market_cap_usd}
                // dailyVol={dailyTradeVol}

            />







        </>
    )
}

export default Tooglebar