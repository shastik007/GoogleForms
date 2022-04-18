import { IoIosRadioButtonOff } from 'react-icons/io'
import { ImCheckboxUnchecked } from 'react-icons/im'
import { BsCalendar2Date, BsTelephone } from 'react-icons/bs'
import { BiUserCircle } from 'react-icons/bi'
import { AiOutlineMail } from 'react-icons/ai'
import { FaAddressBook } from 'react-icons/fa'
import listIcon from '../assets/icons/list.png'
import multiChoose from '../assets/icons/multi_choose.png'
import selectedCircle from '../assets/icons/selected_circle.png'
import nameicon from '../assets/icons/name.png'
import emailicon from '../assets/icons/email.png'
import adress from '../assets/icons/adress.png'
import phone from '../assets/icons/phone_icon.png'

export const QustionTypes = [
   {
      type: 'date',
      text: 'date',
      icon: listIcon,
      iconAnswer: <BsCalendar2Date key={Math.random().toString()} size={25} />,
   },
   {
      type: 'checkbox',
      text: 'multiple choose',
      icon: multiChoose,
      iconAnswer: <ImCheckboxUnchecked size={25} />,
   },
   {
      typeAnswer: 'radio',
      type: 'text',
      text: 'choose one',
      icon: selectedCircle,
      iconAnswer: <IoIosRadioButtonOff size={25} />,
   },
   {
      type: 'input',
      text: 'Name',
      icon: nameicon,
      iconAnswer: <BiUserCircle size={25} />,
   },
   {
      type: 'email',
      text: 'Email',
      icon: emailicon,
      iconAnswer: <AiOutlineMail size={25} />,
   },
   {
      type: 'address',
      text: 'address',
      icon: adress,
      iconAnswer: <FaAddressBook size={25} />,
   },
   {
      type: 'number',
      text: 'number',
      icon: phone,
      iconAnswer: <BsTelephone size={25} />,
   },
]
