import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Derivative from '../Exchnage/Derivative'
import Exchnage from '../Exchnage/Exchnage'
import Nft from '../Exchnage/Nft'
import Hero from '../Hero/Hero'

const Router = () => {
    return (

        <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='exchange' element={<Exchnage />}
            /> 
             <Route path='exchange/derivative' element={<Derivative />}
            /> 
             <Route path='exchange/nft' element={<Nft />}
            /> 


        </Routes>

    )
}

export default Router