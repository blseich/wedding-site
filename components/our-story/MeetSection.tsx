import Image from 'next/image';
import short_north_pint_house from '../../public/short_north_pint_house.jpg';
import { Great_Vibes } from '@next/font/google';
import { css } from '@emotion/react';

const subHeaderFont = Great_Vibes({
  weight: "400",
  subsets: ['latin'],
});

const MeetSection = () => (
  <>
    <div css={css`color: #fffaf3; font-size: 2.5rem; font-family: ${subHeaderFont.style.fontFamily}; text-align: left;`}>
      How We<br /><span css={css`margin-left: 20%;`}>Became Us</span>
    </div>
    <div>
      It was June 2019. Maddi had recently moved to Columbus and made a new group of girl friends, one of which included now Bridesmaid, Riley Neuhardt. One weekend, Brandon and Groomsman Taylor Larr called Riley to invite her to the Ribs & Jazz festival. She informed them she was downtown bar hopping with some girls. Ribs & Jazz were promptly forgotten.
    </div>
    <div>
      Brandon and Taylor caught up with the group at Short North Pint House and joined the bar hop. At one point, Brandon ever-so-smoothly asked Maddi, &quot;So, do you have a boyfriend?&quot; Maddi laughed and replied with a &quot;no&quot;. The two exchanged numbers with a promise to meet up in the future.
    </div>
    <div>
      To this day, Brandon still has not been to the Ribs & Jazz festival...
    </div>
    <Image
      css={css`
        width: 50%;
        height: auto;
        align-self: center;
      `}
      src={short_north_pint_house.src}
      height={short_north_pint_house.height}
      width={short_north_pint_house.width}
      alt={'an artsy picture of the short north pint house'}
    />
  </>
);

export default MeetSection;