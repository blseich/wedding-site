import { css } from "@emotion/react";
import { Playfair_Display_SC } from "@next/font/google";

const headerFont = Playfair_Display_SC({
  weight: "400",
  subsets: ['latin'],
});


const Drawer = ({isOpen, onNavigate }: {isOpen: boolean, onNavigate: () => void}) => {

  return (
    <div css={css`
      position: absolute;
      width: 100%;
      background: #13273f;
      display: flex;
      flex-direction: column;
      align-items: center;
      transition: all 250ms ease-in-out;
      z-index: 2;
      ${isOpen ? 'top: 2rem' : 'top: -21rem'};
      
      & a {
        color: #fffaf3;
        font-family: ${headerFont.style.fontFamily};
        letter-spacing: .5rem;
        text-decoration: none;
        font-size: 1.5rem;
        padding: 2rem 0;
      }

    `}>
      <a href="#story" onClick={onNavigate}>The Story</a>
      <a href="#crew" onClick={onNavigate}>The Crew</a>
      <a href="#details" onClick={onNavigate}>The Details</a>
      <a href="#registry" onClick={onNavigate}>The Registry</a>
    </div>
  )

};

export default Drawer;