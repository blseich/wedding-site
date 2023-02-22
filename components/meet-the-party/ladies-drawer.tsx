import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { headerFont, subHeaderFont, textFont } from '../../styles/fonts';
import { Swiper, SwiperSlide } from 'swiper/react';
import bridesmaids from './bridesmaids';
import {
  NextButton,
  PrevButton,
  IconSelectors,
} from './swiper-controls';

const Name = styled.div`
  ${headerFont}
  color: #13273f;
  font-size: 1.5rem;
  grid-column-start: text;
  grid-row-start: 2;
  letter-spacing: .25em;
  padding: 0 .5rem;
`;

const Role = styled.div`
  ${subHeaderFont}
  font-size: 1rem;
  padding: 0 .5rem;
  color: #13273f;
`;

const LadiesDrawer = ({isOpen, onClose}: {isOpen: boolean, onClose: () => void}) => {
  return  (         
    <div
      className={isOpen ? 'open' : ''}
      css={css`
        height: 100%;
        width: 100%;
        z-index: 1;
        top: 0;
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
          ${textFont}
          height: 150px;
          width: 2rem;
          background: #13273f;
          color: #fffaf3;
          border: none;
          border-radius: 0 1rem 1rem 0;
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
      <Swiper noSwiping direction="vertical" css={css`height: 100%; flex-grow: 1; display: flex; align-items: center; & .swiper-slide {flex-grow: 1; display: flex; flex-direction: column; justify-content: center; align-items: center; gap: 1rem; padding: 0 .5rem;}`}>
        {bridesmaids.map(bridesmaid => (
          <SwiperSlide className={'swiper-no-swiping'} key={`bridesmaid_${bridesmaid.first}`} >
            <img css={css`align-self: flex-end;`} src={bridesmaid.img} />
            <div 
              css={css`
              ${textFont}
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
        <PrevButton />
        <NextButton />
        <div css={css`border-left: 2px solid #13273f; width: 75px; height: 75%;`}>
          <IconSelectors group={bridesmaids} />
        </div>
      </Swiper>
  </div>);
}

export default LadiesDrawer;