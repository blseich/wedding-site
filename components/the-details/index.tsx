import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import couple_and_dog_portrait from '../../public/Maddi&Brandon_Couples-5.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faStopwatch, faPlane, faCircleInfo, faXmark } from '@fortawesome/free-solid-svg-icons';
import { useState, useRef, useEffect } from 'react';
import Venue from './Venue';
import Schedule from './Schedule';
import Travel from './Travel';
import Info from './Info';
import useOnScreen from '../../hooks/use-on-screen';
import { headerFont, subHeaderFont } from '../../styles/fonts';

const OurStoryBackground = styled.div`
height: 100%;
width: 100%;
background-position: center;
background-repeat: no-repeat;
@media (orientation: landscape) {
  background-image: url(${couple_and_dog_portrait.src});
  background-size: 125% auto;
}
@media (orientation: portrait) {
  background-image: url(${couple_and_dog_portrait.src});
  background-size: auto 50%;
}
`;

const Title = styled.div`
display: grid;
grid-template-rows: 1fr;
place-items: center;
height: 100%;
width: 100%;
${subHeaderFont}
font-size: 3rem;
color: #fffaf3;
text-shadow: 1px 1px 2px black;
`

const FlipCardLink = styled.div`
height: 100%;
width: 100%;
display: flex;
flex-direction: column;
justify-content: center;
align-item: center;

h1 {
  ${headerFont}
  font-size: 1rem;
  padding: 1rem 0;
  letter-spacing: .5rem;
  margin: 0;
  text-align: center;
}
`;

const flipCardInner = css`
position: relative;
width: 100%;
height: 100%;
transition: transform 0.8s;
transform-style: preserve-3d;
`;

const flipCard = css`
background-color: transparent;
width: 100%;
height: 100%;
max-width: 650px;
margin-right: auto;
margin-left: auto;
perspective: 1000px;

&.flipped .flip-card-inner {
  transform: rotateY(180deg);
}  
`;


const flipCardFace = css`
position: absolute;
width: 100%;
height: 100%;
backface-visibility: hidden;
`;

const flipCardFront = css`
background-color: #13273f;
color: #fffaf3;
display: grid;
grid-template-columns: 1fr 2px 1fr;
grid-template-rows: 1fr 2px 1fr;
place-items: center;
`;

const flipCardBack = css `
background-color: #fffaf3;
color: #13273f;
transform: rotateY(180deg);
`;

const vertSpacer = css`
  background-color: #fffaf3;
  height: 85%;
  width: 100%;
`

const horzSpacer = css`
  background-color: #fffaf3;
  height: 100%;
  width: 75%;
`

const TheDetails = () => {
  const [flipped, setFlipped] = useState(false);
  const [activePanel, setActivePanel] = useState<JSX.Element | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const onScreen = useOnScreen(scrollRef);

  useEffect(() => {
    if (!onScreen) {
      setFlipped(false);
      setActivePanel(null);
    }
  }, [onScreen])

  const activatePanel = (panel: JSX.Element): void => {
    setFlipped(true);
    scrollRef.current?.scrollIntoView();
    setActivePanel(panel);
  }

  return (
    <>
      <ParallaxBanner id="details" style={{height: '100%', width: '100%'}}>
      <ParallaxBannerLayer speed={-50}>
        <OurStoryBackground />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer>
        <Title>
          The Details
        </Title>
      </ParallaxBannerLayer>
      </ParallaxBanner>
      <div css={flipCard} ref={scrollRef} className={flipped ? 'flipped' : undefined}>
        <div css={flipCardInner} className="flip-card-inner">
          <div css={[flipCardFront, flipCardFace]}>
            <FlipCardLink onClick={() => activatePanel(<Venue />)} css={css`grid-column: 1; grid-row: 1;`}>
              <FontAwesomeIcon icon={faLocationDot} style={{height: '4rem'}}/>
              <h1>Venue</h1>
            </FlipCardLink>
            <div css={[vertSpacer, css`grid-column: 2; grid-row: 1;`]} />
            <FlipCardLink onClick={() => activatePanel(<Schedule />)} css={css`grid-column: 3; grid-row: 1;`}>
              <FontAwesomeIcon icon={faStopwatch} style={{height: '4rem'}}/>
              <h1>Schedule</h1>
            </FlipCardLink>
            <div css={[horzSpacer, css`grid-column: 1; grid-row: 2;`]} />
            <div css={[horzSpacer, css`grid-column: 3; grid-row: 2;`]} />
            <FlipCardLink onClick={() => activatePanel(<Travel />)} css={css`grid-column: 1; grid-row: 3;`}>
              <FontAwesomeIcon icon={faPlane} style={{height: '4rem'}}/>
              <h1>Travel</h1>
            </FlipCardLink>
            <div css={[vertSpacer, css`grid-column: 2; grid-row: 3;`]} />
            <FlipCardLink onClick={() => activatePanel(<Info />)}  css={css`grid-column: 3; grid-row: 3;`}>
              <FontAwesomeIcon icon={faCircleInfo} style={{height: '4rem'}}/>
              <h1>Info</h1>
            </FlipCardLink>
          </div>
          <div css={[flipCardFace, flipCardBack]}>
            <FontAwesomeIcon icon={faXmark} onClick={() => {setFlipped(false); setActivePanel(null);}} css={css`position: absolute; top: 4rem; right: .5rem; height: 2rem;`}/>
            {activePanel}
          </div>
        </div>
      </div>
    </>
  )
}

export default TheDetails;