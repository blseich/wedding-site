import Image from 'next/image';
import travel_collage from '../../public/travel_collage.jpg';

import { css, keyframes } from '@emotion/react';
import { Great_Vibes } from '@next/font/google';

const subHeaderFont = Great_Vibes({
  weight: "400",
  subsets: ['latin'],
});

const verticalScrollTop = keyframes`
  from { transform: translateY(0%) }
  to { transform: translateY(-100%) }
`
const verticalScrollBottom = keyframes `
  from { transform: translateY(100%) }
  to { transform: translateY(0%) }
`

const LiveSection = () => (
  <>
    <div css={css`color: #fffaf3; font-size: 2.5rem; font-family: ${subHeaderFont.style.fontFamily}; text-align: left;`}>
      Sharing<br /><span css={css`margin-left: 20%;`}>Adventures</span>
    </div>
    <div>
      Brandon and Maddi have always enjoyed getting away and it all started on labor day in 2019. The pair packed up and drove to Washington DC for a weekend away. They&apos;ve traveled every year since on Labor Day to commemorate that first trip. It&apos;s a tradition they look forward to continuing even after they have a new anniversary to celebrate.
    </div>
    <div>
      But that isn&apos;t all the travel they have had the chance to do. Maddi and Brandon are lucky enough to have wonderful family and friends they can join on adventures as well. To the beach, to the lake, or out to the woods, Maddi and Brandon have made so many incredible memories away from home with those that they love.
    </div>
    <div
      css={css`
        width: 100%;
        height: 175px;
        border-radius: 2rem;
        border: 2px solid #fffaf3;
        padding: 2px;
        overflow: hidden;
        position: relative;
      `}
    >
      <Image 
        css={css`
          position: absolute;
          width: 100%;
          height: auto;
          z-index: -1;
          left: 0;
          animation: ${verticalScrollTop} 6s linear infinite;
        `}
        src={travel_collage.src}
        width={travel_collage.width}
        height={travel_collage.height}
        alt={'several different photos of maddi and brandon traveling'}
      /><Image 
      css={css`
        position: absolute;
        width: 100%;
        height: auto;
        z-index: -1;
        left: 0;
        animation: ${verticalScrollBottom} 6s linear infinite;
      `}
      src={travel_collage.src}
      width={travel_collage.width}
      height={travel_collage.height}
      alt={'several different photos of maddi and brandon traveling'}
    />
    </div>
  </>
);

export default LiveSection;

// @media (orientation: portrait) {
//   animation: ${bounceX} 6s linear 0s infinite alternate, ${bounceY} 10.8s linear 0s infinite alternate;
// }
// @media (orientation: landscape) {
//   animation: ${bounceX} 4s linear 0s infinite alternate, ${bounceY} 6.8s linear 0s infinite alternate;
// }