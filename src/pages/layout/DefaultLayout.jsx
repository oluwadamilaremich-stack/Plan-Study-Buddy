import React from 'react'
import Footer from '../../components/Footer'
import Nav from '../../components/Nav'
import { Outlet } from 'react-router'

const DefaultLayout = () => {
  return (
    <div>
      <Nav />
        <Outlet />
      <Footer />
    </div>
  )
}

export default DefaultLayout
