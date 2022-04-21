import styled from 'styled-components'

export const Button = styled.button`
   outline: none;
   display: inline-block;
   padding: 5px 20px 5px 20px;
   margin: 0 0.3em 0.3em 0;
   border-radius: 0.2em;
   border: none;
   box-sizing: border-box;
   text-decoration: none;
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   color: #ffffff;
   background-color: #3369ff;
   box-shadow: inset 0 -0.6em 1em -0.35em rgba(0, 0, 0, 0.17),
      inset 0 0.6em 2em -0.3em rgba(255, 255, 255, 0.15),
      inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
   text-align: center;
   position: relative;
   &:active {
      box-shadow: inset 0 0.6em 2em -0.3em rgba(0, 0, 0, 0.15),
         inset 0 0 0em 0.05em rgba(255, 255, 255, 0.12);
   }
`
