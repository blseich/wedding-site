import { Playfair_Display_SC, Raleway, Great_Vibes } from '@next/font/google';

const header = Playfair_Display_SC({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
});

const subHeader = Great_Vibes({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
});

const text = Raleway({
  weight: "400",
  subsets: ['latin'],
  display: 'swap',
});

const date = Raleway({
  weight: "600",
  subsets: ['latin'],
  display: 'swap',
});

export const headerFont = `font-family: ${header.style.fontFamily}, serif; font-weight: ${header.style.fontWeight};`;
export const subHeaderFont = `font-family: ${subHeader.style.fontFamily}, cursive; font-weight: ${subHeader.style.fontWeight};`;
export const textFont = `font-family: ${text.style.fontFamily}, sans-serif; font-weight: ${text.style.fontWeight};`;
export const dateFont = `font-family: ${date.style.fontFamily}, sans-serif; font-weight: ${date.style.fontWeight};`;