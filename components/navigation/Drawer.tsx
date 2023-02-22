import { css } from "@emotion/react";
import Link from "next/link";
import { headerFont } from "../../styles/fonts";


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
      ${isOpen ? 'top: 2rem' : 'top: -28rem'};
      
      & a {
        ${headerFont}
        color: #fffaf3;
        letter-spacing: .5rem;
        text-decoration: none;
        font-size: 1.5rem;
        padding: 2rem 0;
      }

      & #rsvp {
        background: #fffaf3;
        width: 75%;
        margin: 2rem;
        padding: 0;
        color: #13273f;
        border-radius: 6px;
        height: 3rem;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
      }

    `}>
      <Link href="/#story" onClick={onNavigate}>The Story</Link>
      <Link href="/#crew" onClick={onNavigate}>The Crew</Link>
      <Link href="/#details" onClick={onNavigate}>The Details</Link>
      <Link href="/#registry" onClick={onNavigate}>The Registry</Link>
      {/* <Link href="/rsvp" onClick={onNavigate} id="rsvp">RSVP</Link> */}
    </div>
  )

};

export default Drawer;