import styled from '@emotion/styled';
import { Raleway } from '@next/font/google';

const textFont = Raleway({
  weight: "400",
  subsets: ['latin']
});

export const Checkbox = styled.input`
  &[type="checkbox"] {
    appearance: none;
    border: 2px solid #13273f;
    border-radius: 4px;
    height: 1.25rem;
    width: 1.25rem;
    display: grid;
    place-items: center;
    background: white;
    
    &:checked {
      background-color: #13273f;
    
      &::after {
        content: '\2714';
        color: #fffaf3;
      }
    }
    
  }
  `;
  
      // // &::before {
      // //   content: "";
      // //   width: 0.75em;
      // //   height: 0.75em;
      // //   border-radius: 50%;
      // //   transform: scale(0);
      // //   transition: 120ms transform ease-in-out;
      // //   box-shadow: inset 1rem 1rem #13273f;
      // // }
      
      // &:checked::before {
      //   transform: scale(1);
      // }

export const RadioButtonLabel = styled.label`
  font-family: ${textFont.style.fontFamily};
  font-size: 1.5rem;
  color: #13273f;
`;
