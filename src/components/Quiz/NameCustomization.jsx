import React from 'react'
import styled from 'styled-components'
import Input from '../UI/Input'

const StyledNameCustomization = styled.div`
	width: 768px;
	height: 140px;
	margin: 0 auto;
	background-color: #fff;
	border-radius: 15px;
	.top_border {
		background-color: rgb(103, 58, 183);
		height: 10px;
		border-top-left-radius: 15px;
		border-top-right-radius: 15px;
	}
	form {
		display: flex;
	}
	.right_border {
		width: 7px;
		height: 126px;
		background-color: #4285f4;
		border-bottom-left-radius: 13px;
	}
`

const NameCustomization = () => {
	return (
		<StyledNameCustomization>
			<div className='top_border' />
			<form>
				<div className='right_border' />
				<div>
					<div>
						<Input placeholder='New Form' fontsize={32} />
					</div>
					<div>
						<Input placeholder='description' fontsize={14} />
					</div>
				</div>
			</form>
		</StyledNameCustomization>
	)
}

export default NameCustomization
