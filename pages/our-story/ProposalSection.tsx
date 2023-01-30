import Image from 'next/image';
import when_she_said_yes from '../../public/when_she_said_yes.svg';
import proposal1 from '../../public/proposal1.jpg';
import { css } from '@emotion/react';

const ProposalSection = () => (
  <>
    <Image
      css={css`
        width: 40%;
        height: auto;
      `}
      src={when_she_said_yes.src}
      height={when_she_said_yes.height}
      width={when_she_said_yes.width}
      alt={'how we became us'}
    />
    <div>
      For the propsal, Brandon enlisted the help of two now Bridesmaids, Shelly Ferguson and Maddie Oney, to plan an event that would serve many purposes. Get everyone together - get everyone dressed up - get something to calm the nerves - a Friends-giving checked all the boxes. Except for one.
    </div>
    <div>
      It was important for both Brandon and Maddi to share the moment of their engagement with their families. So after finishing up with Friends-giving, Groomsman Blake Hampshire and Groomsman Ian Ferguson came up with the brilliant and totally unplanned idea to go to Crooked Can Brewing for some drinks afterwards. Brandon had already arranged for the families to be waiting there and ready.
    </div>
    <div>
      Maddi and Brandon stopped at home to let Fitz out (and definitely <em>not</em> to give Maddie and Shelly a chance to get everyone in position) before heading over. When they arrived, instead of walking to the brewery Brandon led Maddi to the ampitheatre across the street. Maddi was confused, cold, and a little frustrated as to why they were not walking towards the warm bar on this cold November night but when she saw her niece&apos;s bright pink jacket she quickly understood.
    </div>
    <div>
      Groomsman Jordan Seich had helped lay out candles (and some rose petals that didn&apos;t stick around). Matron of Honor Alex Nguyen and Maid of Honor Randi Taylor had helped pick out the ring. There, in front of a soon-to-be-lit Christmas Tree and everyone they loved, Brandon knelt down and asked Maddi to marry him. She didn&apos;t even say yes. She just nodded and cried. But that said it all.
    </div>
    <Image
      css={css`
        max-width: 100%;
        height: auto;
        border: 2px solid #fffaf3;
        border-radius: 2rem;
        padding: 2x;
      `}
      src={proposal1.src}
      width={proposal1.width}
      height={proposal1.height}
      alt={'Brandon and Maddi shortly after becoming engaged'}
    />
  </>
);

export default ProposalSection;