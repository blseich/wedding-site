import styled from '@emotion/styled';
import { subHeaderFont } from '../../styles/fonts';

export const RadioButton = styled.input`
  &[type="radio"] {
    appearance: none;
    background-color: #fff;
    margin: 0;
    font: inherit;
    color: #13273f;
    width: 1.25em;
    height: 1.25em;
    border: 2px solid #13273f;
    border-radius: 50%;
    display: inline-grid;
    place-items: center;

    &:checked {
      background: #13273f;
      &::before {
        content: "";
        width: 0.5em;
        height: 0.5em;
        border-radius: 50%;
        background: #fffaf3;
      }
    }


  }
`;

export const RadioButtonLabel = styled.label`
  ${subHeaderFont}
  font-size: 1.5rem;
  color: #13273f;
`;
