import React from 'react'
import styled, {css} from "styled-components"

const DonateButton = styled.button`
  background: transparent;
  border-radius: 3px;
  border: 2px solid black;
  margin 0 1em;
  padding 0.25em 1em;

  ${props =>
    props.primary && 
    css`
      background: blue;
      color: white;
    `};
`;

// const DonateButton = () => {
//   return (
//     <div>
//       <button>Click here to donate!</button>
//     </div>
//   )
// }

export default DonateButton; 
