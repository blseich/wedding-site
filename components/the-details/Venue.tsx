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
    <div css={css`display: flex; flex-direction: column; justify-content: center; height: 100%; padding: 0 1rem;`}>
      <div css={css`font-size: 3rem; font-family: ${headerFont.style.fontFamily}; letter-spacing: .5rem;`}>Venue</div>
      <div css={css`display: flex; flex-direction: column; align-items: center; justify-content: space-around; flex-grow: 1; text-align: center;`}>
        <div css={css`display: flex; flex-direction: column;`}>
          <div>Ceremony and Reception to be held at:</div>
          <a
            href="https://events.strongwatercolumbus.com/"
          >
            <Image 
              src={strongwater_logo.src}
              height={100}
              width={strongwater_logo.width}
              alt="Strongwater food and spirits logo"
              css={css`width: auto; margin: .5rem 0;`}
            />
          </a>
        </div>
        <iframe
          width="90%"
          height="275"
          css={css`border: 2px solid #13273f; padding: 2px;`}
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}
            &q=strongwater+food+and+spirits,columbus+oh`}>
        </iframe>
        <div>Parking available in gravel lot across the street from the venue. Overnight parking permitted until 12pm the next day.</div>
      </div>
    </div>
  )
}

export default Venue;
