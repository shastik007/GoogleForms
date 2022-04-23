import React from 'react'
import styled from 'styled-components'
import { Input } from '../UI/Input'

const StyledEmailPreviewItem = styled.div`
   box-sizing: border-box;
   width: 41.5%;
   background-color: #ede7f6;
   border-radius: 10px;
   margin: 0 auto;
   border: 1px solid gray;
   margin-bottom: 30px;
   margin-top: 20px;
   .top_border {
      background-color: rgb(103, 58, 183);
      height: 10px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
   }
`

export const EmailPreviewItem = ({ title, description }) => {
   return (
      <StyledEmailPreviewItem>
         <div className="top_border" />
         <h2>{title}</h2>
         <p>{description}</p>
         <hr />
         <div>
            <Input
               background="#ede7f6"
               fontsize={20}
               textAlign="center"
               placeholder="email"
               width={80}
            />
         </div>
      </StyledEmailPreviewItem>
   )
}
