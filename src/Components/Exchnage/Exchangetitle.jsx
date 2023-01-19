import React from 'react'
import { Link } from 'react-router-dom'
import './Exchnage.css'

const Exchangetitle = (props) => {
    return (
        <div className='exchange__container container'>
            <div className='exchange__main'>
                <h1>{props.title}</h1>
                <h4>{props.desc}</h4>

            </div>

            <div className='filter__options'>
                <span ><Link to="/exchange">{props.spot}</Link></span>
                <span><Link to="/exchange/derivative">{props.Derivative}</Link></span>
                <span><Link to="/exchange/nft">{props.Nft}</Link></span>
            </div>


        </div>
    )
}

export default Exchangetitle