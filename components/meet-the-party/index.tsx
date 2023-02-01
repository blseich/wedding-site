import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Image from 'next/image';
import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import laughing_couple_portrait from '../../public/Maddi&Brandon_Couples-33.jpg';
import laughing_couple_landscape from '../../public/Maddi&Brandon_Couples-35.jpg';
import the_ladies from '../../public/the_ladies.svg';
import the_gentlemen from '../../public/the_gentlemen.svg';
import the_little_ones from '../../public/the_little_ones.svg';
import our_story from '../../public/Our_Story.svg';
import IntroCard from './IntroCard';
import bridesmaids from './bridesmaids';
import groomsmen from './groomsmen';
import littleOnes from './little-ones';

import "swiper/css";
import "swiper/css/navigation";
import { useState, useRef, useEffect } from 'react';
import { Playfair_Display_SC, Raleway, Mr_Dafoe } from '@next/font/google';

const headerFont = Playfair_Display_SC({
  weight: "400",
  subsets: ['latin'],
});

const subHeaderFont = Mr_Dafoe({
  weight: "400",
  subsets: ['latin']
});

const textFont = Raleway({
  weight: "400",
  subsets: ['latin'],
});

const Name = styled.div`
  color: #13273f;
  font-size: 1.5rem;
  grid-column-start: text;
  grid-row-start: 2;
  font-family: ${headerFont.style.fontFamily};
  font-weight: ${headerFont.style.fontWeight};
  letter-spacing: .25em;
  padding: 0 .5rem;
`;

const Role = styled.div`
  font-size: 1rem;
  grid-column-start: text;
  grid-row-start: 3;
  padding: 0 .5rem;
  font-family: ${subHeaderFont.style.fontFamily};
  font-weight: ${subHeaderFont.style.fontWeight};
`;

const swiperOverrides = css`
.swiper-button-next {
  color: #fffaf3;
  &:after {
    font-size: 1rem;
  }
}
.swiper-button-prev {
  color: #fffaf3;
  &:after {
    font-size: 1rem;
  }
}
`;

const MeetTheParty = () => {
  const OurStoryBackground = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  @media (orientation: landscape) {
    background-image: url(${laughing_couple_landscape.src});
    background-size: 125% auto;
  }
  @media (orientation: portrait) {
    background-image: url(${laughing_couple_portrait.src});
    background-size: auto 50%;
  }
`

const Title = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  place-items: center;
  height: 100vh;
  width: 100vw;
`


const SlideTitleContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-contet: center;
  align-items: center;
`

const titleStyles = css`
  height: 33%;
  max-width: calc(100% - 4rem);
`

const slideFromLeft = keyframes`
  from { left: 100% } to { left: 10% }
`;

const [open, setOpen] = useState(false);
const scrollRef = useRef<HTMLDivElement>(null);

useEffect(() => {
  if(open) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'unset'
  }
}, [open])

return (
  <>
    <ParallaxBanner style={{height: '100%', width: '100%'}}>
    <ParallaxBannerLayer speed={-50}>
      <OurStoryBackground />
    </ParallaxBannerLayer>
    <ParallaxBannerLayer>
      <Title>
      <Image 
          width={256}
          height={40}
          style={{width: '16rem', filter: 'drop-shadow(1px 1px 2px black)'}}
          src={our_story.src}
          alt={'say i do'}
        />
      </Title>
    </ParallaxBannerLayer>
    </ParallaxBanner>
    <div
      ref={scrollRef}
      css={css`
      max-width: 650px;
      width: 100%;
      height: 100%;
      margin-right: auto;
      margin-left: auto;
      position: relative;
      overflow: hidden;
    `}>
      <div
        onClick={() => {setOpen(true); scrollRef.current?.scrollIntoView(); }}
        css={css`
          width: 100%;
          height: 33%;
          color: #13273f;
          display: flex;
          justify-content: center;
        `}>
        <Image
            css={titleStyles}
            src={the_ladies.src}
            height={the_ladies.height}
            width={the_ladies.width}
            alt={"the ladies text"}

          />
          <div
            className={open ? 'open' : ''}
            css={css`
              height: 100%;
              width: 100%;
              z-index: 1;
              position: absolute;
              transform: translateX(100%);
              background: #fffaf3;
              transition: transform .4s ease-in;
              display: flex;
              align-items: center;
              &.open {
                transform: translateX(0);
              }
            `}
          >
            <button
            css={css`
              height: 150px;
              width: 2rem;
            `}
            onClick={(e) => { setOpen(false); e.stopPropagation();}}>
              <div css={css`
                transform-origin: 50% 50%;
                transform: rotate(270deg);
              `}>Close</div>
            </button>
            
            <div css={css`height: 100%; flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem; padding: 0 .5rem;`}>
              <img css={css`align-self: flex-end;`} src={'https://via.placeholder.com/175'} />
              <div css={css`
                font-style: ${textFont.style.fontFamily}
                color: #13273f;
                text-align: center;
              `}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam felis eros, posuere in lectus et, dignissim dapibus massa. Aliquam erat volutpat. Sed quis dictum ligula, nec volutpat leo. Curabitur luctus lectus sit amet felis dapibus aliquam. Suspendisse eu aliquet elit. Nulla eu velit mi. Vivamus interdum euismod rhoncus. Nam finibus imperdiet nunc ut laoreet. Morbi et bibendum leo, vitae ornare neque. Morbi justo ante, commodo sit amet aliquet quis, eleifend ut lorem. Vestibulum tristique suscipit leo ut blandit. Duis tempor, ex id sodales viverra, odio nisl aliquam metus, vitae interdum sem ante at magna. Integer ut sem eget purus molestie pulvinar.

Pellentesque a posuere erat. Aliquam vitae dapibus mi. Mauris ac metus et orci consequat dignissim ut sit amet ante. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aenean dignissim imperdiet purus, a faucibus nisi laoreet vitae. Aliquam gravida finibus est vitae gravida. Curabitur augue.
              </div>
              <div css={css`align-self: flex-start;`}>
                <Name>Shelly<br />Ferguson</Name>
                <Role>Matron of Honor - Sister of the Bride</Role>
              </div>
            </div>
            <div css={css`width: 75px; height: 75%; border-left: 2px solid #13273f; display: flex; flex-direction: column; justify-content: space-around; padding: 0 .5rem; & img { border-radius: 100% }`}>
              <img src={'https://via.placeholder.com/50'} />
              <img src={'https://via.placeholder.com/50'} />
              <img src={'https://via.placeholder.com/50'} />
              <img src={'https://via.placeholder.com/50'} />
              <img src={'https://via.placeholder.com/50'} />
              <img src={'https://via.placeholder.com/50'} />
              <img src={'https://via.placeholder.com/50'} />
            </div>
          </div>
        
      </div>
      <div css={css`
        width: 100%;
        height: 33%;
        display: flex;
        justify-content: center;
      `}>
       <Image
          css={titleStyles}
          src={the_gentlemen.src}
          height={the_gentlemen.height}
          width={the_gentlemen.width}
          alt={"the ladies text"}
        />
      </div>
      <div css={css`
        width: 100%;
        height: 33%;
        display: flex;
        justify-content: center;
      `}>
          <Image
            css={titleStyles}
            src={the_little_ones.src}
            height={the_little_ones.height}
            width={the_little_ones.width}
            alt={"the ladies text"}
          />
      </div>
    </div>
  </>
)
}

export default MeetTheParty;