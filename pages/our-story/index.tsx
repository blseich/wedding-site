/*** @jsx, jsx */
import React, { useState } from 'react';
import { Parallax, ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import Image from 'next/image';
import styled from '@emotion/styled';
import { css, keyframes } from '@emotion/react';
import big_heads_in_sun_landscape from '../../public/Maddi&Brandon_Couples-47.jpg';
import big_heads_in_sun_portrait from '../../public/Maddi&Brandon_Couples-48.jpg';
import our_story from '../../public/Our_Story.svg';
import TitleLink from './TitleLink';
import TitleSection from './TitleSection';
import MeetSection from './MeetSection';
import LiveSection from './LiveSection';
import TravelSection from './TravelSection';
import { Playfair_Display_SC, Raleway } from '@next/font/google';
import collage from '../../public/collage.jpg';


const headerFont = Playfair_Display_SC({
  weight: "400",
  subsets: ['latin'],
});

const textFont = Raleway({
  weight: "400",
  subsets: ['latin'],
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
  height: 100vh;
  width: 100vw;
`

const OurStory = () => {
  const [meetProgress, setMeetProgress] = useState(0);
  const [liveProgress, setLiveProgress] = useState(0);
  const [travelProgress, setTravelProgress] = useState(0);
  const [proposalProgress, setProposalProgress] = useState(0);

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
      <div style={{
        maxWidth: '650px',
        display: 'flex',
        marginRight: 'auto',
        marginLeft: 'auto',
      }}>
        <div
          css={css`
            display: flex;
            justify-content: space-around;
            flex-direction: column;
            height: 75%;
            font-family: ${headerFont.style.fontFamily};
            font-weight: ${headerFont.style.fontWeight};
            text-align: right;
            color: #fffaf3;
            border-right: 1px solid #fffaf3;
            padding: 0 1rem;
            flex-grow: 0;
            position: sticky;
            top: 12.5%;
            margin-top: 12.5%;
            height: 75vh;
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
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur quis justo nec ex efficitur pellentesque. Nam tempor rutrum nulla tempus lacinia. Cras lacinia, velit venenatis feugiat dictum, dolor erat congue nisi, sit amet maximus orci turpis a metus. Maecenas molestie arcu nec ligula rutrum, vitae suscipit erat congue. Nam nec viverra metus. Praesent congue leo et mi venenatis sagittis. Proin mollis pulvinar nibh sit amet hendrerit. Nam nec eros facilisis, suscipit lorem ac, dapibus odio. Duis tortor quam, pellentesque ut gravida eget, fringilla sit amet dui. Nam turpis elit, malesuada a aliquet ac, varius in orci. Integer facilisis finibus augue, ut maximus nibh malesuada venenatis. Sed sodales ultrices odio. Quisque nec libero id ante posuere ultrices. Fusce interdum euismod auctor. Quisque gravida consectetur tempor. Quisque dapibus auctor risus id fringilla.
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