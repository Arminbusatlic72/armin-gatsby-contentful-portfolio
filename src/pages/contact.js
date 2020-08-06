import React from 'react';
import contactStyle from './contact.module.scss';
import Layout from '../components/layout/Layout'
import ContactForm from '../components/contactForm/ContactForm'
const Contact = () => {
    return (
        <Layout>
            <main>
                <h1>Contact me</h1>
                <h3>Thanks for taking the time to reach out. How can I help you today?</h3>
                <ContactForm />
            </main>
        </Layout>
    )
}
export default Contact