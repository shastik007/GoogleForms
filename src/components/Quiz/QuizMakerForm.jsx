import React from 'react'
import styled from 'styled-components'
import { Input } from '../UI/Input'
import { BiMove } from 'react-icons/bi'
import { MdOutlineImage } from 'react-icons/md'
import { Select } from '../UI/Select'
import { useState } from 'react'
import { Modal } from '../UI/Modal'
import { QustionTypes } from '../../data/QuestionTypes'
import { TypeItem } from '../UI/TypeItem'
import { QuizAnswerCreater } from './QuizAnswerCreater'
import { AnswerInput } from '../UI/AnswerInput'
import { FooterQuizCreaterForm } from './FooterQuizCreaterForm'
import { useDispatch, useSelector } from 'react-redux'
import { testCreatorActions } from '../../store/testCreatorSlice'
import { useInput } from '../../hooks/useInput'

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
	const [Type, setType] = useState(QustionTypes[0])
	const questionValue = useInput('')
	const toggleModal = (e) => {
		e.preventDefault()
		ToggleModal((prev) => !prev)
		console.log(modal)
	}
	const addType = (obj) => {
		setType(obj)
		ToggleModal((prev) => !prev)
	}
	const createAnswer = () => {
		dispatch(
			testCreatorActions.createAnswer({
				id: information.id,
			}),
		)
	}
	return (
		<StyledQuizMakerForm>
			<header className='header'>
				<BiMove className='MoveIcon' fontSize={22} />
			</header>
			<section className='makers_firs_part'>
				<div className='inputWrapper'>
					<Input
						value={questionValue.value}
						onChange={(e) => questionValue.onChange(e)}
						placeholder='question without title'
						width={100}
						fontsize={14}
					/>
				</div>
				<MdOutlineImage fontSize={25} />
				<Select
					type={Type}
					onClick={toggleModal}
					height={40}
					width={40}
				/>
				{modal && (
					<Modal cancel={toggleModal}>
						{QustionTypes.map((el) => {
							return (
								<TypeItem
									onClick={() => addType(el)}
									key={el.id}
								>
									<img width={17} src={el.icon} alt='' />
									<p>{el.text}</p>
								</TypeItem>
							)
						})}
					</Modal>
				)}
			</section>
			<div className='answerList'>
				{information.answers.length > 0 &&
					information.answers.map((el) => {
						return <AnswerInput qwestionId={information.id} answerId={el.id} icon={Type.icon} key={el.id} />
					})}
				<QuizAnswerCreater onClick={createAnswer} />
			</div>
			<FooterQuizCreaterForm qwestionId={information.id} />
		</StyledQuizMakerForm>
	)
}
