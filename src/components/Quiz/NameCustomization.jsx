import React from 'react'
import styled from 'styled-components'
import { Input } from '../UI/Input'
import { useInput } from '../../hooks/useInput'
import { useSelector, useDispatch } from 'react-redux'
import { testCreatorActions } from '../../store/testCreatorSlice'

export const NameCustomization = () => {
	const state = useSelector((state) => state)
	const dispatch = useDispatch()
	const testTitle = useInput('')
	const testDescription = useInput('')

	const onChangeTitle = (e) => {
		dispatch(testCreatorActions.changeTitle(testTitle.value))
		testTitle.onChange(e)
	}
	const onChangeDescription = (e) => {
		dispatch(testCreatorActions.changeDescription(testDescription.value))
		testDescription.onChange(e)
	}
	return (
		<StyledNameCustomization>
			<div className='top_border' />
			<form>
				<div className='left_border' />
				<div className='inputWrapper'>
					<div>
						<Input
							onChange={onChangeTitle}
							value={testTitle.value}
							maxLength={80}
							placeholder='New Form'
							width={100}
							fontsize={32}
						/>
					</div>
					<div>
						<Input
							onChange={onChangeDescription}
							value={testDescription.value}
							placeholder='description'
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
