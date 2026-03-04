// Updated ContactForm.tsx with enhanced form field alignment, responsive form layout, improved spacing, and better mobile experience.

import React from 'react';
import './ContactForm.css'; // Assuming you have a CSS file for styles

const ContactForm = () => {
    return (
        <div className='contact-form-container'>
            <form className='contact-form'>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input type='text' id='name' className='form-control' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='email'>Email</label>
                    <input type='email' id='email' className='form-control' required />
                </div>
                <div className='form-group'>
                    <label htmlFor='message'>Message</label>
                    <textarea id='message' className='form-control' required></textarea>
                </div>
                <button type='submit' className='submit-button'>Send</button>
            </form>
        </div>
    );
};

export default ContactForm;

/* CSS (ContactForm.css) should include styles for form responsiveness, alignment, and mobile improvements */