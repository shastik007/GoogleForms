import React from 'react'
import styled from 'styled-components'
import { GrFormClose } from 'react-icons/gr'
import { useDispatch, useSelector } from 'react-redux'
import { testCreatorActions } from '../../store/testCreatorSlice'

const StyledAnswerInput = styled.input`
	text-align: center;
	width: ${({ width }) => `${width}px`};
	height: ${({ height }) => `${height}px`};
	font-size: ${({ fontSize }) => `${fontSize}px`};
	outline: none;
	border: none;
	transition: 0.5s;
	&:focus {
		border-bottom: 1px solid #4285f4;
	}
`

const StyledAnswerInputWrapper = styled.div`
	width: 95%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	padding: 0 20px;
	margin-bottom: 15px;
	& img {
		width: 20px;
		height: 20px;
	}
`

export const AnswerInput = ({ icon, type, answerId, qwestionId }) => {
	const dispatch = useDispatch()
	const changeInput = (e) => {
		dispatch(
			testCreatorActions.changeAnswerValue({
				qwestionId,
				answerId,
				value: e.target.value,
			}),
		)
	}
	const deleteAnswer = () => {
		dispatch(
			testCreatorActions.deleteAnswer({
				qwestionId,
				answerId,
			}),
		)
	}
	return (
		<StyledAnswerInputWrapper>
			<div>
				<img src={icon} alt='' />
				<StyledAnswerInput
					onChange={changeInput}
					fontSize={16}
					height={30}
					width={600}
					type={type}
				/>
			</div>
			<GrFormClose onClick={deleteAnswer} />
		</StyledAnswerInputWrapper>
	)
}
