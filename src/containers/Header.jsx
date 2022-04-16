import React from 'react'
import styled from 'styled-components'
import forms from '../assets/forms.png'
import { HeaderNavigation } from '../components/Header/HeaderNavigation'

const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  height: 107px;
  img {
    width: 39px;
    height: 39px;
  }
  .logo {
    width: 180px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }
`

export function Header() {
  return (
    <StyledHeader>
      <div className='logo'>
        <img src={forms} alt='' />
        <h4>New Form</h4>
      </div>
      <HeaderNavigation />
    </StyledHeader>
  )
}
