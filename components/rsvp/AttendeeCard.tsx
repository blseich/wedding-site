import { css } from "@emotion/react"
import { useEffect, useState } from "react";
import { Checkbox } from "./Checkbox"
import Name from "./name"
import { RadioButton, RadioButtonLabel } from "./RadioButton";
import { Raleway, Playfair_Display_SC } from '@next/font/google';

const headerFont = Playfair_Display_SC({
  weight: "400",
  subsets: ['latin']
});

const textFont = Raleway({
  weight: "400",
  subsets: ['latin']
});


type Attendee = {
  first: string,
  last: string,
  attending: boolean | undefined,
  glutenFree: boolean,
  vegan: boolean,
  vegetarian: boolean,
  dairyFree: boolean,
  other: string,
};

const AttendeeRsvpCard = ({ attendee, onUpdate }: { attendee: Attendee, onUpdate: (attendee: Partial<Attendee>) => void }) => {
  const update = (key: string, value: boolean | string | undefined) => {
    onUpdate({ [`${key}`]: value });
  }
  
  return (
    <>
      <Name>{attendee.first}<br />{attendee.last}</Name>
      <div css={css`display: flex; justify-content: space-around; margin: 1rem 0;`}>
        <div css={css`display: flex; flex-direction: column; align-items: center;`}>
          <RadioButton type="radio" name={`${attendee.first}_attending`} id={`${attendee.first}_yes`} defaultChecked={attendee.attending === true} onChange={(e) => update("attending", e.target.checked)}/>
          <RadioButtonLabel htmlFor={`${attendee.first}_yes`}>Joyfully Accepts</RadioButtonLabel>
        </div>
        <div css={css`display: flex; flex-direction: column; align-items: center;`}>
          <RadioButton type="radio" name={`${attendee.first}_attending`} id={`${attendee.first}_no`} defaultChecked={attendee.attending === false} onChange={(e) => update("attending", !e.target.checked)}/>
          <RadioButtonLabel htmlFor={`${attendee.first}_no`}>Regretfully Declines</RadioButtonLabel>
        </div>
      </div>
      <div css={css`display: grid; grid-template-rows: 1fr 1fr 1fr 1fr; grid-template-columns: 1fr 1fr; max-width: 75%; margin-right: auto; margin-left: auto; font-family: ${textFont.style.fontFamily}`}>
        <div css={css`grid-column: 1 / 3; grid-row: 1; border-bottom: 2px solid #13273f; padding: 0.5rem 0; text-align: center; font-size: 1.5rem; font-family: ${headerFont.style.fontFamily}; line-height: 1.25rem;`}>
          Food Accomodations
        </div>
        <div css={css`grid-column: 1; grid-row: 2; display: flex; align-items: center;`}>
          <Checkbox type="checkbox" name={`${attendee.first}_food`} id={`${attendee.first}_glutenFree`} defaultChecked={attendee.glutenFree} onChange={(e) => update("glutenFree", e.target.checked)}/>
          <label htmlFor={`${attendee.first}_glutenFree`} >Gluten Free</label>
        </div>
        <div css={css`grid-column: 2; grid-row: 2; display: flex; align-items: center;`}>
          <Checkbox type="checkbox" name={`${attendee.first}_food`} id={`${attendee.first}_vegan`} defaultChecked={attendee.vegan} onChange={(e) => update("vegan", e.target.checked)}/>
          <label htmlFor={`${attendee.first}_vegan`}>Vegan</label>
        </div>
        <div css={css`grid-column: 1; grid-row: 3; display: flex; align-items: center;`}>
          <Checkbox type="checkbox" name={`${attendee.first}_food`} id={`${attendee.first}_vegetarian`} defaultChecked={attendee.vegetarian} onChange={(e) => update("vegetarian", e.target.checked)} />
          <label htmlFor={`${attendee.first}_vegetarian`}>Vegetarian</label>
        </div>
        <div css={css`grid-column: 2; grid-row: 3; display: flex; align-items: center;`}>
          <Checkbox type="checkbox" name={`${attendee.first}_food`} id={`${attendee.first}_dairyFree`} defaultChecked={attendee.dairyFree} onChange={(e) => update("dairyFree", e.target.checked)}/>
          <label htmlFor={`${attendee.first}_dairyFree`}>Dairy Free</label>
        </div>
        <div css={css`grid-column: 1 / 3; grid-row: 4; display: flex; align-items: center;`}>
          <Checkbox type="checkbox" name={`${attendee.first}_food`} id={`${attendee.first}_other`} defaultChecked={typeof attendee.other !== "undefined"} />
          <label htmlFor={`${attendee.first}_other`}>Other <input type="text" id={`${attendee.first}_otherText`} defaultValue={attendee.other} onChange={(e) => update("other", e.target.value)}/></label>
        </div>
      </div>
    </>
  )
}

export default AttendeeRsvpCard;