/*** @jsx, jsx */
import React, { useState } from 'react';
import Image, { StaticImageData } from 'next/image';
import { Parallax, Background } from 'react-parallax';
import styled from '@emotion/styled';
import { jsx, css, keyframes } from '@emotion/react';
import big_heads_in_sun_landscape from '../../public/Maddi&Brandon_Couples-47.jpg';
import big_heads_in_sun_portrait from '../../public/Maddi&Brandon_Couples-48.jpg';
import columbus_map from '../../public/Columbus-Apple-Map.jpg';
import columbus_map_dest_1 from '../../public/Columbus-Apple-Map_dest-1.jpg';
import columbus_map_dest_2 from '../../public/Columbus-Apple-Map_dest-2.jpg';
import columbus_map_dest_3 from '../../public/Columbus-Apple-Map_dest-3.jpg';
import columbus_map_dest_4 from '../../public/Columbus-Apple-Map_dest-4.jpg';
import columbus_map_dest_5 from '../../public/Columbus-Apple-Map_dest-5.jpg';
import columbus_map_dest_6 from '../../public/Columbus-Apple-Map_dest-6.jpg';
import columbus_map_dest_7 from '../../public/Columbus-Apple-Map_dest-7.jpg';
import our_story from '../../public/Our_Story.svg';
import { Francois_One } from '@next/font/google';
import brew_at_the_zoo from '../../public/brew_at_the_zoo-sm.jpg';
import kayaking from '../../public/kayaking-sm.jpg';
import hiking from '../../public/hiking.jpg';
import fourthOfJuly from '../../public/fourth-of-july.jpg';
import bryanWedding from '../../public/bryan-wedding.jpg';

const textFont = Francois_One({
  weight: "400",
  subsets: ['latin'],
});

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
const destinations =  [
  { top: 53, left: 83, img: columbus_map},
  { top: 49, left: 53, img: columbus_map_dest_1 },
  { top: 31, left: 50, img: columbus_map_dest_2 },
  { top: 12, left: 0, img: columbus_map_dest_3 },
  { top: 83, left: 53, img: columbus_map_dest_4 },
];


const animateBackgroundScrollTo = (
  start:  {top: number, left: number, img: StaticImageData},
  end: {top: number, left: number, img: StaticImageData}) => (
  keyframes`
    0% {background-position: ${start.top}% ${start.left}%; background-image: url(${start.img.src})}
    50% {background-position: ${end.top}% ${end.left}%;}
    100% { background-image: url(${end.img.src});}
  `
);

const OurStory = () => {
  const [dest, setDest] = useState(0);


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
      <div style={{
        height: '100vh',
        width: '100vw',
        display: 'grid',
        placeItems: 'center',
      }}>
        <div
          css={css`
            height: 95%;
            width: 95%;
            max-width: 650px;
            max-height: 750px;
            border: 5px solid #132f38;
            background-image: url(${destinations[dest].img.src});
            background-size: auto 175%;
            background-repeat: no-repeat;
            background-position: ${destinations[dest].top}% ${destinations[dest].left}%;
            animation: ${animateBackgroundScrollTo(destinations[dest > 0 ? dest-1 : dest], destinations[dest])} 1.2s ease;
            animation-fill-mode: forwards;
          `}
        >
          <div
            style={{
              display: 'grid',
              gridTemplateRows: '33% auto 33%',
              gridTemplateColumns: '33% auto 33%',
              height: '100%',
              width: '100%',
              fontFamily: textFont.style.fontFamily,
            }}>
              <div
                style={{
                  gridColumn: '1 / span 3',
                  margin: '1rem',
                  padding: '.5rem',
                  backdropFilter: 'blur(6px)',
                  borderRadius: '2rem',
                  border: '3px solid #132f38',
                  color: '#132f38',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >Our story centers around the city of Columbus. It&apos;s where we met. It&apos;s where we&apos;ve lived. It&apos;s where we fell in love...<br /><span style={{fontSize: '.75rem'}}>(although technically Brandon waited until a trip to Dallas to mention it)</span><br/> Columbus holds so many special memories in so many different places for us.</div>
              <div
                style={{
                  gridRow: '2',
                  padding: '0.5rem',
                  display: 'grid',
                  alignItems: 'center',
                }}
              >

                <Image
                  style={{
                    width: '85%',
                    height: 'auto',
                    borderRadius: '1rem',
                    border: '3px solid #132f38'
                  }}
                  src={kayaking.src}
                  height={kayaking.height}
                  width={kayaking.width}
                  alt="Maddi and Brandon kayaing with Columbus in the backgorund. Maddi is gorgeous. Brandon looks ok in this one."
                />
              </div>
              <div
                style={{
                  gridRow: '2',
                  gridColumn: '2',
                  padding: '.5rem',
                  alignSelf: 'end',
                  display: 'grid',
                  alignItems: 'end',
                  justifyContent: 'center', 
                }}
              >
              <Image
                style={{
                  width: 'auto',
                  height: '75%',
                  borderRadius: '1rem',
                  border: '3px solid #132f38'
                }}
                src={fourthOfJuly.src}
                height={fourthOfJuly.height}
                width={fourthOfJuly.width}
                alt="Maddi and Brandon at brew at the zoo. Maddi is gorgeous. Brandon is not."
              />
              </div>
              <div
                style={{
                  gridRow: '2',
                  gridColumn: '3 / span 1',
                  padding: '.5rem',
                  display: 'grid',
                  placeItems: 'center',
                  alignSelf: 'start',
                }}
              >
              <Image
                style={{
                  width: '75%',
                  height: 'auto',
                  borderRadius: '1rem',
                  border: '3px solid #132f38',
                }}
                src={bryanWedding.src}
                height={bryanWedding.height}
                width={bryanWedding.width}
                alt="Maddi and Brandon at brew at the zoo. Maddi is gorgeous. Brandon is not."
              />
              </div>
              <div
                style={{
                  gridRow: '3',
                  gridColumn: '1 / span 1',
                  padding: '.5rem', 
                }}
              >
              <Image
                style={{
                  width: '85%',
                  height: 'auto',
                  borderRadius: '1rem',
                  border: '3px solid #132f38'
                }}
                src={hiking.src}
                height={hiking.height}
                width={hiking.width}
                alt="Maddi and Brandon at brew at the zoo. Maddi is gorgeous. Brandon is not."
              />
              </div>
              <div
                style={{
                  gridRow: '3',
                  gridColumn: '2 / span 2',
                  padding: '.5rem',
                  display: 'grid',
                  placeItems: 'center',
                }}
              >
              <Image
                style={{
                  width: 'auto',
                  height: '85%',
                  borderRadius: '1rem',
                  border: '3px solid #132f38',
                  overflow: 'hidden',
                }}
                src={brew_at_the_zoo.src}
                height={brew_at_the_zoo.height}
                width={brew_at_the_zoo.width}
                alt="Maddi and Brandon at brew at the zoo. Maddi is gorgeous. Brandon is not."
              />
              </div>
          </div>
          <button onClick={() => setDest((dest + 1) % 5)}>CLICK ME YOU FOOL</button>
        </div>
      </div>
    </>
  )
}

export default OurStory;