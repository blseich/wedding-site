import styled from '@emotion/styled';
import { css } from '@emotion/react';
import { ParallaxBanner, ParallaxBannerLayer } from 'react-scroll-parallax';
import { Playfair_Display_SC, Great_Vibes, Raleway } from '@next/font/google';
import Image from 'next/image';
import standing_couple from '../../public/Maddi&Brandon_Couples-63.jpg';
import walking_couple from '../../public/Maddi&Brandon_Couples-64.jpg';
import amazon_logo from '../../public/amazon_logo.svg';
import crate_and_barrel_logo from '../../public/crate_and_barrel_logo.svg';
import target_logo from '../../public/target_logo.svg';

const headerFont = Playfair_Display_SC({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
});

const subHeaderFont = Great_Vibes({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
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
  background-image: url(${walking_couple.src});
  background-size: 125% auto;
}
@media (orientation: portrait) {
  background-image: url(${standing_couple.src});
  background-size: auto 50%;
}
`;

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

const Registry = () => {
  return (
    <>
      <ParallaxBanner id="registry" style={{height: '100%', width: '100%'}}>
      <ParallaxBannerLayer speed={-50}>
        <OurStoryBackground />
      </ParallaxBannerLayer>
      <ParallaxBannerLayer>
        <Title>
          The Registry
        </Title>
      </ParallaxBannerLayer>
      </ParallaxBanner>
      <div css={css`height: 100%; width: 100%; color: #fffaf3; display: flex; flex-direction: column; align-items: center; justify-content: space-evenly;`}>
        <div css={css`font-family: ${textFont.style.fontFamily}; font-size: 1.25rem; margin: 1rem 0; padding: 0 1rem; text-align: center;`}>
        We thank you simply for choosing to join in celebrating our marriage.<br/><br/>If you wish to honor us with a gift, we have created registries at the following stores.<br/><br/>You may click the logos below to access our online lists
        </div>
        <div css={css`font-family: ${headerFont.style.fontFamily}; font-size: 3rem; letter-spacing: .5rem;`}>Thank You</div>
        <div css={css`display: flex; flex-direction: column; align-items: center;`}>
          <a
            href="https://www.amazon.com/wedding/maddi-taylor-brandon-seich--may-2023/registry/2RJPZ4KB94U0P"
          >
            <Image 
              src={amazon_logo.src}
              width={175}
              height={amazon_logo.height}
              alt={'amazon log'}
            />
          </a>
          <a
            href={"https://www.crateandbarrel.com/gift-registry/maddi-taylor-and-brandon-seich/r6636668"}
          >
            <Image 
              src={crate_and_barrel_logo.src}
              width={175}
              height={crate_and_barrel_logo.height}
              alt={'crate and barrel logo'}
            />
          </a>
          <a
            href="https://www.target.com/gift-registry/gift/maddi-brandon"
          >
            <Image 
              src={target_logo.src}
              width={175}
              height={target_logo.height}
              alt={'target logo'}
            />
          </a>
        </div>
      </div>
    </>
  )
}

export default Registry;