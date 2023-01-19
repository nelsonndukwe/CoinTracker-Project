import React from 'react'

const DerivativeList = (props) => {
    return (
        <div className='exchange__container-main container behaviour'>
            <span className='exchange__info'>
                <img src={props.image} alt='exchange' />
                <article className='exchange__name-symbol'>
                    <h1>{props.name}</h1>
                    <h1>{props.id}</h1>
                </article>

            </span>

            <p className='exchange__price'>₿{props.openintrest}</p>
            <p className='exchange__price'>₿{props.dailyvol}</p>
            <p className='exchange__price'>{props.perpairs}</p>
            <p className='exchange__price'> {props.futurepairs}</p>
            <p><a href={props.website} target="_blank">Offical Webiste</a></p>

        </div>
    )
}

export default DerivativeList