import React from 'react'
import { Link } from 'react-router-dom'
import { slide as Menu } from 'react-burger-menu'
import '../styles/burger.styles.css'
import avatar from '../assets/img/avatar.png'

export const Burger: React.FC = () => {
  return (
    <Menu className='page-wrap'>
      <img className='avatar' src={avatar} alt='avatar'/>
      <h2>Виктория</h2>
      <p>kiseleva_va@hotmail.com</p>
      <Link className="menu-item" to='/'>
      <a>
        Список постов
      </a>
      </Link>

      <Link className="menu-item" to='aboutMe'>
      <a>
        Обо мне
      </a>
      </Link>

    </Menu>
  )
}
