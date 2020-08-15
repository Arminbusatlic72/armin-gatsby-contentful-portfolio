import React from 'react';
import contactStyle from './contact.module.scss';
import Layout from '../components/layout/Layout';
import ContactForm from '../components/contactForm/ContactForm';
import Bounce from 'react-reveal/Bounce';
import MyMap from '../components/map/Map';
import Head from '../components/head/Head';
import contactStyles from './contact.module.scss';



const Contact = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <main>

                <Bounce left cascade>
                    <div>
                        <h1>Contact me</h1>
                        <h3 className={contactStyles.contact__subheading}>Thanks for taking the time to reach out. How can I help you today?</h3>
                    </div>
                </Bounce>
                <div className={contactStyle.container}>
                    <ContactForm />

                    <MyMap />

                </div>
            </main>
        </Layout>
    )
}
export default Contact