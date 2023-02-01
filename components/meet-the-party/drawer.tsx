import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Playfair_Display_SC, Raleway, Mr_Dafoe } from '@next/font/google';
import * as SwiperType from 'swiper';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import bridesmaids from './bridesmaids';
import { useEffect, useState } from 'react';

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
    const callback = (newState) => {
      setActiveIndex(newState.activeIndex);
    };

    swiper.on("slideChange", callback);

    return () => swiper.off("slideChange", callback);
  }, [swiper]);

  return (
    <div css={css`width: 75px; height: 75%; border-left: 2px solid #13273f; display: flex; flex-direction: column; justify-content: space-around; padding: 0 .5rem; & img { border-radius: 100% }`}>
      {(new Array(7)).fill(0).map((sum, i) => (
        <img key={i} src={'https://via.placeholder.com/50'} css={activeIndex === i ? activeIcon : ''} onClick={() => swiper.slideTo(i)}/>
      ))}
    </div>
  )
}

const Drawer = ({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) => {
  return  (         
    <div
      className={isOpen ? 'open' : ''}
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
        onClick={(e) => { onClose(); e.stopPropagation();}}
      >
        <div css={css`
          transform-origin: 50% 50%;
          transform: rotate(270deg);
        `}>
          Close
        </div>
      </button>
      <Swiper direction="vertical" css={css`height: 100%; flex-grow: 1; display: flex; align-items: center; & .swiper-slide {flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem; padding: 0 .5rem;}`}>
          {bridesmaids.map(bridesmaid => (
            <SwiperSlide key={`bridesmaid_${bridesmaid.first}`} >
              <img css={css`align-self: flex-end;`} src={'https://via.placeholder.com/175'} />
              <div 
                css={css`
                  font-style: ${textFont.style.fontFamily}
                  color: #13273f;
                  text-align: center;
                `}
              >
                {bridesmaid.intro}
              </div>
              <div css={css`align-self: flex-start;`}>
                <Name>{bridesmaid.first}<br />{bridesmaid.last}</Name>
                <Role>{bridesmaid.role}</Role>
              </div>
            </SwiperSlide>
          ))}
        <Controls />
      </Swiper>
  </div>);
}

export default Drawer;