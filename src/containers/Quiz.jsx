import React from 'react'
import styled from 'styled-components'
import NameCustomization from '../components/Quiz/NameCustomization'

const StyledQuiz = styled.div`
	background-color: #ede7f6;
	padding-top: 15px;
	height: 600px;
`

const Quiz = () => {
	return (
		<StyledQuiz>
			<NameCustomization />
		</StyledQuiz>
	)
}

export default Quiz
