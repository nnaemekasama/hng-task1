import React from 'react'
import { FaGithub, FaSlack } from 'react-icons/fa'
const Main = () => {

  const links = [
    {
      name: 'Twitter link',
      id: 'twitter',
      link: 'https://twitter.com/nnaemeka_san'
    },
    {
      name: 'Zuri team',
      id: 'btn_zuri',
      link: 'https://training.zuri.team/'
    },
    {
      name: 'Zuri books',
      id: 'books',
      link: 'https://books.zuri.team/'
    },
    {
      name: 'Python books',
      id: 'books_python',
      link: 'https://books.zuri.team/python-for-beginners?ref_id=nnaemeka-san'
    },
    {
      name: 'Background check for coders',
      id: 'pitch',
      link: 'https://background.zuri.team/'
    },
    {
      name: 'Design books',
      id: 'book_design',
      link: 'https://books.zuri.team/design-rules'
    },
  ]
  return (
    <main>
      <div className='container'>
        {links.map((item) => (
          <div key={item.id} className='btn-container'>
            <a href={item.link} id={item.id}>
              <button>{item.name}</button>
            </a>
          </div>
        ))}
      </div>
      <div className='icons'>
        <FaSlack className='icon' />
        <FaGithub className='icon' />
      </div>
    </main>
  )
}

export default Main