import React, { useEffect, useState } from 'react'
import LG_ICON from '../images/_Avatar share button (1).png'
import SM_ICON from '../images/_Avatar share button.png'
import profile_img from '../images/U4cuWCUR_400x400.jpg'

const Header = () => {
const [width, setWidth] = useState(window.innerWidth)
const breakpoint = 800

useEffect(() => {
  const handleWindowResize = () => setWidth(window.innerWidth)
  window.addEventListener('resize', handleWindowResize)

  return () => window.removeEventListener('resize', handleWindowResize)
})

  return (
    <header className='header'>
      {width <= breakpoint ? (
        <img alt='' src={SM_ICON} className='sm-header-icon' />
      ) : (
        <img alt='' src={LG_ICON} className='lg-header-icon' />
      )}
      

      <img alt='' src={profile_img} id='profile_img' />
      <h3 id='twitter'>nnaemeka_san</h3>
      <h3 id='slack'>nnaemeka-san</h3>
    </header>
  )
}

export default Header