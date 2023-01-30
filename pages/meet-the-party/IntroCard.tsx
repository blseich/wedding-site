import styled from '@emotion/styled';
import { Playfair_Display_SC, Raleway, Herr_Von_Muellerhoff } from '@next/font/google';

const headerFont = Playfair_Display_SC({
  weight: "400",
  subsets: ['latin'],
});

const subHeaderFont = Herr_Von_Muellerhoff({
  weight: "400",
  subsets: ['latin']
});

const textFont = Raleway({
  weight: "400",
  subsets: ['latin'],
});

const Wrapper = styled.div<{flip?: boolean}>`
  color: #fffaf3;
  width: 100%;
  height: 100%;
  padding: .5rem 2.5rem;
  display: grid;
  text-align: ${props => props.flip ? 'left' : 'right'};
  grid-template-columns: ${props => props.flip ? `[photo] 125px [text] 1fr` : `[text] 1fr [photo] 125px`};
  grid-template-rows: 1fr 4rem 1rem 1fr 4fr;
  @media (min-width: 650px) {
    grid-template-columns: ${props => props.flip ? `[photo] 1fr [text] 1fr` : `[text] 1fr [photo] 1fr`};
  }
`;

const Image = styled.img`
  grid-column: photo;
  grid-row: 1 / span 4;
  place-self: center;
`;

const Name = styled.div`
  color: #fffaf3;
  font-size: 1.5rem;
  grid-column-start: text;
  grid-row-start: 2;
  font-family: ${headerFont.style.fontFamily};
  font-weight: ${headerFont.style.fontWeight};
  letter-spacing: .25em;
  padding: 0 .5rem;
`;

const Role = styled.div`
  font-size: 1rem;
  grid-column-start: text;
  grid-row-start: 3;
  padding: 0 .5rem;
  font-family: ${subHeaderFont.style.fontFamily};
  font-weight: ${subHeaderFont.style.fontWeight};
`;

const Intro = styled.div`
  color: #fffaf3;
  font-size: 1rem;
  grid-column: 1 / span 2;
  grid-row: 5;
  text-align: center;
  font-family: ${textFont.style.fontFamily};
  font-weight: ${textFont.style.fontWeight};
`;

const IntroCard = ({ first, last, role, img, intro, flip }: 
  {
    first: string,
    last: string,
    role: string,
    img: string,
    intro: string,
    flip?: boolean
  }) => (
  <Wrapper flip={flip}>
    <Image
      src={img}
      alt={"placeholder"}
    />
    <Name>{first}<br />{last}</Name>
    <Role>{role}</Role>
    <Intro>{intro}</Intro>
  </Wrapper>);

export default IntroCard;