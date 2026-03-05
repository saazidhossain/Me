import React from 'react';

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

/* Styles for this form are handled via global.css and Tailwind utilities. */