import { useRef, useEffect } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Image from 'next/image';
import strongwater_logo from '../../public/strongwater_logo.png';
import strongwater_building from '../../public/strongwater_building.jpg';
import { Playfair_Display_SC, Great_Vibes, Raleway } from '@next/font/google';
import { css } from '@emotion/react';


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
    <div css={css`display: flex; flex-direction: column; justify-content: center; height: 100%;`}>
      <div css={css`font-size: 3rem; font-family: ${headerFont.style.fontFamily}; letter-spacing: .5rem;`}>Venue</div>
      <div css={css`display: flex; flex-direction: column; justify-content: space-around; flex-grow: 1;`}>
        <div>Ceremony and Reception to be held at:</div>
        <div css={css`display: flex; flex-direction: column;`}>
          <a
            href="https://events.strongwatercolumbus.com/"
          >
            <Image 
              src={strongwater_logo.src}
              height={100}
              width={strongwater_logo.width}
              alt="Strongwater food and spirit's logo"
              css={css`width: auto; margin: .5rem 0;`}
            />
          </a>
          <a href="http://maps.google.com/?q=401 W Town St. Columbus, OH">401 W Town St. Columbus, OH</a>
        </div>
        <div>Parking available in gravel lot across the street from the venue. Overnight parking permitted.</div>
        <div>Weather permitting, the ceremony will be held in an outdoor courtyard. Please plan attire accordingly</div>
      </div>
    </div>
  )
}

export default Venue;
