import { css } from "@emotion/react"
import { Great_Vibes, Playfair_Display_SC, Raleway } from "@next/font/google";
import { useEffect, useState } from "react";
import SubmitButton from "../../components/rsvp/SubmitButton";

const headerFont = Playfair_Display_SC({
  weight: "400",
  subsets: ['latin'],
});

const subHeaderFont = Great_Vibes({
  weight: "400",
  subsets: ['latin']
});

const textFont = Raleway({
  weight: "400",
  subsets: ['latin'],
});



const RSVP = () => {
  const [submitStatus, setSubmitStatus] = useState('incomplete');
  const [first, setFirst] = useState('');
  const [last, setLast] = useState('');

  const goToRsvpPage = async (first: string, last: string) => {
    setSubmitStatus('pending');
    const res = await fetch(`/api/rsvpByName?first=${first}&last=${last}`);
    const invitation = res.ok ? await res.json() : undefined;
    if (invitation) {
      setSubmitStatus('success');
      window.location.href = `/rsvp/${JSON.parse(invitation)[0]}`;
    } else {
      setSubmitStatus('error');
    }
  }

  useEffect(() => {
    if (first.length > 0 && last.length > 0) {
      setSubmitStatus('ready');
    } else {
      setSubmitStatus('incomplete');
    }
  }, [first, last]);

  return (
    <form 
      css={css`min-height: 100%; max-width: 650px; margin-right: auto; margin-left: auto; background: #fffaf3; display: flex; flex-direction: column; padding: 3rem 1rem; justify-content: space-between;`}
      onSubmit={(e) => {
        e.preventDefault();
        goToRsvpPage(first, last);
      }}
    >
      <div css={css`color: #13273f; font-size: 4rem; font-family: ${headerFont.style.fontFamily}; border-bottom: 2px solid #13273f;`}>RSVP</div>
      <div css={css`font-family: ${textFont.style.fontFamily}; color: #13273f; text-align: center;`}>
        Find your RSVP page by the first and last name listed on your invitation. If you are having trouble, scan the QR code included in your invitation to go directly to your RSVP page.
      </div>
      <div css={css`font-family: ${textFont.style.fontFamily}; color: #13273f; text-align: center;`}>
        On your RSVP page you will be able to respond for all persons included on your invitation. Return at anytime to make changes or updates.
      </div>
      <div>
        <div css={css`display: flex; flex-direction: column; margin: 1rem 0;`}>
          <div css={css`font-family: ${subHeaderFont.style.fontFamily}; color: #13273f; font-size: 2rem;`}>First Name: </div>
          <input type="text" css={css`font-size: 1.5rem; font-family: ${headerFont.style.fontFamily};`} onChange={(e) => setFirst(e.target.value)} value={first}/>
        </div>
        <div css={css`display: flex; flex-direction: column; margin: 1rem 0;`}>
          <div css={css`font-family: ${subHeaderFont.style.fontFamily}; color: #13273f; font-size: 2rem;`}>Last Name: </div>
          <input type="text" css={css`font-size: 1.5rem; font-family: ${headerFont.style.fontFamily};`} onChange={(e) => setLast(e.target.value)} value={last}/>
        </div>
      </div>
      <SubmitButton status={submitStatus} />
      {submitStatus === 'success' && <div css={css`font-family: ${textFont.style.fontFamily}; text-align: center;`}>Invitaion Found! Redirecting...</div>}
      {submitStatus === 'error' && <div css={css`font-family: ${textFont.style.fontFamily}; text-align: center;`}>There was a problem finding your reservation.<br/>Please try re-entering your name above.</div>}
    </form>
  )
}

export default RSVP;