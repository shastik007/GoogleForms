import React from 'react'
import styled from 'styled-components'

const StyledHeaderNavigation = styled.nav`
   ul {
      width: 300px;
      display: flex;
      justify-content: space-around;
      align-items: center;
   }
`

export const HeaderNavigation = () => {
   return (
      <StyledHeaderNavigation>
         <ul>
            <li>eyes</li>
            <li>back</li>
            <li>forward</li>
            <li>send</li>
         </ul>
      </StyledHeaderNavigation>
   )
}
