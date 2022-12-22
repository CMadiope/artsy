import React from 'react'
import Footer from './Footer';
import Nav from './Navbar'

const Layout = ({children}) => {
  return (
    <div className='py-8 px-10 md:p-14 lg:px-14 xl:py-6 xl:px-14 overflow-hidden'>
      <Nav />
      <main>{children}</main>
      <Footer/>
    </div>
  );
}

export default Layout