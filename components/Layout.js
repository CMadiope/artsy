import React from 'react'
import Footer from './Footer';
import Nav from './Navbar'

const Layout = ({children}) => {
  return (
    <div className='mx-6 md:max-w-3xl  md:mx-auto '>
      <Nav />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}

export default Layout