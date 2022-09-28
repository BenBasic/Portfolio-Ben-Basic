import React, { useState } from "react";

import { validateEmail } from "../utils/helpers";

import { send } from 'emailjs-com';

export default function Contact() {

    // Assigning state to class name values, these will make the page content fade in when triggered to appear
    const [finishPageAppearState, setFinishPageAppearState] = useState("invisibleIcon fadeInPage")

    // After the set time interval finishes, state is set to an empty value to prevent CSS conflicts
    setTimeout(function(){
        setFinishPageAppearState('')
    },490);


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
        // Running a validation check for the email to make sure it contains valid characters, also checking if the other fields have anything written in them
        const validCheck = validateEmail(email);
        if (!validCheck || name === '' || message === '') {
            setErrorMessage("Please fill out a name, valid email, and message")
        } else {
            // If checks are passed, then the program will use emailJS and send the required information to be used to send an email to my inbox
            console.log("Form data SUBMIT check", formState)
            send(
                // Service ID for EmailJS
                'service_dctgumg',
                // Template ID for EmailJS
                'template_c85uomt',
                // From state will be sent with all data inside of it for name, email, and message
                formState,
                // Public key for EmailJS
                '9EiVelwl5z7V7K7yV'
              )
                .then((response) => {
                  console.log('Email has been sent!', response.status, response.text); // If send works, log a message with the response status and text
                  setErrorMessage("Your email has been sent!");
                })
                .catch((err) => {
                  console.log('Email failed to send', err); // If send fails, log a message with the error
                  setErrorMessage("Your email failed to send, please try again");
                });
            // Setting the formState to empty values so that the formState clears after being submitted
            setFormState({ ...formState,
            name: "",
            email: "",
            message: "",
        });
    
        // Defining inputs to the query of the field ids for the form
        const inputs = document.querySelectorAll('#name, #email, #message');
    
        // Runs a for each method to clear the fields after hitting submit so that what was submitted doesnt stay in the form
        inputs.forEach(input => {
            input.value = '';
        });
        };
    }


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
        <div className={`${finishPageAppearState}`}>
            
            <section className="contactContainer mt-md-5 mt-3">
            <h1 className='text-center contactTitle'>Contact</h1>
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
                    <div className="submitContainer">
                    <button type="submit" className='submitButton'>Send</button>
                    </div>
                </form>
            </section>
        </div>
    )
}