import React from 'react'
// import Footer from './footer'
import DefaultLayoutStyled from './styles'


const Layout = (props) => {
  const {
    children
  } = props
  return (
    <DefaultLayoutStyled>
      {
        children
      }
    </DefaultLayoutStyled>
  )
}

export default Layout
