import { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Image from 'next/image';
import { Great_Vibes } from '@next/font/google';
import laughing_couple_portrait from '../../public/Maddi&Brandon_Couples-33.jpg';
import laughing_couple_landscape from '../../public/Maddi&Brandon_Couples-35.jpg';
// import the_ladies from '../../public/the_ladies.svg';
import dress from '../../public/dress.svg';
import suit from '../../public/suit.svg';
import flowers from '../../public/flowers.svg';
import rings from '../../public/rings.svg';
import the_gentlemen from '../../public/the_gentlemen.svg';
import the_little_ones from '../../public/the_little_ones.svg';
import our_story from '../../public/Our_Story.svg';

import "swiper/css";
import "swiper/css/navigation";
import LadiesDrawer from './ladies-drawer';
import GentlemenDrawer from './gentlemen-drawer';
import LittleOnesDrawer from './little-ones-drawer';

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

const subHeaderFont = Great_Vibes({
  weight: "400",
  subsets: ['latin']
});

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
  height: 100%;
  width: 100%;
  font-family: ${subHeaderFont.style.fontFamily};
  font-size: 3rem;
  color: #fffaf3;
  text-shadow: 1px 1px 2px black;
`

const [open, setOpen] = useState('');
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
        The Crew
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
        onClick={() => {setOpen('ladies'); scrollRef.current?.scrollIntoView(); }}
        css={css`
          width: 100%;
          height: 33%;
          color: #13273f;
          display: flex;
          justify-content: center;
          align-items: center;
        `}>
        <div css={css`
          font-size: 3rem;
          color: #fffaf3;
          font-family: ${subHeaderFont.style.fontFamily};
          text-align: right;
        `}><span>The</span><br />Ladies</div>
        <Image 
          src={dress.src}
          width={128}
          height={128}
          alt={"dress"}
        />
        <div css={css`
          height: 8rem;
          width: 2px;
          background: #fffaf3;
        `}/>
        <LadiesDrawer isOpen={open === 'ladies'} onClose={() => setOpen('')} />
      </div>
      <div
        onClick={() => {setOpen('gentlemen'); scrollRef.current?.scrollIntoView(); }}
        css={css`
        width: 100%;
        height: 33%;
        display: flex;
        justify-content: center;
        align-items: center;
      `}>
        <div css={css`
          height: 8rem;
          width: 2px;
          background: #fffaf3;
        `}/>
        <Image 
          src={suit.src}
          width={128}
          height={128}
          alt={"suit"}
        />
       <div css={css`
          font-size: 3rem;
          color: #fffaf3;
          font-family: ${subHeaderFont.style.fontFamily};
          text-align: left;
        `}>The<br />Gentlemen</div>
        
        
      </div>
      <GentlemenDrawer isOpen={open === 'gentlemen'} onClose={() => setOpen('')} />
      <div
        onClick={() => {setOpen('littleOnes'); scrollRef.current?.scrollIntoView();}} 
        css={css`
          width: 100%;
          height: 33%;
          display: flex;
          justify-content: center;
          align-items: center;
      `}>
        <div css={css`
          border-bottom: 2px solid #fffaf3;
          padding-bottom: 0.5rem;
          display: flex;
          align-items: center;
          justify-content: center;
        `}>
          <Image css={css`width: auto;`} 
            src={flowers.src}
            height={96}
            width={flowers.width}
            alt={"flowers"}
            />
          <div css={css`
            font-size: 3rem;
            color: #fffaf3;
            font-family: ${subHeaderFont.style.fontFamily};
            text-align: center;
            `}>
            The<br /> Little Ones
          </div>
          <Image css={css`width: auto;`}
            src={rings.src}
            height={96}
            width={rings.width}
            alt={"flowers"}
            />
          </div>
          <LittleOnesDrawer isOpen={open === 'littleOnes'} onClose={() => setOpen('')} />
      </div>
    </div>
  </>
)
}

export default MeetTheParty;