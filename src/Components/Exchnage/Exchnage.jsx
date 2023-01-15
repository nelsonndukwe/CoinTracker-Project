import React, { useState, useEffect } from 'react'
import axios from 'axios';
import './Exchnage.css'
import Exchangetitle from './Exchangetitle'


const Exchnage = () => {

  const [exchanges, setExchange] = useState([])

  const [search, setSearch] = useState('')

  useEffect(() => {
    axios.get("https://pro-api.coinmarketcap.com/v1/exchange/map")
      .then(res => {
        setExchange(res.data);
        console.log(res.data)
        // res.on("data", function(data) {
        //   const mainData = JSON.parse(data)
        //   console.log(mainData);
        // })
      }).catch(error => console.log(error))
  }, []);



  return (

    <>
      <Exchangetitle />







    </>
  )
}

export default Exchnage