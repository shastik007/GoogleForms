import listIcon from '../assets/icons/list.png'
import multiChoose from '../assets/icons/multi_choose.png'
import selectedCircle from '../assets/icons/selected_circle.png'

export const QustionTypes = [
   {
      answerType: 'date',
      type: 'radio',
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
]
