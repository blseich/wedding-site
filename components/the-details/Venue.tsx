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

const MyMapComponent = ({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) => {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current as HTMLDivElement, {
      center,
      zoom,
    });
    new window.google.maps.InfoWindow();
  });

  return <div style={{height: '175px', width: '100%'}} ref={ref} id="map" />;
}

const render = (status: Status) => {
  if (status === Status.FAILURE) return <div>ERROR</div>;
  return <div>LOADING...</div>;
}

const Venue = () => {
  const center = { lat: 39.9573965, lng: -83.0109114 };
  const zoom = 15;

  return (
    <div css={css`display: flex; flex-direction: column; justify-content: center;`}>
      <div css={css`font-size: 3rem; font-family: ${headerFont.style.fontFamily}; letter-spacing: .5rem;`}>Venue</div>
      <div css={css`display: grid; grid-template-columns: auto .5rem 1fr; grid-template-rows: 1fr 1fr 1fr`}>
        <div css={css`font-family: ${subHeaderFont.style.fontFamily}; font-size: 2rem; grid-column: 1;`}>Location</div>
        <div css={css`font-family: ${textFont.style.fontFamily}; padding: .5rem; grid-column: 3;`}>Ceremony and reception to be held at Strongwater Food & Spirits.<br />401 W Town St - Columbus, OH</div>
        <div css={css`font-family: ${subHeaderFont.style.fontFamily}; font-size: 2rem; grid-column: 1; grid-row: 2;`}>Parking</div>
        <div css={css`font-family: ${textFont.style.fontFamily}; padding: .5rem; grid-column: 3; grid-row: 2;`}>There is a large gravel lot across the street from the venue reserved for Wedding guests. Overnight parking is allowed.</div>
        <div css={css`font-family: ${subHeaderFont.style.fontFamily}; font-size: 2rem; grid-column: 1; grid-row: 3;`}>Weather</div>
        <div css={css`font-family: ${textFont.style.fontFamily}; padding: .5rem; grid-column: 3; grid-row: 3;`}>If it&apos;s dry, the ceremony will be held outside in Strongwater&apos;s courtyard area. Please plan attire accordingly.</div>
      </div>
      <a
        href="https://events.strongwatercolumbus.com/"
      >
        <Image 
          src={strongwater_logo.src}
          height={50}
          width={strongwater_logo.width}
          alt="Strongwater food and spirit's logo"
          css={css`width: auto; margin: .5rem 0;`}
        />
      </a>
      <iframe
        width="300"
        height="250"
        style={{border: '0', marginLeft: 'auto', marginRight: 'auto'}}
        src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}
          &q=strongwater+food+and+spirits,columbus+oh`} allowFullScreen>
        </iframe>
    </div>
  )
}

export default Venue;
