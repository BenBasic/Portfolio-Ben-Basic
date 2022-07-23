import React, { useState } from "react";

import { validateEmail } from "../utils/helpers";

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
        // Setting the formState to empty values so that the form clears after being submitted
        setFormState({ ...formState,
        name: "",
        email: "",
        message: "",
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
            if (!e.taget.value.length) {
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
        <section>
            <form id='contact-form' onSubmit={handleSubmit}>
                <div>
                    <label htmlFor='name'>Name:</label>
                    <input
                    type='text'
                    name='name'
                    defaultValue={name}
                    onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='email'>Email:</label>
                    <input
                    type='email'
                    name='email'
                    defaultValue={email}
                    onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor='message'>Message:</label>
                    <input
                    name='message'
                    rows='6'
                    defaultValue={message}
                    onBlur={handleChange}
                    />
                </div>
                {errorMessage && (
                    <div>
                        <p className="errorAlert">{errorMessage}</p>
                    </div>
                )}
            </form>
        </section>
    )
}