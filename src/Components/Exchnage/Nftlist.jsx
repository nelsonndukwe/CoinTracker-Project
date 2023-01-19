import React from 'react'

const Nftlist = (props) => {
  return (
    <div className='exchange__container-nft-main container behaviour'>
      <h1>{props.symbol}</h1>

      <span className='exchange__info'>

        <article className='exchange__name-symbol'>'
          <h1>{props.name}</h1>
          <h1>{props.key}</h1>
        </article>
      </span>

      <p className='exchange__price'>{props.contradd}</p>
      <p className='exchange__price'>{props.assetplat}</p>
    </div>
  )
}

export default Nftlist