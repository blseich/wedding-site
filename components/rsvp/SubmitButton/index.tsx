import { css, SerializedStyles, keyframes } from "@emotion/react";
import styled from "@emotion/styled";
import { headerFont, textFont } from "../../../styles/fonts";

const circleSize = '2rem'

const SubmitButtonWrapper = styled.div`
  display: inline-block;
  width: 50%;
  height: ${circleSize};

  text-align: center;
  align-self: center;
`;

const SubmitButtonText = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;

  font-size: 1.5rem;

  transition: inherit;
`;

const loadingButtonFadeIn = keyframes`
  0% {
    opacity: 0;
  }
    
  100% {
    opacity: 1;
  }
`;

const loadingButtonRotate = keyframes`
  0% {
    transform: translate(-50%, -50%) rotate(0deg);
  }
    
  100% {
    transform: translate(-50%, -50%) rotate(360deg);
  }
`;

const base = css`
  ${headerFont}
  font-size: 1.5rem;
  display: inline-block;
  width: 100%;
  height: 100%;

  position: relative;
  
  background: #13273f;
  color: #fffaf3;
  
  border: 0;
  border-radius: 24px;
  
  cursor: pointer;
  
  transition: all .33s ease-in-out;
  
  &, &:focus {
    outline: none;
  }
`;

const pending = css`
  &:before {
    content: '';

    position: absolute;
    top: 50%;
    left: 50%;

    display: inline-block;

    // Can't use percentage here as we already show this icon during morph animation
    height: calc(${circleSize} * .7);
    width: calc(${circleSize} * .7);

    border: 3px solid rgba(255, 255, 255, .33);
    border-top-color: #fff;
    border-radius: 50%;

    animation:
      ${loadingButtonFadeIn} .33s ease,
      ${loadingButtonRotate} .66s linear 0s infinite;
  }
`;

const success = css`
     &, &:hover {
       background: #8bc34a;
     }

     &:after {
      content: '';
      position: absolute;
      top: 50%;
      left: 50%;
      display: inline-block;
      height: 25%;
      width: 50%;

      border: 3px solid #fff;
      border-top-width: 0;
      border-right-width: 0;

      transform: translate(-50%, -75%) rotate(-45deg);

      animation: 
        ${loadingButtonFadeIn} .6s ease;
    }
`;

const error = css`
     &, &:hover {
       background: #ff5722;
     }

     &:after {
       content: '';

       position: absolute;
       top: 50%;
       left: 50%;

       display: inline-block;
       height: 65%;
       width: 65%;

       background: 
         linear-gradient(
           to bottom,
           transparent 44%, 
           #fff 44%, 
           #fff 56%,  
           transparent 56%
         ),

         linear-gradient(
           to right,
           transparent 44%, 
           #fff 44%, 
           #fff 56%,  
           transparent 56%
       );

       transform: translate(-50%, -50%) rotate(-45deg);

       animation: ${loadingButtonFadeIn} .6s ease;
`;

const morphed = css`
    width: ${circleSize};
    
    pointer-events: none;
    cursor: default;

    & .text {
      opacity: 0;
    }
`;

const ready = css`
  background: #13273f;
  color: #fffaf3;
`;

const incomplete = css`
    background: #d3d3d3;
    color: #a3a3a3;
`

const styleMap: { [key: string]: SerializedStyles[]} = {
  incomplete: [incomplete],
  ready: [ready],
  pending: [morphed, pending],
  success: [morphed, success],
  error: [morphed, error],
}

const messageFadeIn = css`
  ${textFont}
  padding: 0.5rem 0;
  text-align: center;
  animation:
    ${loadingButtonFadeIn} .6s ease;
`

const SubmitButton = ({ 
  status,
  successMsg,
  errorMsg,
}: {
  status: string,
  successMsg?: string | JSX.Element | null,
  errorMsg?: string | JSX.Element | null,
}) => {
  return (
    <div css={css`display: flex; flex-direction: column; align-items: center;`}>
      <SubmitButtonWrapper>
        <button
          css={[base, ...styleMap[status]]}
          type='submit'
          disabled={status === 'incomplete'}
        >
          <SubmitButtonText className="text">
            SUBMIT
          </SubmitButtonText>
        </button>
      </SubmitButtonWrapper>
      {status === 'success' && <div css={messageFadeIn}>
        {successMsg}
      </div>}
      {status === 'error' && <div css={messageFadeIn}>
        {errorMsg}
      </div>}
    </div>
  );
}

export default SubmitButton;