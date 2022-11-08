import { useWindowScroll } from 'react-use';
import columbus_map from '../../public/Columbus-Road-Map.jpg';

export default function Story() {
  const { y } = useWindowScroll();

  return (
    <>
      <div
        style={{
        width: '100%',
        height: '1850px',
        zIndex: '-1',
      }} />
      <div
        style={{
          position: 'fixed',
          height: '100vh',
          width: '100%',
          backgroundImage: `url(${columbus_map.src})`,
          backgroundPosition: `-${y}px -${y/2}px`,
          top: '0',
        }}
      >
        Story
      </div>
    </>)
}