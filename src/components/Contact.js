import React, { useState } from "react";

import { validateEmail } from "../utils/helpers";

import { send } from 'emailjs-com';

export default function Contact() {
    // Assigning the formState to empty values so that the form is empty by default
    const [formState, setFormState] = useState({
        name: "",
        email: "",
        message: "",
    });

    const [errorMessage, setErrorMessage] = useState("");
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        // Preventing the page from refreshing which is the default behaviour of form submit (which is what this will be used for later)
        e.preventDefault();
        console.log("submit happened")
        console.log("Form data SUBMIT check", formState)
        send(
            // Service ID for EmailJS
            'service_dctgumg',
            // Template ID for EmailJS
            'TEMPLATE ID',
            // From state will be sent with all data inside of it for name, email, and message
            formState,
            // Public key for EmailJS
            '9EiVelwl5z7V7K7yV'
          )
            .then((response) => {
              console.log('SUCCESS!', response.status, response.text);
            })
            .catch((err) => {
              console.log('FAILED...', err);
            });
        };
        // Setting the formState to empty values so that the form clears after being submitted
        setFormState({ ...formState,
        name: "",
        email: "",
        message: "",
    });

    const inputs = document.querySelectorAll('#name, #email, #message');

    inputs.forEach(input => {
        input.value = '';
    });
    };

    const handleChange = (e) => {
        // If the selected field is email, then it will perform a validation from the helper, it will then set the error message based on if the validation passed or not
        if (e.target.name === "email") {
            const validCheck = validateEmail(e.target.value);
            if (!validCheck) {
                setErrorMessage("Please enter a valid email")
            } else {
                setErrorMessage("");
            }
        } else {
            // If there is nothing entered in either name or message fields when theyre selected, it will set the error based on if the field is empty
            if (!e.target.value.length) {
                setErrorMessage(`Please enter a ${e.target.name}`)
            } else {
                setErrorMessage("");
            }
        }
        if (!errorMessage) {
            // If there is a valid email, and something inside of the name and message fields, it will assign the values from the form to the appropriate properties for the formState
            setFormState({ ...formState, [e.target.name]: e.target.value});
            console.log("Form data check", formState)   
        }
    };

    return (
        <div>
            <h1 className='text-center contactTitle mt-5'>Contact</h1>
            <section className="contactContainer mt-5">
                <form id='contact-form' onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor='name'>Name:</label>
                        <input
                        id='name'
                        type='text'
                        name='name'
                        defaultValue={name}
                        onBlur={handleChange}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='email'>Email:</label>
                        <input
                        id='email'
                        type='email'
                        name='email'
                        defaultValue={email}
                        onBlur={handleChange}
                        onChange={handleChange}
                        />
                    </div>
                    <div>
                        <label htmlFor='message'>Message:</label>
                        <textarea
                        id='message'
                        name='message'
                        rows='6'
                        defaultValue={message}
                        onBlur={handleChange}
                        onChange={handleChange}
                        />
                    </div>
                    {errorMessage && (
                        <div>
                            <p className="errorAlert">{errorMessage}</p>
                        </div>
                    )}
                    <button type="submit">Submit</button>
                </form>
            </section>
        </div>
    )
}