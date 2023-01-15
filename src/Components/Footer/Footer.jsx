import React from 'react'

import './Footer.css'

const Footer = () => {

  const year = new Date().getFullYear
  return (
    <section id='footer' className='container'>
      <div className='footer__conatiner'>
        <div className='footer__right-container'>
          <h1>CoinTracker</h1>
          <h3>Stay Connected</h3>
        </div>

        <div className='footer__leftcontainer'>
          <div className='products__list'>
            <span><h1>Products</h1></span>
            <ul>
              <li>Blockchain Explorer</li>
              <li>Crypto API</li>
              <li>Crypto Indices</li>
              <li>Jobs Board</li>
              <li>Sitemap</li>

            </ul>

          </div>

          <div className='products__list'>
            <span><h1>Company</h1></span>
            <ul>
              <li>About us</li>
              <li>Terms of use</li>
              <li>Privacy Policy
              </li>
              <li>Community Rules</li>
              <li>Disclaimer</li>
              <li>Methodology</li>
              <li>Careers</li>

            </ul>
          </div>

          <div className='products__list'>
            <span><h1>Support</h1></span>
            <ul>
              <li>Contact Support</li>
              <li>FAQ</li>
              <li>Glossary</li>

            </ul>




          </div>

          <div className='products__list'>
            <span><h1>Socials</h1></span>
            <ul>
              <li>Facebook</li>
              <li>Twitter</li>
              <li>Telegram
              </li>
              <li>Instagram</li>
              <li>Interactive Chat</li>

            </ul>
        
          </div>
        </div>

      </div>

      <div className='copyrights'>
      <h3>© {year} CoinTracker. All Rights Reserved</h3>
      <h3>Made With Love By Nelson ❤️</h3>
        
      </div>
    </section>

  )
}

export default Footer