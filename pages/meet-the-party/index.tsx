import styled from '@emotion/styled';
import { css } from '@emotion/react';
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

import "swiper/css";
import "swiper/css/navigation";

const swiperOverrides = css`
.swiper-button-next {
  color: #fffaf3;
}
.swiper-button-prev {
  color: #fffaf3;
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
    <div css={css`
      max-width: 650px;
      width: 100%;
      height: 100%;
      margin-right: auto;
      margin-left: auto;
    `}>
      <div css={css`
        width: 100%;
        height: 33%;
        border-bottom: 2px solid #fffaf3;
        color: #13273f;
        display: flex;
        justify-content: center;
      `}>
        <Swiper navigation modules={[Navigation]} css={swiperOverrides}>
          <SwiperSlide>
            <SlideTitleContainer>
              <Image
                css={css`max-height: 50%;`}
                src={the_ladies.src}
                height={the_ladies.height}
                width={the_ladies.width}
                alt={"the ladies text"}
              />
            </SlideTitleContainer>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      <div css={css`
        width: 100%;
        height: 33%;
        border-bottom: 2px solid #fffaf3;
        display: flex;
        justify-content: center;
      `}>
        <Swiper navigation modules={[Navigation]} css={swiperOverrides}>
          <SwiperSlide>
            <SlideTitleContainer>
              <Image
                css={css`max-height: 50%;`}
                src={the_gentlemen.src}
                height={the_gentlemen.height}
                width={the_gentlemen.width}
                alt={"the ladies text"}
              />
            </SlideTitleContainer>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
      <div css={css`
        width: 100%;
        height: 33%;
        display: flex;
        justify-content: center;
      `}>
        <Swiper navigation modules={[Navigation]} css={swiperOverrides}>
          <SwiperSlide>
            <SlideTitleContainer>
              <Image
                css={css`max-height: 50%;`}
                src={the_little_ones.src}
                height={the_little_ones.height}
                width={the_little_ones.width}
                alt={"the ladies text"}
              />
            </SlideTitleContainer>
          </SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
          <SwiperSlide>Slide 5</SwiperSlide>
          <SwiperSlide>Slide 6</SwiperSlide>
          <SwiperSlide>Slide 7</SwiperSlide>
          <SwiperSlide>Slide 8</SwiperSlide>
          <SwiperSlide>Slide 9</SwiperSlide>
        </Swiper>
      </div>
    </div>
  </>
)
}

export default MeetTheParty;