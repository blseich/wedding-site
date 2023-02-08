import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { Playfair_Display_SC, Raleway, Great_Vibes } from '@next/font/google';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import groomsmen from './groomsmen';
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
  font-family: ${headerFont.style.fontFamily};
  font-weight: ${headerFont.style.fontWeight};
  letter-spacing: .25em;
  padding: 0 .5rem;
  text-align: right;
`;

const Role = styled.div`
  font-size: 1rem;
  padding: 0 .5rem;
  color: #13273f;
  font-family: ${subHeaderFont.style.fontFamily};
  font-weight: ${subHeaderFont.style.fontWeight};
  text-align: right;
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
    <div css={css`width: 75px; height: 75%; border-right: 2px solid #13273f; display: flex; flex-direction: column; justify-content: space-around; padding: 0 .5rem; order: 0; & img { border-radius: 100% }`}>
      {(new Array(7)).fill(0).map((sum, i) => (
        <img key={i} src={'https://via.placeholder.com/50'} css={activeIndex === i ? activeIcon : ''} onClick={() => swiper.slideTo(i)}/>
      ))}
    </div>
  )
}

const GentlemenDrawer = ({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) => {
  return  (         
    <div
      className={isOpen ? 'open' : ''}
      css={css`
        height: 100%;
        width: 100%;
        z-index: 1;
        top: 0;
        position: absolute;
        transform: translateX(-100%);
        background: #fffaf3;
        transition: transform .4s ease-in;
        display: flex;
        align-items: center;
        &.open {
          transform: translateX(0);
        }
      `}
    >
      <Swiper direction="vertical" css={css`height: 100%; flex-grow: 1; display: flex; align-items: center; & .swiper-slide {flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem; padding: 0 .5rem;} & .swiper-wrapper { order: 1;}`}>
          <Controls />
          {groomsmen.map((groomsman) => (
            <SwiperSlide key={`groomsman_${groomsman.first}`} >
              <img css={css`align-self: flex-start;`} src={'https://via.placeholder.com/175'} />
              <div 
                css={css`
                  font-style: ${textFont.style.fontFamily}
                  color: #13273f;
                  text-align: center;
                `}
              >
                {groomsman.intro}
              </div>
              <div css={css`align-self: flex-end;`}>
                <Name>{groomsman.first}<br />{groomsman.last}</Name>
                <Role>{groomsman.role}</Role>
              </div>
            </SwiperSlide>
          ))}
      </Swiper>
      <button
        css={css`
          height: 150px;
          width: 2rem;
          background: #13273f;
          color: #fffaf3;
          border: none;
          border-radius: 1rem 0 0 1rem;
          font-family: ${textFont.style.fontFamily};
        `}
        onClick={(e) => { onClose(); e.stopPropagation();}}
      >
        <div css={css`
          transform-origin: 75% 75%;
          transform: rotate(270deg);
          text-align: center;
        `}>
          CLOSE
        </div>
      </button>
  </div>);
}

export default GentlemenDrawer;