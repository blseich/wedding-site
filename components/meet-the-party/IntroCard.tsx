import styled from '@emotion/styled';
import { headerFont, subHeaderFont, textFont } from '../../styles/fonts';

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
  ${headerFont}
  color: #fffaf3;
  font-size: 1.5rem;
  grid-column-start: text;
  grid-row-start: 2;
  letter-spacing: .25em;
  padding: 0 .5rem;
`;

const Role = styled.div`
  ${subHeaderFont}
  font-size: 1rem;
  grid-column-start: text;
  grid-row-start: 3;
  padding: 0 .5rem;
`;

const Intro = styled.div`
  ${textFont}
  color: #fffaf3;
  font-size: 1rem;
  grid-column: 1 / span 2;
  grid-row: 5;
  text-align: center;
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