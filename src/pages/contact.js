import React from 'react';
import contactStyle from './contact.module.scss';
import Layout from '../components/layout/layout'
import ContactForm from '../components/contactForm/contactForm'
import Bounce from 'react-reveal/bounce';
import MyMap from '../components/map/map'
import Head from '../components/head/head'



const Contact = () => {
    return (
        <Layout>
            <Head title="Contact" />
            <main>

                <Bounce left cascade>
                    <div>
                        <h1>Contact me</h1>
                        <h3>Thanks for taking the time to reach out. How can I help you today?</h3>
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