import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail, validateField } from '../utils/helpers';
import { useForm } from '@formspree/react';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [state, handleSubmit] = useForm('myyozwjv');

  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };

  const handleFormBlur = () => {
    if (!validateField(name) || !validateField(email) || !validateField(message)) {
      setErrorMessage('Please fill up all the fields');
    } else if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
    } else {
      setErrorMessage('');
    }
  };

  return (
    <div className="row">
      <h1 className="text-center fw-bold mb-3">Get in touch</h1>
      <div className="col-6 offset-3">
        <p>Fill out the form below and I&apos;ll get back to you as soon as possible.</p>
        <form className="form border-all-thin custom-shadow p-4" onSubmit={handleSubmit}>
          <div className="mb-3">
            <input
              value={email}
              className="form-control border-dark border-2"
              id="email"
              name="email"
              onChange={handleInputChange}
              onBlur={handleFormBlur}
              type="email"
              placeholder="email"
            />
          </div>
          <div className="mb-3">
            <input
              value={name}
              className="form-control border-dark border-2"
              id="name"
              name="name"
              onChange={handleInputChange}
              onBlur={handleFormBlur}
              type="text"
              placeholder="name"
            />
          </div>
          <div className="mb-3">
            <textarea
              value={message}
              className="form-control border-dark border-2"
              id="message"
              name="message"
              onChange={handleInputChange}
              onBlur={handleFormBlur}
              type="message"
              placeholder="message"
            />
          </div>
          <div>
            {errorMessage.length > 0 && <p className="alert alert-danger">{errorMessage}</p>}
            {state.succeeded && (
              <p className="alert alert-success">
                Thank you for your message. I&apos;ll get in touch soon.
              </p>
            )}
          </div>
          <div className="text-center mb-3">
            <button
              type="submit"
              className="btn background-blue text-white border-all-bold move"
              disabled={state.submitting || errorMessage.length > 0 ? true : false}>
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
