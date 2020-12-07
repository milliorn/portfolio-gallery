import React from 'react';

import ContactForm from './ContactForm';

const Contact = () => (
    <div className="contact grid grid--padded">
        <h2 className="contact__title">Want to Collaborate or Hire Me?</h2>

        <p className="contact__subtitle">
            I&apos;m always open to discussing new projects and ideas
        </p>

        <ContactForm />
    </div>
);

export default Contact;
