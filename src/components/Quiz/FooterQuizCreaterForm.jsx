import React from 'react'
import styled from 'styled-components'
import { MdContentCopy } from 'react-icons/md'
import { RiDeleteBinLine } from 'react-icons/ri'
import menu from '../../assets/menu.png'
import { FooterCheckbox } from './FooterCheckbox'

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

export const FooterQuizCreaterForm = () => {
	return (
		<StyledFooterQuizCreaterForm>
			<div className='wrapper'>
				<MdContentCopy size={20} />
				<RiDeleteBinLine size={20} />
				<div className='middle_border' />
				<span>mandatory question</span>
				<FooterCheckbox />
				<img width={20} src={menu} alt='' />
			</div>
		</StyledFooterQuizCreaterForm>
	)
}
