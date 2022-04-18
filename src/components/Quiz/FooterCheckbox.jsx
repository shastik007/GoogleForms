import styled from 'styled-components'

export const FooterCheckbox = (props) => {
   const { onChangeInput } = props

   return (
      <Label>
         <input
            onChange={(e) => onChangeInput(e)}
            className="input"
            type="checkbox"
         />
         <span className="slider" />
      </Label>
   )
}

const Label = styled.label`
   font-size: 10px;
   position: relative;
   display: inline-block;
   width: 3.5em;
   height: 2em;
   .input {
      opacity: 0;
      width: 0;
      height: 0;
   }
   .slider {
      position: absolute;
      cursor: pointer;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: #ccc;
      transition: 0.4s;
      border-radius: 30px;
   }
   .slider::before {
      position: absolute;
      content: '';
      height: 1.4em;
      width: 1.4em;
      border-radius: 20px;
      left: 0.3em;
      bottom: 0.3em;
      background-color: white;
      transition: 0.4s;
   }
   .input:checked + .slider {
      background-color: #2196f3;
   }
   .input:focus + .slider {
      box-shadow: 0 0 1px #2196f3;
   }
   .input:checked + .slider:before {
      transform: translateX(1.5em);
   }
`
