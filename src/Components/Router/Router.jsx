import React from 'react'
import {Routes, Route } from 'react-router-dom'
import Exchnage from '../Exchnage/Exchnage'
import Hero from '../Hero/Hero'

const Router = () => {
    return (

        <Routes>
            <Route path='/' element={<Hero />} />
            <Route path='exchange' element={<Exchnage />} />

        </Routes>

    )
}

export default Router