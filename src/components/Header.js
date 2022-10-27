import React from 'react'
import LG_ICON from '../images/Icon.png'
import SM_ICON from '../images/_Avatar share button.png'
import profile_img from '../images/U4cuWCUR_400x400.jpg'

const Header = () => {
  return (
    <header className='header'>
      <img alt='' src={SM_ICON} className='sm-header-icon' />
      <img alt='' src={LG_ICON} className='lg-header-icon' />
      <img alt='' src={profile_img} id='profile_img' />
      <h3 id='twitter'>nnaemeka_san</h3>
      <h3 id='slack'>nnaemeka-san</h3>
    </header>
  )
}

export default Header