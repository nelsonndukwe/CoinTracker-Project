import React from 'react'
import "./Exchnage.css"


const Exchnagelist = (props) => {
    return (

        <div className='exchange__container-main container behaviour'>

            <h1 className='first__col'>{props.rank}</h1>

            <span className='exchange__info'>
                <img src={props.image} alt='exchange' />
                <article className='exchange__name-symbol'>
                    <h1>{props.id}</h1>
                </article>

            </span>
            
            <p className='exchange__price'>{props.score}/10</p>
            <p className='exchange__price'>₿{props.dailyVolume.toLocaleString()}</p>
            <p className='exchange__price'>{props.year}</p>
            <p className='exchange__price'> ₿{props.dailyvolumeNormalized.toLocaleString()}</p>
            
            
        </div>

    )
}

export default Exchnagelist