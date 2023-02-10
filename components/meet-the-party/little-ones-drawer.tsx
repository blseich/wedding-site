import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Playfair_Display_SC, Raleway, Great_Vibes } from '@next/font/google';
import * as SwiperType from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import littleOnes from './little-ones';
import { useEffect, useState } from 'react';

const headerFont = Playfair_Display_SC({
  weight: "400",
  subsets: ['latin'],
});

const subHeaderFont = Great_Vibes({
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
  color: #13273f;
  padding: 0 .5rem;
  font-family: ${subHeaderFont.style.fontFamily};
  font-weight: ${subHeaderFont.style.fontWeight};
  text-align: center;
`;

const activeIcon = css`
  border: 2px solid #13273f;
  padding: 2px;
  width: 50px;
  height: 50px;
`

const Controls = () => {
  const swiper = useSwiper();

  const [activeIndex, setActiveIndex] = useState(swiper.activeIndex);

  useEffect(() => {
    const callback = (newState: {activeIndex: number}) => {
      setActiveIndex(newState.activeIndex);
    };

    swiper.on("slideChange", callback);

    return () => swiper.off("slideChange", callback);
  }, [swiper]);

  return (
    <div css={css`width: 75%; height: 75px; border-top: 2px solid #13273f; display: flex; justify-content: space-around; padding: .5rem 0; & img { border-radius: 100% }`}>
      {(new Array(4)).fill(0).map((sum, i) => (
        <img key={i} src={'https://via.placeholder.com/50'} css={activeIndex === i ? activeIcon : ''} onClick={() => swiper.slideTo(i)}/>
      ))}
    </div>
  )
}

const LittleOnesDrawer = ({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) => {
  return  (         
    <div
      className={isOpen ? 'open' : ''}
      css={css`
        height: 100%;
        width: 100%;
        z-index: 1;
        top: 0;
        position: absolute;
        transform: translateY(100%);
        background: #fffaf3;
        transition: transform .4s ease-in;
        display: flex;
        flex-direction: column;
        align-items: center;
        &.open {
          transform: translateY(0);
        }
      `}
    >
      <button
        css={css`
          height: 2rem;
          width: 150px;
          background: #13273f;
          color: #fffaf3;
          border: none;
          border-radius: 0 0 1rem 1rem;
          font-family: ${textFont.style.fontFamily};
        `}
        onClick={(e) => { onClose(); e.stopPropagation();}}
      >
        <div css={css`
          text-align: center;
        `}>
          CLOSE
        </div>
      </button>
      <Swiper noSwiping css={css`width: 100%; flex-grow: 1; display: flex; flex-direction: column; align-items: center; & .swiper-slide {flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem; padding: 0 .5rem;}`}>
          {littleOnes.map(littleOne => (
            <SwiperSlide className='swiper-no-swiping' key={`littleOne_${littleOne.first}`} >
              <img src={'https://via.placeholder.com/175'} />
              <div 
                css={css`
                  font-style: ${textFont.style.fontFamily}
                  color: #13273f;
                  text-align: center;
                `}
              >
                {littleOne.intro}
              </div>
              <div>
                <Name>{littleOne.first} {littleOne.last}</Name>
                <Role>{littleOne.role}</Role>
              </div>
            </SwiperSlide>
          ))}
        <Controls />
      </Swiper>
  </div>);
}

export default LittleOnesDrawer;