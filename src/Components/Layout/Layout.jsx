import React from 'react'
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import Router from '../Router/Router';


const Layout = () => {
  return (
    <div>
      <Navbar />
      <section>
        <Router />
      </section>
      <Footer />
    </div>
  )
}

export default Layout