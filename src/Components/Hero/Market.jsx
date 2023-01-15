import React from 'react'
import "./Hero.css"

const Market = (props) => {


    return (
        <div className='market__colnatiner'>

            <div className='market__item' >
                <h1>{props.name}</h1>
                <h1>{props.title}</h1>
            </div>

            <div className='market__item'>
                <h1>Hello</h1>
                <h1>Hello</h1>
            </div>

            <div className='market__item'>
                <h1>Hello</h1>
                <h1>Hello</h1>

            </div>

            <div className='market__item'>
                <h1>hi</h1>
                <h1>Hello</h1>

            </div>

        </div>
    )
}

export default Market