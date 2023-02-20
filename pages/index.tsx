import Head from 'next/head'
import Image from 'next/image';
import color_bg from '../public/BackgroundStairs_Centered-color.jpg';
import bw_bg from '../public/BackgroundStairs_Centered-bw.jpg';
import say_i_do from '../public/Say_I_Do.svg';
import { Playfair_Display_SC, Francois_One, Raleway } from '@next/font/google';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';
import OurStory from '../components/our-story';
import MeetTheParty from '../components/meet-the-party';
import TheDetails from '../components/the-details';
import Registry from '../components/registry';

const headerFont = Playfair_Display_SC({
  weight: "400",
  subsets: ['latin'],
});

const dateFont = Raleway({
  weight: "600",
  subsets: ['latin'],
});

const linkFont = Francois_One({
  weight: "400",
  subsets: ['latin'],
});

const fadingBgImage = keyframes`
  from {opacity: 1}
  to {opacity: 0}
`

const Header = styled.h1`
  font-family: ${headerFont.style.fontFamily};
  font-weight: ${headerFont.style.fontWeight};
  color: #fffaf3;
  width: 100%;
  font-size: 2.5rem;
  margin: 0;
  text-align: center;
  line-height: 2.5rem;
  letter-spacing: .5rem;
  text-shadow: 1px 1px 2px black;
  place-self: end;
`;

const BWBackground = styled.img`
  position: absolute;
  height: 100vh;
  width: 100%;
  object-fit: cover;
  background-position: center;
`;

const ColorBackground = styled.img`
  position: absolute;
  height: 100vh;
  width: 100%;
  object-fit: cover;
  background-position: center;
  animation: ${fadingBgImage}
    5s
    ease
    0s  
    alternate
    infinite
    none
    running;
`;

const Main = styled.main`
  display: grid;
  grid-template-rows: 2fr 1fr 2fr;
  height: 100%;
  flex-direction: column;
  background: rgba(0, 0, 0, 0);
  padding: .5rem;
  align-items: center;
  justify-content: center;
`

const Date = styled.div`
  font-family: ${dateFont.style.fontFamily};
  color: #fffaf3;
  font-size: 2rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  text-shadow: 1px 1px 2px black;
  place-self: center;
  grid-row-start: 3;
  grid-column-start: 1;
  z-index: 1;

  span {
    font-size: 2.5rem;
  }
`
const RSVPButton = styled.a`
  width: 75%;
  z-index: 1;
  grid-row-start: 3;
  grid-column-start: 1;
  align-self: end;
  height: 3rem;
  font-family: '__Playfair_Display_SC_40f3bc';
  font-size: 2rem;
  line-height: 1.5rem;
  background: #13273f;
  border: none;
  border-radius: 6px;
  color: #fffaf3;
  letter-spacing: 0.5rem;
  margin-bottom: 2.5rem;
  justify-self: center;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Home() {
  return (
    <>
      <Head>
        <title>Maddi & Brandon Say I Do</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/heart.svg" />
      </Head>
      <BWBackground src={bw_bg.src} />
      <ColorBackground src={color_bg.src} />
      <Main>
        <div style={{
          display: 'flex',
          flexDirection: 'column',
          placeSelf: 'end',
          zIndex: '1',
          position: 'relative'
        }}>
          <Header>Maddi &<br/>Brandon</Header>
          <Image 
            width={256}
            height={40}
            style={{width: '16rem', filter: 'drop-shadow(1px 1px 2px black)'}}
            src={say_i_do.src}
            alt={'say i do'}
          />
        </div>
        <Date>5<span>&#8901;</span>13<span>&#8901;</span>23</Date>
        {/* <RSVPButton role={'link'} href="/rsvp">RSVP</RSVPButton> */}
      </Main>
      <OurStory />
      <MeetTheParty />
      <TheDetails />
      <Registry />
    </>
  )
}
