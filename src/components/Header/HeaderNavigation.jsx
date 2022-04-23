import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BsEye } from 'react-icons/bs'
import { IoChevronBackOutline } from 'react-icons/io5'
import { MdOutlineNavigateNext } from 'react-icons/md'
import { Button } from '../UI/Button'
import { testsActions } from '../../store/testSlice'
import { RemoveToLocalStorage } from '../../utils/helpers/helpers'
import { testCreatorActions } from '../../store/testCreatorSlice'

const StyledHeaderNavigation = styled.nav`
   ul {
      list-style: none;
      width: 300px;
      display: flex;
      justify-content: space-around;
      align-items: center;
   }
`

export const HeaderNavigation = () => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const newTest = useSelector((state) => state.testCreator)
   // eslint-disable-next-line consistent-return
   const onSaveHandler = () => {
      if (newTest.questions.length > 1) {
         dispatch(testsActions.addTest(newTest))
         dispatch(testCreatorActions.clearStore())
         RemoveToLocalStorage('testsCreater')
         return navigate('/tests')
      }
   }
   return (
      <StyledHeaderNavigation>
         <ul>
            <li>
               <BsEye />
            </li>
            <li>
               <IoChevronBackOutline />
            </li>
            <li>
               <MdOutlineNavigateNext />
            </li>
            <li>
               <Button onClick={onSaveHandler}>SAVE</Button>
            </li>
         </ul>
      </StyledHeaderNavigation>
   )
}
