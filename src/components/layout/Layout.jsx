import React from 'react'
import Header from './Header'

const Layout = ({children}) => {
  return (
    <div className="max-w-screen-lg mx-auto">
        <Header />
        <main>
          {children}
        </main>
    </div>
  )
}


export default Layout;