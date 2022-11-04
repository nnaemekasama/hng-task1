import React, { useEffect, useState } from 'react'
import { FaGithub, FaSlack } from 'react-icons/fa'
import LG_ICON from '../images/_Avatar share button (1).png'
import SM_ICON from '../images/_Avatar share button.png'
import profile_img from '../images/U4cuWCUR_400x400.jpg'
const Main = () => {
  const [width, setWidth] = useState(window.innerWidth)
  const breakpoint = 800
  
  useEffect(() => {
    const handleWindowResize = () => setWidth(window.innerWidth)
    window.addEventListener('resize', handleWindowResize)
  
    return () => window.removeEventListener('resize', handleWindowResize)
  })


  const links = [
    {
      name: 'Twitter Link',
      id: 'twitter',
      link: 'https://twitter.com/nnaemeka_san'
    },
    {
      name: 'Zuri Team',
      id: 'btn_zuri',
      link: 'https://training.zuri.team/'
    },
    {
      name: 'Zuri Books',
      id: 'books',
      link: 'https://books.zuri.team/'
    },
    {
      name: 'Python Books',
      id: 'book_python',
      link: 'https://books.zuri.team/python-for-beginners?ref_id=nnaemeka-san'
    },
    {
      name: 'Background Check For Coders',
      id: 'pitch',
      link: 'https://background.zuri.team/'
    },
    {
      name: 'Design Books',
      id: 'book_design',
      link: 'https://books.zuri.team/design-rules'
    },
  ]
  return (
    <>
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
    <main>
      <div className='container'>
        {links.map((item) => (
          <div key={item.id} className='btn-container'>
            <a href={item.link} id={item.id}>
              <button>{item.name}</button>
            </a>
          </div>
        ))}
        <a href='/contact' id='contact'>
        <button >Contact me</button>
        </a>
      </div>
      <div className='icons'>
        <a href='hng9.slack.com'>
          <FaSlack className='icon' />
        </a>
        <a href='https://github.com/nnaemekasama'>
          <FaGithub className='icon' />
        </a>
      </div>
    </main>
    </>
  )
}

export default Main