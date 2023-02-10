import styled from "@emotion/styled";

const Toggle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 1.5rem;
  width: 1.5rem;
  background: #13273f;
  border: none;
  margin: 0;
  padding: 0.75rem;
  box-sizing: content-box;
  border-radius: 100%;
  position: absolute;
  top: 10px;
  right: 10px;

  &:hover {
    cursor: pointer;
  }
`;

const Bar = styled.div<{isOpen?: boolean}>`
  height: 4px;
  width: 100%;
  background-color: #fffaf3;
  z-index: 3;
  transition: all 250ms ease-in-out;

  ${props => props.isOpen && `
    &:nth-of-type(1) {
      transition: all 100ms ease-in-out;
      transform: rotate(45deg);
      transform-origin: top left;
      width: 30px;
    }
  
    &:nth-of-type(2) {
      transition: all 100ms ease-in-out;
      transform-origin: center;
      width: 0;
    }
  
    &:nth-of-type(3) {
      transition: all 100ms ease-in-out;
      transform: rotate(-45deg);
      transform-origin: bottom left;
      width: 30px;
    }
  `}
`

const OpenCloseIcon = ({ isOpen, toggleFunc }: { isOpen: boolean, toggleFunc: (arg0: boolean) => void }) => {
  return (
    <Toggle onClick={() => toggleFunc(!isOpen)}>
      <Bar isOpen={isOpen} />
      <Bar isOpen={isOpen} />
      <Bar isOpen={isOpen} />
    </Toggle>
  );
}

export default OpenCloseIcon;