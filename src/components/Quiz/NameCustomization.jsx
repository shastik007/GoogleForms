import React from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { Input } from '../UI/Input'
import { testCreatorActions } from '../../store/testCreatorSlice'

export const NameCustomization = () => {
   const { title, description } = useSelector((state) => state.testCreator)
   const dispatch = useDispatch()

   const onChangeTitle = (e) => {
      dispatch(testCreatorActions.changeTitle(e.target.value))
   }
   const onChangeDescription = (e) => {
      dispatch(testCreatorActions.changeDescription(e.target.value))
   }
   return (
      <StyledNameCustomization>
         <div className="top_border" />
         <form>
            <div className="left_border" />
            <div className="inputWrapper">
               <div>
                  <Input
                     value={title}
                     onChange={onChangeTitle}
                     maxLength={80}
                     placeholder="New Form"
                     width={100}
                     fontsize={32}
                  />
               </div>
               <div>
                  <Input
                     value={description}
                     onChange={onChangeDescription}
                     placeholder="description"
                     width={100}
                     fontsize={14}
                  />
               </div>
            </div>
         </form>
      </StyledNameCustomization>
   )
}

const StyledNameCustomization = styled.div`
   width: 768px;
   height: 140px;
   margin: 0 auto;
   background-color: #fff;
   border-radius: 15px;
   margin-bottom: 10px;
   border: 2px solid rgba(0, 0, 0, 0.12);
   .top_border {
      background-color: rgb(103, 58, 183);
      height: 10px;
      border-top-left-radius: 15px;
      border-top-right-radius: 15px;
   }
   form {
      display: flex;
   }
   .left_border {
      width: 7px;
      height: 126px;
      background-color: #4285f4;
      border-bottom-left-radius: 13px;
   }
   .inputWrapper {
      padding: 10px;
   }
   .inputWrapper div {
      width: 730px;
      margin-bottom: 20px;
   }
`
