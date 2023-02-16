import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleUp, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { Raleway } from "@next/font/google";
import Image from "next/image";

const textFont = Raleway({
  weight: "400",
  subsets: ['latin'],
});

const nextPrevButton = css`
position: absolute;
border: 0;
background: none;
color: #13273f;
z-index: 1;
font-family: ${textFont.style.fontFamily};
display: flex;
flex-direction: column;
align-items: center;
left: 50%;
right: 50%;
padding: 0;
`

const activeIcon = css`
  border: 2px solid #13273f;
  padding: 2px;
  width: 50px;
  height: 50px;
`

const inactiveIcon = css`
  filter: grayscale(100%);
`;

const PrevButton = () => {
const swiper = useSwiper();
const [show, setShow] = useState(!swiper.isBeginning);
swiper.on("slideChange", (newSwiper) => setShow(!newSwiper.isBeginning));
return (
<>

  {
    show && 
    <button css={[nextPrevButton, css`top: 12.5%;`]} onClick={() => swiper.slidePrev()}>
      <FontAwesomeIcon icon={faAngleUp} />
      PREV
    </button>
  }
</>
);
};

const NextButton = () => {
const swiper = useSwiper();
const [show, setShow] = useState(!swiper.isEnd);
swiper.on("slideChange", (newSwiper) => setShow(!newSwiper.isEnd));
return (
  <>
  { show && 
    <button css={[nextPrevButton, css`bottom: 12.5%;`]} onClick={() => swiper.slideNext()}>
      NEXT
      <FontAwesomeIcon icon={faAngleDown} />
    </button>
  } 
  </>
);
};

type Crew = {
  first: string,
  last: string,
  role: string,
  img: string,
  intro: string,
};

const IconSelectors = ({ group }: { group: Crew[]}) => {
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
  <div css={css`display: flex; flex-direction: column; justify-content: space-around; padding: 0 .5rem; height: 100%;`}>
    {group.map((member, i) => (
      <Image 
        key={i} 
        src={member.img}
        height={50}
        width={50}
        alt={`${member.first} profile icon`} 
        css={[activeIndex === i ? activeIcon : inactiveIcon, css`border-radius: 100%; width: 50px; height: 50px;`]}
        onClick={() => swiper.slideTo(i)}/>
    ))}
  </div>
)
}

export {
  NextButton,
  PrevButton,
  IconSelectors,
}