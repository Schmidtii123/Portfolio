import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export default function Contact() {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0pbqzef',
      'template_5hd1kuk',
      form.current,
      'l2XP3PJbhxSCuC8YK'
    )
      .then((result) => {
        console.log(result.text);
        console.log("message sent")
        e.target.reset();
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section id='contact'>
      <div>
        <h1 className='title'>Kontakt mig</h1>
        <p className='contact_text'>Tak fordi du tog dig tid til at udforske min portefølje. Jeg sætter stor pris på din interesse. Hvis du har spørgsmål, feedback eller ønsker at samarbejde på et projekt, er du mere end velkommen til at kontakte mig. Jeg ser frem til at høre fra dig og besvare eventuelle henvendelser.</p>
      </div>
      <div className='contact'>
        <div>

          <form className='form' ref={form} onSubmit={sendEmail} >
            <label className='label'>Name</label>
            <input className='input' type="text" name="user_name" />
            <label className='label'>Email</label>
            <input className='input' type="email" name="user_email" />
            <label className='label'>Message</label>
            <textarea className='textarea' name="message" />
            <input className='input' type="submit" value="Send" />
          </form>
        </div>
        <img className="img_container velkommen_img" src="./emil_linkedin.png" alt="Mig(Emil Schmidt) der smiler med hænderne over kryds" />
      </div>
      <div className='some'>

        <a href="https://www.linkedin.com/in/emil-schmidt-7656a9215/"><img className='some_img' src="./linkedin.png" alt="Linkedin logo" /></a>
        <a href="https://www.instagram.com/schmidtii00"><img className='some_img' src="./instagram.png" alt="Instagrams Logo" /></a>
        <a href="https://www.facebook.com/emil.schmidt.90/"><img className='some_img' src="./facebook.png" alt="Facebooks logo" /></a>
      </div>
    </section>


  )
}