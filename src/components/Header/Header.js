import React from 'react';
import logoImg from '../../star-wars-logo.png';

export default function Header () {
  return(
    <div class='logo_header_container'>
      <img src={logoImg} alt='STAR WARS' />
    </div>
  )
}