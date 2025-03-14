import React from 'react'
import Navbar from './Navbar'


function Layout( {children} : {children: React.ReactNode}) {
  return (
    <>
        <Navbar />
        {children}
        <footer>
            footer
        </footer>
    </>
  )
}

export default Layout