import React from 'react';
import './Header.css'
import logoImg from '../../star-wars-logo.png';

export default function Header () {
  return(
    <div className='logo_header_container'>
      <img src={logoImg} alt='STAR WARS' />
    </div>
  )
}