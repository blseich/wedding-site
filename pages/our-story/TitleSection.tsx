import { css } from '@emotion/react';
import React from 'react';
import { Parallax } from "react-scroll-parallax";

const TitleSection = ({ id, onProgress, children }: {id: string, onProgress: (progress: number) => void} & React.PropsWithChildren) => (
  <Parallax
    id={id}
    onProgressChange={(progress) => onProgress(progress)}
    css={css`
      position: relative;
      display: flex;
      flex-direction: column;
      padding-top: 2rem;
      gap: 1rem;
      text-align: center;
      font-size: .875rem;
    `}
  >
    {children}
  </Parallax>
);

export default TitleSection;