import styled from "@emotion/styled";

const Link = styled.a`
  color: inherit;
  &:visited {
    color: inherit;
  }
`;

const Text = styled.span`
  display: inline-block;
  position; relative;
  overflow: hidden;
`;

const Underline = styled.div<{progress: number}>`
  position: absolute;
  width: 100%;
  height: 100%;
  border-bottom: 1px solid #fffaf3;
  left: ${props => -100 + ( 100 * props.progress )}%;
`
const progressCalculation = (progress: number): number => {
  if (progress < 0.25) {
    return progress * 4;
  }
  if (progress > 0.75) {
    return 1 + 4 * (-.75 + progress);
  } 
  return 1
};

const TitleLink = ({ progress, title}: {progress: number, title: string}) => (
  <Link href={`#${title}`}>
    <Text style={{display: 'inline-block', position: 'relative', overflow: 'hidden'}}>
      <Underline progress={progressCalculation(progress)} />
      {title}
    </Text>
  </Link>
)

export default TitleLink;
