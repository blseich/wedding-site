import { useWindowScroll } from 'react-use';
import Image from 'next/image';
import columbus_map from '../../public/Columbus-Road-Map.jpg';
import columbus_map_stop_1 from '../../public/Columbus-Road-Map_Stop-1.jpg';
import pin from '../../public/pin.svg';
import { base } from '../../styles/colors';
import styled from '@emotion/styled';

const Background = styled.div<{ x: number, y: number}>`
    position: fixed;
    height: 100vh;
    width: 100%;
    background-image: url(${columbus_map.src});
    background-position: ${props => props.x}% ${props => props.y}%;  
    background-size: auto 300%;
    top: 0;
  `

const FirstMet = ({ y, velocity}: {y: number, velocity: number}) => {
  const scrollPos = y % velocity;
  const fadeThreshold = velocity / 4;
  const fadeInOpacity = scrollPos < fadeThreshold ? scrollPos * 100 / fadeThreshold : 100
  const fadeOutOpacity = scrollPos > velocity - fadeThreshold ? (velocity - scrollPos) * 100 / fadeThreshold : 100;
  return <div 
    style={{
      position: 'fixed',
      width: '100%',
      height: '100vh',
      backgroundImage: `url(${columbus_map_stop_1.src})`,
      backgroundPosition: '43% 43%',
      backgroundSize: 'auto 300%',
      opacity: `${Math.min(fadeInOpacity, fadeOutOpacity)}%`,
    }}
  />
  // return  <>
  //   <Image 
  //   src={pin.src}
  //   alt={"first meet map pointer"}
  //   width={75}
  //   height={75}
  //   style={{
  //     position: 'absolute',
  //     top: '63%',
  //     left: '63%',
  //     height: '8%',
  //     width: '8%',
  //     opacity: `${Math.min(fadeInOpacity, fadeOutOpacity)}%`
  //   }}/>
  //   <div
  //     style={{
  //       border: '5px solid #2f482f',
  //       borderRadius: '.5rem',
  //       background: '#f3fff9',
  //       color: '#2f482f',
  //       position: 'absolute',
  //       top: '10%',
  //       left: '10%',
  //       maxWidth: '53%',
  //       maxHeight: '53%',
  //     }}
  //   >
  //     asdfo oa;osidjaer ;;aodsifaj;elrkjasd;f
  //     aosdifja;ek e rjosidfhajskdje fdjakdfdj
  //      jlajsodilij fjodiajer gidjn aoke 
  //      dkfjn poijhrleiujgoslandkfj gioadjfio oe
  //      llaijf hoigoie roaijj cdpsdfj; ;oifej sikjda
  //   </div>
  // </>
}

const storyConfig = [{
  start: [53, 75],
  end: [43, 43]
},{
  start: [43, 43],
  end: [43, 43],
  content: (props: JSX.IntrinsicAttributes & { y: number; velocity: number; }) => <FirstMet {...props}/>
}];

const overlay = (y: number, velocity: number): JSX.Element | null => {
  const content = storyConfig[Math.floor(y/velocity)].content
  return content ? content({y, velocity}) : null;
}

const backgroundPositionCalc = (y: number, velocity: number): [number, number] => {
  const currentConfig = storyConfig[Math.floor(y/velocity)];
  const startX = currentConfig.start[0];
  const startY = currentConfig.start[1];
  const endX = currentConfig.end[0];
  const endY = currentConfig.end[1];

  const currentX = startX - (startX - endX) * ((y % velocity)/velocity);
  const currentY = startY - (startY - endY) * ((y % velocity)/velocity);

  return [currentX, currentY];
}

export default function Story() {
  const velocity = 3000;
  const { y } = useWindowScroll();
  const backgroundPosition = backgroundPositionCalc(y, velocity);

  return (
    <>
      <div
        style={{
        width: '100%',
        height: `calc(100vh + ${velocity*storyConfig.length-1}px)`,
        zIndex: '-1',
        background: base,
      }} />
      <Background x={backgroundPosition[0]} y={backgroundPosition[1]}>
        {overlay(y, velocity)}
      </Background>
    </>)
}