import React from 'react';
import contactFormStyle from './contactForm.module.scss';
import Fade from 'react-reveal/Fade';
const ContactForm = () => {
    return (<>
        <Fade top>
            <form className={contactFormStyle.contact_form}
                name="contact"
                method="post"
                data-netlify="true"
                data-netlify-honeypot="bot-field">
                <Fade bottom cascade>
                    <input type="hidden" name="bot-field" />
                    <input type="hidden" name="form-name" value="contact" />

                    <div className={contactFormStyle.input_fields__wrapp}>

                        <div className={contactFormStyle.half}>
                            <label>
                                <input className={contactFormStyle.input} placeholder="Name" type="text" name="name" />
                                <span className={contactFormStyle.underline}></span>

                            </label>
                        </div>
                        <div className={contactFormStyle.half}>
                            <label>
                                <input className={contactFormStyle.input} placeholder="Email" type="text" name="name" />
                                <span className={contactFormStyle.underline}></span>

                            </label>
                        </div>
                    </div>
                </Fade>
                <Fade bottom cascade>
                    <div>
                        <div className={contactFormStyle.full}>
                            <label>
                                <input className={contactFormStyle.input} placeholder="Subject" type="text" name="name" />
                                <span className={contactFormStyle.underline}></span>

                            </label>
                        </div>
                        <div className={contactFormStyle.full}>
                            <label>
                                <input className={contactFormStyle.input} placeholder="Message" type="text" name="name" />
                                <span className={contactFormStyle.underline}></span>
                            </label>
                        </div>
                        <div className={contactFormStyle.full}>
                            <input className={contactFormStyle.btn__rounded} type="submit"></input>
                        </div>
                    </div>
                </Fade>

            </form>
        </Fade>
    </>)
}
export default ContactForm