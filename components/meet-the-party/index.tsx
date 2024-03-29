import { useState, useRef, useEffect } from 'react';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Image from 'next/image';
import { subHeaderFont } from '../../styles/fonts';
import laughing_couple_portrait from '../../public/Maddi&Brandon_Couples-33.jpg';
import laughing_couple_landscape from '../../public/Maddi&Brandon_Couples-35.jpg';
import dress from '../../public/dress.svg';
import suit from '../../public/suit.svg';

import "swiper/css";
import LadiesDrawer from './ladies-drawer';
import GentlemenDrawer from './gentlemen-drawer';

import useOnScreen from '../../hooks/use-on-screen';

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
  ${subHeaderFont}
  display: grid;
  grid-template-rows: 1fr;
  place-items: center;
  height: 100%;
  width: 100%;
  font-size: 3rem;
  color: #fffaf3;
  text-shadow: 1px 1px 2px black;
`

const [open, setOpen] = useState('');
const scrollRef = useRef<HTMLDivElement>(null);
const onScreen = useOnScreen(scrollRef);

useEffect(() => {
  !onScreen && setOpen('');
}, [onScreen])

return (
  <>
    <ParallaxBanner id="crew" style={{height: '100%', width: '100%'}}>
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
      display: flex;
      flex-direction: column;
      justify-content: space-around;
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
          ${subHeaderFont}
          font-size: 3rem;
          color: #fffaf3;
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
          ${subHeaderFont}
          font-size: 3rem;
          color: #fffaf3;
          text-align: left;
        `}>The<br />Gentlemen</div>
        <GentlemenDrawer isOpen={open === 'gentlemen'} onClose={() => setOpen('')} />
      </div>
    </div>
  </>
)
}

export default MeetTheParty;