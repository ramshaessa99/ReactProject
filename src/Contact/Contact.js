import React, { useState } from 'react';
import ContactSignup from './ContactSignup';
import ContactSuccess from './ContactSuccess'
import './Contact.css';

const Contact = () => {
    const [isSubmitted, setIsSubmitted] = useState(false)

    function submitForm() {
        setIsSubmitted(true);
    }
    return (
        <div>
            {!isSubmitted ? <ContactSignup submitForm=
                {submitForm} /> : <ContactSuccess />}
        </div>
    );
};

export default Contact;


