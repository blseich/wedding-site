import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { headerFont, subHeaderFont, textFont } from '../../styles/fonts';
import { Swiper, SwiperSlide } from 'swiper/react';
import groomsmen from './groomsmen';
import {
  NextButton,
  PrevButton,
  IconSelectors,
} from './swiper-controls';

const Name = styled.div`
  ${headerFont}
  color: #13273f;
  font-size: 1.5rem;
  letter-spacing: .25em;
  padding: 0 .5rem;
  text-align: right;
`;

const Role = styled.div`
  ${subHeaderFont}
  font-size: 1rem;
  padding: 0 .5rem;
  color: #13273f;
  text-align: right;
`;


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
      <Swiper noSwiping direction="vertical" css={css`height: 100%; flex-grow: 1; display: flex; align-items: center; & .swiper-slide {flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem; padding: 0 .5rem;} & .swiper-wrapper { order: 1;}`}>
          <div css={css`width: 75px; height: 75%; border-right: 2px solid #13273f; width: 75px; height: 75%; border-right: 2px solid #13273f;`}>
            <IconSelectors group={groomsmen} />
          </div>
          {groomsmen.map((groomsman) => (
            <SwiperSlide className={'swiper-no-swiping'} key={`groomsman_${groomsman.first}`} >
              <img css={css`align-self: flex-start;`} src={groomsman.img} />
              <div 
                css={css`
                  ${textFont}
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
          <PrevButton />
          <NextButton />
      </Swiper>
      <button
        css={css`
          height: 150px;
          width: 2rem;
          background: #13273f;
          color: #fffaf3;
          border: none;
          border-radius: 1rem 0 0 1rem;
          ${textFont}
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