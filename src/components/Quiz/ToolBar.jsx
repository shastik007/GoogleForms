import styled from 'styled-components'
import {
  AiOutlinePlusCircle,
  AiOutlineImport,
  AiOutlineVideoCameraAdd,
} from 'react-icons/ai'
import { BiText } from 'react-icons/bi'
import { BsCardImage } from 'react-icons/bs'
import { GrChapterAdd } from 'react-icons/gr'
import { useDispatch } from 'react-redux'
import { testCreatorActions } from '../../store/testCreatorSlice'

const StyledToolBar = styled.div`
  position: fixed;
  left: 165vh;
  bottom: 30vh;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  width: 50px;
  height: 300px;
  border-radius: 10px;
  background-color: white;
`

export function ToolBar() {
  const dispatch = useDispatch()
  const addQwestionHandler = () => {
    dispatch(testCreatorActions.addQwestion())
  }
  return (
    <StyledToolBar>
      <AiOutlinePlusCircle
        onClick={addQwestionHandler}
        size={26}
        display='block'
        cursor='pointer'
      />
      <AiOutlineImport size={26} display='block' cursor='pointer' />
      <BiText size={26} display='block' cursor='pointer' />
      <BsCardImage size={26} display='block' cursor='pointer' />
      <AiOutlineVideoCameraAdd size={26} display='block' cursor='pointer' />
      <GrChapterAdd size={26} display='block' cursor='pointer' />
    </StyledToolBar>
  )
}
