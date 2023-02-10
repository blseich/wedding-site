import { useRef, useEffect } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Image from 'next/image';
import strongwater_logo from '../../public/strongwater_logo.png';
import strongwater_building from '../../public/strongwater_building.jpg';
import { Playfair_Display_SC, Great_Vibes, Raleway } from '@next/font/google';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot, faHand, faHeart, faMartiniGlass, faMusic, faUtensils } from '@fortawesome/free-solid-svg-icons';


const headerFont = Playfair_Display_SC({
  weight: "400",
  subsets: ['latin']
});

const subHeaderFont = Great_Vibes({
  weight: "400",
  subsets: ['latin']
});

const textFont = Raleway({
  weight: "400",
  subsets: ['latin'],
});

const Venue = () => {

  return (
    <div css={css`display: flex; flex-direction: column; justify-content: center; height: 100%; padding: 0 1rem;`}>
      <div css={css`font-size: 3rem; font-family: ${headerFont.style.fontFamily}; letter-spacing: .5rem;`}>Schedule</div>
      <div css={css`display: grid; grid-template-columns: 1fr 1rem 1fr; grid-template-rows: 1fr 1fr 1fr 1fr 1fr; row-gap: 3rem; column-gap: 1rem; flex-grow: 1; padding: 3rem 0;`}>
        <div css={css`height: 100%; width: .25rem; place-self: center; grid-column: 2; grid-row: 1 / 6; background: #13273f;`}></div>
        <div css={css`grid-column: 1; grid-row: 1; text-align: right;`}>
          <div css={css`font-family: ${subHeaderFont.style.fontFamily}; font-size: 2rem; line-height: 1.5rem;`}>Ceremony</div>
          <div css={css`font-family: ${textFont.style.fontFamily}; font-weight: 700; font-size: 1rem; letter-spacing: .25rem;`}>5:30</div>
        </div>
        <FontAwesomeIcon icon={faHeart} css={css`grid-column: 3; grid-row: 1; color: #13273f; align-self: center; color: #13273f; font-size: 1.5rem;`} />
        <FontAwesomeIcon icon={faCircleDot} css={css`grid-column: 2; grid-row: 1; color: #13273f; place-self: center; background: #fffaf3;`} />
        <div css={css`grid-column: 3; grid-row: 2; text-align: left;`}>
          <div css={css`font-family: ${subHeaderFont.style.fontFamily}; font-size: 2rem; line-height: 1.5rem;`}>Cocktails</div>
          <div css={css`font-family: ${textFont.style.fontFamily}; font-weight: 700; font-size: 1rem; letter-spacing: .25rem;`}>5:50</div>
        </div>
        <FontAwesomeIcon icon={faMartiniGlass} css={css`grid-column: 1; grid-row: 2; color: #13273f; justify-self: right; align-self: center; color: #13273f; font-size: 1.5rem;`} />
        <FontAwesomeIcon icon={faCircleDot} css={css`grid-column: 2; grid-row: 2; color: #13273f; place-self: center; background: #fffaf3;`} />
        <div css={css`grid-column: 1; grid-row: 3; text-align: right;`}>
          <div css={css`font-family: ${subHeaderFont.style.fontFamily}; font-size: 2rem; line-height: 1.5rem;`}>Dinner</div>
          <div css={css`font-family: ${textFont.style.fontFamily}; font-weight: 700; font-size: 1rem; letter-spacing: .25rem;`}>6:30</div>
        </div>
        <FontAwesomeIcon icon={faUtensils} css={css`grid-column: 3; grid-row: 3; color: #13273f; align-self: center; color: #13273f; font-size: 1.5rem;`} />
        <FontAwesomeIcon icon={faCircleDot} css={css`grid-column: 2; grid-row: 3; color: #13273f; place-self: center; background: #fffaf3;`} />
        <div css={css`grid-column: 3; grid-row: 4; text-align: left;`}>
          <div css={css`font-family: ${subHeaderFont.style.fontFamily}; font-size: 2rem; line-height: 1.5rem;`}>Dancing</div>
          <div css={css`font-family: ${textFont.style.fontFamily}; font-weight: 700; font-size: 1rem; letter-spacing: .25rem;`}>7:00</div>
        </div>
        <FontAwesomeIcon icon={faMusic} css={css`grid-column: 1; grid-row: 4; color: #13273f; justify-self: right; align-self: center; color: #13273f; font-size: 1.5rem;`} />
        <FontAwesomeIcon icon={faCircleDot} css={css`grid-column: 2; grid-row: 4; color: #13273f; place-self: center; background: #fffaf3;`} />
        <div css={css`grid-column: 1; grid-row: 5; text-align: right;`}>
          <div css={css`font-family: ${subHeaderFont.style.fontFamily}; font-size: 2rem; line-height: 1.5rem;`}>Send Off</div>
          <div css={css`font-family: ${textFont.style.fontFamily}; font-weight: 700; font-size: 1rem; letter-spacing: .25rem;`}>11:00</div>
        </div>
        <FontAwesomeIcon icon={faHand} css={css`grid-column: 3; grid-row: 5; color: #13273f; align-self: center; color: #13273f; font-size: 1.5rem; transform: rotate(45deg);`} />
        <FontAwesomeIcon icon={faCircleDot} css={css`grid-column: 2; grid-row: 5; color: #13273f; place-self: center; background: #fffaf3;`} />
      </div>
    </div>
  )
}

export default Venue;
