import listIcon from '../assets/icons/list.png'
import multi_choose from '../assets/icons/multi_choose.png'
import selected_circle from '../assets/icons/selected_circle.png'
import nameicon from '../assets/icons/name.png'
import emailicon from '../assets/icons/email.png'
import adress from '../assets/icons/adress.png'
import phone from '../assets/icons/phone_icon.png'

export const QustionTypes = [
	{
		type: 'date',
		text: 'date',
		icon: listIcon,
	},
	{
		type: 'checkbox',
		text: 'multiple choose',
		icon: multi_choose,
	},
	{
		type: 'radio',
		text: 'choose one',
		icon: selected_circle,
	},
	{
		type: 'input',
		text: 'Name',
		icon: nameicon,
	},
	{
		type: 'email',
		text: 'Email',
		icon: emailicon,
	},
	{
		type: 'address',
		text: 'address',
		icon: adress,
	},
	{
		type: 'number',
		text: 'number',
		icon: phone,
	},
]
