import React from 'react';
import Image from 'next/image';
import { Parallax, Background } from 'react-parallax';
import styled from '@emotion/styled';
import big_heads_in_sun_landscape from '../../public/Maddi&Brandon_Couples-47.jpg';
import big_heads_in_sun_portrait from '../../public/Maddi&Brandon_Couples-48.jpg';
import our_story from '../../public/Our_Story.svg';

const OurStoryBackground = styled.div`
  height: 100vh;
  width: 100vw;
  background-position: center;
  background-repeat: no-repeat;
  @media (orientation: landscape) {
    background-image: url(${big_heads_in_sun_landscape.src});
    background-size: 125% auto;
  }
  @media (orientation: portrait) {
    background-image: url(${big_heads_in_sun_portrait.src});
    background-size: auto 125%;
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
  return (
    <>
      <Parallax strength={500}>
        <Background>
          <OurStoryBackground />
        </Background>
        <Title>
        <Image 
            width={256}
            height={40}
            style={{width: '16rem', filter: 'drop-shadow(1px 1px 2px black)'}}
            src={our_story.src}
            alt={'say i do'}
          />
        </Title>
      </Parallax>
    </>
  )
}

export default OurStory;