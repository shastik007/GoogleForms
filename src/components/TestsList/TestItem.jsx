import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const StyledTestItem = styled.div`
   width: 640px;
   height: 147px;
   margin: 0 auto;
   border-radius: 10px;
   margin-top: 30px;
   border: 1px solid #dadce0;
   .top_border {
      height: 10px;
      background-color: rgb(103, 58, 183);
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;
   }
   .information {
      display: flex;
      justify-content: space-around;
   }
   .footer {
      display: flex;
      justify-content: end;
   }
   .footer_ {
      width: 400px;
      display: flex;
      justify-content: space-around;
   }
   .footer_ button {
      background-color: #4285f4;
      padding: 7px;
      color: white;
      border-radius: 10px;
      outline: none;
      border: none;
      transition: 0.5s;
   }
   .footer_ button:hover {
      box-shadow: 0 3px 11px rgba(110, 108, 108, 0.2);
   }
`

export const TestItem = ({ title, description, questions, id }) => {
   const navigate = useNavigate()

   const onPassHandler = () => {
      navigate(`/tests/${id}`)
   }

   return (
      <StyledTestItem>
         <div className="top_border" />
         <div className="information">
            <h2>{title}</h2>
            <h4>{questions.length} questions</h4>
            <p>{description}</p>
         </div>
         <div className="footer">
            <div className="footer_">
               <button onClick={onPassHandler} type="button">
                  PASS THE
               </button>
               <button type="button">ANSWERS</button>
               <button type="button">EDIT</button>
            </div>
         </div>
      </StyledTestItem>
   )
}
