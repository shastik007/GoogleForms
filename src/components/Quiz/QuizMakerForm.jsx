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
import { QuizAnswerCreater } from './QuizAnswerCreater'
import { AnswerInput } from '../UI/AnswerInput'
import { FooterQuizCreaterForm } from './FooterQuizCreaterForm'
import { testCreatorActions } from '../../store/testCreatorSlice'

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
   const [type, setType] = useState(QustionTypes[0])
   const toggleModal = (e) => {
      e.preventDefault()
      ToggleModal((prev) => {
         return !prev
      })
      console.log(modal)
   }
   const addType = (obj) => {
      setType(obj)
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
                        key={el.id}
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

   const AnswerRendering = React.memo(() => {
      return (
         information.answers.length > 0 &&
         information.answers.map((el) => {
            return (
               <AnswerInput
                  type={type.type}
                  answerIcon={type.iconAnswer}
                  qwestionId={information.id}
                  answerId={el.id}
                  key={el.id}
               />
            )
         })
      )
   }, [])

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
            <Select type={type} onClick={toggleModal} height={40} width={40} />

            <ModalRendering />
         </section>
         <div className="answerList">
            <AnswerRendering />
            <QuizAnswerCreater onClick={createAnswer} />
         </div>
         <FooterQuizCreaterForm qwestionId={information.id} />
      </StyledQuizMakerForm>
   )
}
