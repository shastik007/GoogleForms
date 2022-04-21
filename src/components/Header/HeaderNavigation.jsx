import React from 'react'
import styled from 'styled-components'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { BsEye } from 'react-icons/bs'
import { IoChevronBackOutline } from 'react-icons/io5'
import { MdOutlineNavigateNext } from 'react-icons/md'
import { Button } from '../UI/Button'
import { testsActions } from '../../store/testSlice'

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
   const onSaveHandler = () => {
      dispatch(testsActions.addTest(newTest))
      return navigate('/preview')
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
