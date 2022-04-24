/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-unstable-nested-components */
import styled from 'styled-components'
import ReactDOM from 'react-dom'
import React from 'react'

const StyledBackDrop = styled.div`
   position: fixed;
   top: 0;
   left: 0;
   width: 100%;
   height: 100vh;
   z-index: 20;
   background-color: transparent;
`

const StyledModal = styled.ul`
   position: fixed;
   border-radius: 5px;
   top: 40vh;
   width: 30%;
   left: 33.3%;
   height: 200px;
   background-color: white;
   padding: 1rem;
   box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
   z-index: 30;
   animation: slide-down 300ms ease-out forwards;
`

export const PreviewModal = ({ children, cancel }) => {
   const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
         cancel()
      }
   }
   const Backdrop = () => {
      return (
         <StyledBackDrop
            role="alert"
            onClick={cancel}
            onKeyDown={handleKeyDown}
         />
      )
   }
   const ModalOverlay = () => {
      return <StyledModal>{children}</StyledModal>
   }

   const elem = document.getElementById('modal')
   return (
      <>
         {ReactDOM.createPortal(<Backdrop />, elem)}
         {ReactDOM.createPortal(<ModalOverlay />, elem)}
      </>
   )
}

export default PreviewModal
