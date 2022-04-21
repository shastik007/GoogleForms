import React, { useState } from 'react'
import styled from 'styled-components'
import { BiMove } from 'react-icons/bi'
import { MdOutlineImage } from 'react-icons/md'
import { useDispatch } from 'react-redux'
import { Input } from '../UI/Input'
import { Select } from '../UI/Select'
import { Modal } from '../UI/Modal'
import { QustionTypes } from '../../data/QuestionTypes'
import { TypeItem } from '../UI/TypeItem'
import { FooterQuizCreaterForm } from './FooterQuizCreaterForm'
import { testCreatorActions } from '../../store/testCreatorSlice'
import { EmailNameAnswerInput } from './EmailAnswerInput'
import { Answers } from './Answers'

const StyledQuizMakerForm = styled.form`
   .header {
      width: 760px;
      display: flex;
      justify-content: center;
      margin-bottom: 30px;
   }
   .MoveIcon {
      margin-top: 10px;
      cursor: grab;
   }

   .makers_firs_part {
      width: 100%;
      display: flex;
      justify-content: space-around;
      align-items: flex-end;
      margin-bottom: 10px;
   }
   .inputWrapper {
      width: 40%;
   }
   .answerList {
      width: 100%;
   }
`

export const QuizMakerForm = ({ information }) => {
   const dispatch = useDispatch()
   const [modal, ToggleModal] = useState(false)
   const toggleModal = (e) => {
      e.preventDefault()
      ToggleModal((prev) => {
         return !prev
      })
   }
   const addType = (obj) => {
      dispatch(
         testCreatorActions.changeAnswersTyps({
            questionId: information.id,
            type: obj,
         })
      )
      ToggleModal((prev) => {
         return !prev
      })
   }
   const createAnswer = () => {
      dispatch(
         testCreatorActions.createAnswer({
            id: information.id,
         })
      )
   }

   const onChangeQuestionTitle = (e) => {
      dispatch(
         testCreatorActions.changeQuestionValue({
            value: e.target.value,
            questionId: information.id,
         })
      )
   }

   const ModalRendering = React.memo(() => {
      return (
         modal && (
            <Modal cancel={toggleModal}>
               {QustionTypes.map((el) => {
                  return (
                     <TypeItem
                        onClick={() => {
                           return addType(el)
                        }}
                        key={el.text}
                     >
                        <img width={17} src={el.icon} alt="" />
                        <p>{el.text}</p>
                     </TypeItem>
                  )
               })}
            </Modal>
         )
      )
   })

   return (
      <StyledQuizMakerForm>
         <header className="header">
            <BiMove className="MoveIcon" fontSize={22} />
         </header>
         <section className="makers_firs_part">
            <div className="inputWrapper">
               <Input
                  onChange={onChangeQuestionTitle}
                  placeholder="question without title"
                  width={100}
                  fontsize={14}
               />
            </div>
            <MdOutlineImage fontSize={25} />
            <Select
               type={information.type}
               onClick={toggleModal}
               height={40}
               width={40}
            />
            <ModalRendering />
         </section>
         <div className="answerList">
            {information.type.type === 'checkbox' && (
               <Answers
                  type={information.type}
                  information={information}
                  onCreateAnswer={createAnswer}
               />
            )}
            {information.type.type === 'radio' && (
               <Answers
                  type={information.type}
                  information={information}
                  onCreateAnswer={createAnswer}
               />
            )}
            {information.type.type === 'date' && (
               <Answers
                  type={information.type}
                  information={information}
                  onCreateAnswer={createAnswer}
               />
            )}
            {information.type.type === 'email' && (
               <EmailNameAnswerInput text={information.type.text} />
            )}
            {information.type.type === 'name' && (
               <EmailNameAnswerInput text={information.type.text} />
            )}
         </div>
         <FooterQuizCreaterForm
            importance={information.important}
            qwestionId={information.id}
         />
      </StyledQuizMakerForm>
   )
}
