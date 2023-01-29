import Image from 'next/image';
import lifes_better_when_were_together from '../../public/lifes_better_when_were_together.svg';
import fitz from '../../public/fitzgerald_halloween.jpg';
import bella from '../../public/bella.jpg';

import { css } from '@emotion/react';

const petPicStyles = css`
  flex-grow: 1;
  max-width: 20vw;
  height: auto;
  border-radius: 100%;
  margin: 0 5%;
  border: 2px solid #fffaf3;
  padding: 2px;
`

const LiveSection = () => (
  <>
    <Image
      css={css`
        width: 100%;
        height: auto;
      `}
      src={lifes_better_when_were_together.src}
      height={lifes_better_when_were_together.height}
      width={lifes_better_when_were_together.width}
      alt={'how we became us'}
    />
    <div>
      Brandon and Maddi currently live in Hilliard, Ohio with the best worst decision ever made -- our 110lb Rottwieler, Fitzgerald -- and the came-with-her-but-is-slowly-growing-on-him furry ball of teeth and claws, Isabella the Siamese.
    </div>
    <div
      css={css`
        display: flex;
        justify-content: center;
        gap: 2rem;
      `}
    >
      <Image
        css={petPicStyles} 
        src={fitz.src}
        width={fitz.width}
        height={fitz.height}
        alt={'our dog fitzgerald looking stinking handsome in a halloween bandana'}
      />
      <Image
        css={petPicStyles} 
        src={bella.src}
        width={bella.width}
        height={bella.height}
        alt={'our cat bella looking majestic'}
      />

    </div>
    <div>
      When they aren&apos;t being bossed around by their four-legged task masters, Maddi and Brandon enjoy listening to True Crime podcasts, binge watching family dramas, &quot;just browsing&quot; at Target, milling about at Crooked Can Brewing, chasing Taco Trucks, kayaking and hiking around Columbus, and staring longingly into each others&apos; eyes.
    </div>
  </>
);

export default LiveSection;