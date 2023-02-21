/*** @jsx, jsx */
import { useState } from 'react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Image from 'next/image';
import styled from '@emotion/styled';
import { css } from '@emotion/react';
import big_heads_in_sun_landscape from '../../public/Maddi&Brandon_Couples-47.jpg';
import big_heads_in_sun_portrait from '../../public/Maddi&Brandon_Couples-48.jpg';
import our_story from '../../public/Our_Story.svg';
import TitleLink from './TitleLink';
import TitleSection from './TitleSection';
import MeetSection from './MeetSection';
import LiveSection from './LiveSection';
import TravelSection from './TravelSection';
import ProposalSection from './ProposalSection';
import { Playfair_Display_SC, Great_Vibes, Raleway } from '@next/font/google';


const headerFont = Playfair_Display_SC({
  weight: "400",
  subsets: ['latin'],
});

const subHeaderFont = Great_Vibes({
  weight: "400",
  subsets: ['latin'],
});

const textFont = Raleway({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
});

const OurStoryBackground = styled.div`
  height: 100%;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  @media (orientation: landscape) {
    background-image: url(${big_heads_in_sun_landscape.src});
    background-size: 125% auto;
  }
  @media (orientation: portrait) {
    background-image: url(${big_heads_in_sun_portrait.src});
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

const OurStory = () => {
  const [meetProgress, setMeetProgress] = useState(0);
  const [liveProgress, setLiveProgress] = useState(0);
  const [travelProgress, setTravelProgress] = useState(0);
  const [proposalProgress, setProposalProgress] = useState(0);

  return (
    <>
      <ParallaxBanner id="story" style={{height: '100%', width: '100%'}}>
        <ParallaxBannerLayer speed={-50}>
          <OurStoryBackground />
        </ParallaxBannerLayer>
        <ParallaxBannerLayer>
          <Title>
            The Story
          </Title>
        </ParallaxBannerLayer>
      </ParallaxBanner>
      <div  css={css`
        max-width: 650px;
        display: flex;
        margin-right: auto;
        margin-left: auto;
        @media (max-width: 650px) {
          flex-direction: column;
        }
      `}>
        <div
          css={css`
            display: flex;
            justify-content: space-around;
            height: 75%;
            font-family: ${headerFont.style.fontFamily};
            font-weight: ${headerFont.style.fontWeight};
            color: #fffaf3;
            flex-grow: 0;
            position: sticky;
            @media (max-width: 650px) {
              top: 0%;
              padding-top: 3.5rem;
              background: #13273f;
              z-index: 2;
            }
            @media (min-width: 651px) {
              padding: 0 1rem;
              text-align: right;
              border-right: 1px solid #fffaf3;
              flex-direction: column;
              top: 12.5%;
              margin-top: 12.5%;
              height: 75vh;
            }
          `}
        >
          <TitleLink 
            title={'Meet'}
            progress={meetProgress}
          />
          <TitleLink 
            title={'Live'}
            progress={liveProgress}
          />
          <TitleLink 
            title={'Travel'}
            progress={travelProgress}
          />
          <TitleLink 
            title={'Proposal'}
            progress={proposalProgress}
          />
        </div>
        <div
          css={css`
            flex-grow: 1;
            padding: 0 1rem;
            color: #fffaf3;
            font-family: ${textFont.style.fontFamily};
            display: flex;
            gap: 100vh;
            flex-direction: column;
            margin: 100vh 0;
          `}
        >
          <TitleSection
            id="Meet"
            onProgress={setMeetProgress}
          >
            <MeetSection />
         </TitleSection>
         <TitleSection
            id="Live"
            onProgress={setLiveProgress}
          >
            <LiveSection />
         </TitleSection>
         <TitleSection
            id="Travel"
            onProgress={setTravelProgress}>
           <TravelSection />
         </TitleSection>
         <TitleSection
            id="Proposal"
            onProgress={setProposalProgress}>
            <ProposalSection />
         </TitleSection>
        </div>
{/*         
                <Image 
                css={css`
                    position: absolute;
                    @media (orientation: portrait) {
                      animation: ${bounceX} 8s linear 0s infinite alternate, ${bounceY} 13.6s linear 0s infinite alternate;
                    }
                    @media (orientation: landscape) {
                      animation: ${bounceX} 4s linear 0s infinite alternate, ${bounceY} 6.8s linear 0s infinite alternate;
                    }
                  `}
                src={collage.src} height={collage.height} width={collage.width} alt={''}/> */}
      </div>
    </>
  )
}

export default OurStory;