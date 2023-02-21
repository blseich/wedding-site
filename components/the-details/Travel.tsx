import Image from 'next/image';
import { Playfair_Display_SC, Great_Vibes, Raleway } from '@next/font/google';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHotel, faStar } from '@fortawesome/free-solid-svg-icons';
import hofbrauhaus from '../../public/hofbrauhaus.svg';
import highbank from '../../public/highbank.png';
import round2 from '../../public/round2.png';
import woodlands from '../../public/woodlands.webp';

const headerFont = Playfair_Display_SC({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
});

const subHeaderFont = Great_Vibes({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
});

const textFont = Raleway({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
});

const Venue = () => {

  return (
    <div css={css`display: flex; flex-direction: column; justify-content: center; height: 100%; padding: 3rem 1rem 0;`}>
      <div css={css`font-size: 3rem; font-family: ${headerFont.style.fontFamily}; letter-spacing: .5rem;`}>Travel</div>
      <div css={css`flex-grow: 1; display: flex; flex-direction: column; justify-content: space-evenly; font-family: ${textFont.style.fontFamily};`}>
        Joining us from out of town? We&apos;re so happy you can make it!
        <div css={css`display: flex; flex-direction: column;`}>
          <div css={css`display: flex; justify-content: end; align-items: end; font-size: 2rem; font-family: ${subHeaderFont.style.fontFamily};`}>Hotel Block <FontAwesomeIcon icon={faHotel} css={css`font-size: 3rem; color: #13273f; margin-left: 1rem;`}/></div>
          <div css={css`text-align: right;`}><a href="https://www.marriott.com/events/start.mi?id=1668548116381&key=GRP">Courtyard by Marriott Columbus, OH</a><br/>Book by April 13 to secure our group rate</div>
        </div>
        <div css={css`text-align: left;`}>
          <div css={css`display: flex; align-items: end; font-size: 2rem; font-family: ${subHeaderFont.style.fontFamily};`}><FontAwesomeIcon icon={faStar} css={css`font-size: 3rem; color: #13273f; margin-right: 1rem;`}/> Entertainment</div>
          Looking for something to do?<br />Here are a few of our favorite spots in the area.
          <div css={css`display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: 1fr 1fr; place-items: center; row-gap: 1rem;`}>
            <a href="https://www.woodlandsbackyard.com/">
              <Image
                css={css`display: block; width: auto;`}
                src={woodlands.src}
                height={75}
                width={woodlands.width}
                alt={"woodlands backyard logo"}
              />
            </a>
            <a href="https://www.hofbrauhauscolumbus.com/">
              <Image
                css={css`display: block; width: auto;`}
                src={hofbrauhaus.src}
                height={75}
                width={hofbrauhaus.width}
                alt={"hofbrauhaus logo"}
              />
            </a>
            <a href="https://www.highbankco.com/">
              <Image
                css={css`display: block; width: auto; background: #13273f; padding: .5rem;`}
                src={highbank.src}
                height={75}
                width={highbank.width}
                alt={"highbank logo"}
              />
            </a>
            <a href="https://www.cafesround2.com/">
              <Image
                css={css`display: block; width: auto; background: #13273f;`}
                src={round2.src}
                height={75}
                width={round2.width}
                alt={"round2 logo"}
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Venue;
