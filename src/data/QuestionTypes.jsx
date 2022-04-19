import listIcon from '../assets/icons/list.png'
import multiChoose from '../assets/icons/multi_choose.png'
import selectedCircle from '../assets/icons/selected_circle.png'
import nameicon from '../assets/icons/name.png'
import emailicon from '../assets/icons/email.png'

export const QustionTypes = [
   {
      answerType: 'date',
      type: 'date',
      text: 'date',
      icon: listIcon,
   },
   {
      answerType: 'text',
      type: 'checkbox',
      text: 'multiple choose',
      icon: multiChoose,
   },
   {
      answerType: 'text',
      type: 'radio',
      text: 'choose one',
      icon: selectedCircle,
   },
   {
      type: 'name',
      text: 'Name',
      icon: nameicon,
   },
   {
      type: 'email',
      text: 'Email',
      icon: emailicon,
   },
]
