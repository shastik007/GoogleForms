import React from 'react'

const Option = ({ Icon, text }) => {
   return (
      <option>
         <Icon />
         <p>{text}</p>
      </option>
   )
}

export default Option
