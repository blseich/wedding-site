import styled from '@emotion/styled';
import { Playfair_Display_SC } from '@next/font/google';

const headerFont = Playfair_Display_SC({
  weight: "400",
  subsets: ['latin'],
});


const Name = styled.div`
  text-align: left;
  font-family: ${headerFont.style.fontFamily};
  font-size: 2rem;
  letter-spacing: 0.5rem;
  border-bottom: 2px solid #13273f;
  margin-bottom: 1rem;
  line-height: 1.75rem;
  padding: 0.5rem 0;
`

export default Name;