import Image from 'next/image';
import { Playfair_Display_SC, Great_Vibes, Raleway } from '@next/font/google';
import { css } from '@emotion/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCamera, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import tie from '../../public/tie.svg';

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

const Info = () => {

  return (
    <div css={css`display: flex; flex-direction: column; justify-content: center; height: 100%; padding: 3rem 1rem 0;`}>
      <div css={css`font-size: 3rem; font-family: ${headerFont.style.fontFamily}; letter-spacing: .5rem;`}>Info</div>
      <div css={css`flex-grow: 1; display: flex; flex-direction: column; justify-content: space-evenly; font-family: ${textFont.style.fontFamily};`}>
        <div>
          <div css={css`display: flex; align-items: end; font-size: 2rem; font-family: ${subHeaderFont.style.fontFamily};`}><Image css={css`margin-right: 1rem;`} src={tie.src} height={tie.height} width={tie.width} alt={"tie"}/>Attire</div>
          <div>Semi-Formal attire appropriate. No Jeans or Shorts. Tie optional. Ceremony will be held outside, please plan accordingly.</div>
        </div>
        <div>
          <div css={css`display: flex; align-items: end; justify-content: end; font-size: 2rem; font-family: ${subHeaderFont.style.fontFamily};`}>Photography<FontAwesomeIcon icon={faCamera} css={css`margin-left: 1rem; font-size: 3rem; color: #13273f;`}/></div>
          <div css={css`text-align: right;`}>We know. We&apos;ve seen your socials. You&apos;re a wiz with the phone. But, during our ceremony, we encourage you to be present in the moment. <span css={css`font-weight: 700; text-align: center; font-style: italic;`}>Please no photos or recording during the ceremony.</span> After that... Snap away! Capture and post all your moments, you little influencer you.</div>
        </div>
        <div>
          <div css={css`display: flex; align-items: end; font-size: 2rem; font-family: ${subHeaderFont.style.fontFamily};`}><FontAwesomeIcon icon={faEnvelope} css={css`margin-right: 1rem; font-size: 3rem; color: #13273f;`}/>Invitation Only</div>
            <div>Due to the venue and the nature of the event, we are only able to accommodate those guests formally invited on the wedding invitation. We appreciate your understanding in this regard.</div>
        </div>
      </div>
    </div>
  )
}

export default Info;
