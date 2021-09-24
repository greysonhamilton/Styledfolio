import React, { useState } from 'react';
import { send } from 'emailjs-com';

const Contact = () => {

    const initialSender = {

        name: '',
        email: '',
        message: ''
    };

    const initialDisabled = true;

    const [toSend,setToSend] = useState(initialSender);
    const [disabled,setDisabled] = useState(initialDisabled);

    const handleChange = (e) => {

        setToSend({ ...toSend, [e.target.name]: e.target.value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        send(
            'service_747kzb2',
            'template_1h70soe',
            toSend,
            'user_aqbEepsWgGWwXC91hJvnR'
        )
        .then((res) => {
            console.log('Success', res.status, res.text);
        })
        .catch((err) => {
            console.log('Failed',err)
        })
    };

    return (
        <form onSubmit={onSubmit}>
            <ContactLabel htmlFor="name">
                Name
            </ContactLabel>
            <ContactInput 
                id="name"
                name="name"
                type="text"
                placeholder="First and last name"
                value={toSend.name}
                onChange={handleChange}
                 />
            <ContactLabel htmlFor="email">
                E-Mail
            </ContactLabel>
            <ContactInput 
                id="email"
                name="email"
                type="E-mail"
                placeholder="E-mail"
                value={toSend.email}
                onChange={handleChange}
                 />
            <ContactLabel htmlFor="message">
                Please leave your message here.
            </ContactLabel>
            <ContactArea 
                id="message"
                name="message"
                rows="6"
                placeholder="Your message..."
                value={toSend.message}
                onChange={handleChange}
                 />
            <ContactButton disabled={disabled}>
                Submit
            </ContactButton>
        </form>
    )
}

export default Contact;