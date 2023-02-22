import Image from 'next/image';
import strongwater_logo from '../../public/strongwater_logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCar, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { css } from '@emotion/react';
import { headerFont, subHeaderFont, textFont } from '../../styles/fonts';

const Venue = () => {

  return (
    <div css={css`display: flex; flex-direction: column; justify-content: center; height: 100%; padding: 3rem 1rem 0;`}>
      <div css={css`font-size: 3rem; ${headerFont} letter-spacing: .5rem;`}>Venue</div>
      <div css={css`display: flex; flex-direction: column; justify-content: space-around; flex-grow: 1; ${textFont}`}>
        <div css={css`display: flex; flex-direction: column; text-align: right;`}>
          <div css={css`display: flex; align-items: end; justify-content: end; font-size: 2rem; ${subHeaderFont}`}>Location<FontAwesomeIcon icon={faLocationDot} css={css`margin-left: 1rem; font-size: 3rem; color: #13273f;`}/></div>
          Ceremony and Reception to be held at
          <div css={css`display: flex; flex-direction: column; align-items: end; margin-top: 1rem;`}>
            <a
              href="https://events.strongwatercolumbus.com/"
              css={css`width: 50%; margin-right: auto; margin-left: auto;`}
            >
              <Image 
                src={strongwater_logo.src}
                height={100}
                width={strongwater_logo.width}
                alt="Strongwater food and spirits logo"
                css={css`width: 100%; margin: .5rem 0; height: auto;`}
              />
            </a>
            <iframe
              width="100%"
              height="250"
              css={css`border: 2px solid #13273f; padding: 2px;`}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}
                &q=strongwater+food+and+spirits,columbus+oh`}>
            </iframe>
          </div>       
        </div>
        <div>
        <div css={css`display: flex; align-items: end; font-size: 2rem; ${subHeaderFont}`}><FontAwesomeIcon icon={faCar} css={css`margin-right: 1rem; font-size: 3rem; color: #13273f;`}/>Parking</div>
          Parking available in gravel lot across the street from the venue. Overnight parking permitted until 12pm the next day.
        </div>
      </div>
    </div>
  )
}

export default Venue;
