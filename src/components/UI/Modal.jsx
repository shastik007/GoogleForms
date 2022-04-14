import { Fragment } from 'react'
import classes from './ModalStyle.module.css'
import ReactDOM from 'react-dom'

export const Modal = (props) => {
	const Backdrop = () => {
		return <div onClick={props.cancel} className={classes.backdrop} />
	}

	const ModalOverlay = () => {
		return <ul className={classes.modal}>{props.children}</ul>
	}
	const elem = document.getElementById('modal')
	return (
		<Fragment>
			{ReactDOM.createPortal(<Backdrop />, elem)}
			{ReactDOM.createPortal(
				<ModalOverlay>{props.children}</ModalOverlay>,
				elem,
			)}
		</Fragment>
	)
}
