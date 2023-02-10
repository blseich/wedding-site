import { css } from "@emotion/react";
import Image from "next/image";
import Link from "next/link";
import OpenCloseIcon from "./open-close-icon";
import Drawer from './Drawer';
import monogram from '../../public/monogram.svg';
import { useState } from "react";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  return (
  <div css={css`position: fixed; top: 0; left: 0; z-index: 3; width: 100%;`}>
    <div css={css`
      position: absolute; 
      top: 0; 
      left: 0; 
      height: 3rem; 
      width: 100%; 
      align-items: center;
      display: flex;
      background: #13273f;
      z-index: 4;
    `}>
      <Link href="/">
        <Image
          css={css`height: 2rem; width: auto; margin: 0 10px; z-index: 4;`}
          src={monogram.src}
          height={monogram.height}
          width={monogram.width}
          alt={"M & B monogram"}
        />
      </Link>
      <OpenCloseIcon isOpen={open} toggleFunc={setOpen} />
    </div>
    <Drawer isOpen={open} onNavigate={() => setOpen(false)}/>
  </div>
  )
}

export default Navigation;