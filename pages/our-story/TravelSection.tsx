import Image from 'next/image';
import sharing_adventures from '../../public/sharing_adventures.svg';
import travel_collage from '../../public/travel_collage.jpg';

import { css, keyframes } from '@emotion/react';

const bounceX = keyframes`
    from { left: 0; } to { left: calc(-${travel_collage.width}px + 100%); }
`;

const bounceY = keyframes`
    from { top: 0; } to { top: calc(-${travel_collage.height}px + 100%); }
`;

const LiveSection = () => (
  <>
    <Image
      css={css`
        width: 70%;
        height: auto;
      `}
      src={sharing_adventures.src}
      height={sharing_adventures.height}
      width={sharing_adventures.width}
      alt={'how we became us'}
    />
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
          z-index: -1;
          @media (orientation: portrait) {
            animation: ${bounceX} 6s linear 0s infinite alternate, ${bounceY} 10.8s linear 0s infinite alternate;
          }
          @media (orientation: landscape) {
            animation: ${bounceX} 4s linear 0s infinite alternate, ${bounceY} 6.8s linear 0s infinite alternate;
          }
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