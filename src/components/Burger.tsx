import React from 'react'
import { slide as Menu } from 'react-burger-menu'
import '../styles/styles.css'

export const Burger: React.FC = () => {
  return (
    <Menu className='page-wrap'>
      <a className="menu-item" href="/">
        Список постов
      </a>

      <a className="menu-item" href="/about">
        Обо мне
      </a>

    </Menu>
  )
}
