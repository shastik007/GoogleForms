import React from 'react'
import styled from 'styled-components'
import { MdContentCopy } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'
import { useDispatch } from 'react-redux'
import menu from '../../assets/menu.png'
import { FooterCheckbox } from './FooterCheckbox'
import { testCreatorActions } from '../../store/testCreatorSlice'

const StyledFooterQuizCreaterForm = styled.footer`
   display: flex;
   justify-content: flex-end;
   margin-bottom: 25px;
   align-items: center;
   .middle_border {
      display: inline-block;
      width: 1px;
      height: 20px;
      background-color: black;
      margin: 0 5px;
   }
   .wrapper {
      width: 40%;
      display: flex;
      justify-content: space-around;
      align-items: center;
   }
`

export const FooterQuizCreaterForm = ({ qwestionId, importance }) => {
   const dispatch = useDispatch()
   const copyQwestion = () => {
      dispatch(testCreatorActions.copyQwestion(qwestionId))
   }
   const deleteQwestion = () => {
      dispatch(testCreatorActions.deleteQwestion({ qwestionId }))
   }

   const changeImportance = () => {
      dispatch(testCreatorActions.changeImportanceQuestion(qwestionId))
   }

   return (
      <StyledFooterQuizCreaterForm>
         <div className="wrapper">
            <MdContentCopy onClick={copyQwestion} size={20} />
            <RiDeleteBinLine onClick={deleteQwestion} size={20} />
            <div className="middle_border" />
            <span>mandatory question</span>
            <FooterCheckbox
               changeHandler={changeImportance}
               importance={importance}
            />
            <img width={20} src={menu} alt="" />
         </div>
      </StyledFooterQuizCreaterForm>
   )
}
