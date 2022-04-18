import React, { Fragment } from 'react'
import ReactDOM from 'react-dom'
import classes from './ModalStyle.module.css'

export const Modal = ({ children, cancel }) => {
   console.log('modal is working')
   const handleKeyDown = (e) => {
      if (e.keyCode === 13) {
         cancel()
      }
   }
   // eslint-disable-next-line react/no-unstable-nested-components
   const Backdrop = () => {
      return (
         // eslint-disable-next-line jsx-a11y/click-events-have-key-events
         // eslint-disable-next-line jsx-a11y/no-noninteractive-element-interactions
         <div
            role="alert"
            onClick={cancel}
            onKeyDown={handleKeyDown}
            className={classes.backdrop}
         />
      )
   }

   // eslint-disable-next-line react/no-unstable-nested-components
   const ModalOverlay = () => {
      return <ul className={classes.modal}>{children}</ul>
   }

   const elem = document.getElementById('modal')
   return (
      <>
         {ReactDOM.createPortal(<Backdrop />, elem)}
         {ReactDOM.createPortal(<ModalOverlay />, elem)}
      </>
   )
}
