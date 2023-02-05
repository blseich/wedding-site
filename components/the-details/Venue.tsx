import { useRef, useEffect } from 'react';
import { Wrapper, Status } from '@googlemaps/react-wrapper';
import Image from 'next/image';
import strongwater_logo from '../../public/strongwater_logo.png';
import strongwater_building from '../../public/strongwater_building.jpg';
import { css } from '@emotion/react';


const MyMapComponent = ({
  center,
  zoom,
}: {
  center: google.maps.LatLngLiteral;
  zoom: number;
}) => {
  const ref = useRef();

  useEffect(() => {
    const map = new window.google.maps.Map(ref.current, {
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
    <div css={css`display: flex;`}>
      <div>
        <a
          href="https://events.strongwatercolumbus.com/"
        >
          <Image 
            src={strongwater_logo.src}
            height={strongwater_logo.height}
            width={strongwater_logo.width}
            alt="Strongwater food and spirit's logo"
          />
        </a>
        <iframe
          width="300"
          height="250"
          style={{border: '0'}}
          src={`https://www.google.com/maps/embed/v1/place?key=${process.env.NEXT_PUBLIC_MAPS_API_KEY}
            &q=strongwater+food+and+spirits,columbus+oh`} allowfullscreen>
        </iframe>
        {/* <Wrapper apiKey='' render={render}>
          <MyMapComponent center={center} zoom={zoom}/>
        </Wrapper> */}
      </div>
      <div>
        Location - We will be saying I do and holding our reception both at Strongwater Food & Spirits.
        Parking - There is a large lot that will be reserved for wedding guests. Overnight parking is allowed.
        Weather - If it&apo;s dry, our ceremony will be held outside in Strongwater&apo;s courtyard area. Rain will likely bring us inside. Please plan attire accordingly.
      </div>
    </div>
  )
}

export default Venue;
