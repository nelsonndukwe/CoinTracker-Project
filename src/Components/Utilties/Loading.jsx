import React from 'react'
import Equss from "../../Assets/Equss.png"
import "./Utilities.css"

const Loading = () => {
  return (
    <div>
    <div className='loading__background'>
        <img src={Equss} alt='loadingimg' />
    </div>
    </div>
  )
}

export default Loading