import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import forms from '../assets/forms.png'
import { HeaderNavigation } from '../components/Header/HeaderNavigation'

const StyledHeader = styled.header`
   margin-bottom: 30px;
   .header {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #fff;
      height: 107px;
   }

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
   .active {
      border-bottom: 4px solid blue;
   }
   .navigation {
      width: 200px;
      margin: 0 auto;
      display: flex;
      justify-content: space-around;
   }
`

function Header() {
   return (
      <StyledHeader>
         <div className="header">
            <div className="logo">
               <img src={forms} alt="" />
               <h4>New Form</h4>
            </div>
            <HeaderNavigation />
         </div>
         <div className="navigation">
            <NavLink style={{ textDecoration: 'none' }} to="/">
               TestCreater
            </NavLink>
            <NavLink style={{ textDecoration: 'none' }} to="/tests">
               Tests
            </NavLink>
         </div>
      </StyledHeader>
   )
}

export default Header
