import React, { useState } from 'react';

// Here we import a helper function that will check if the email is valid
import { validateEmail, validateField } from '../utils/helpers';
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  // Create state variables for the fields in the form
  // We are also setting their initial values to an empty string
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [state, handleSubmit] = useForm("myyozwjv");

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

  const handleFormBlur = (e) => {
    if (!validateField(name) || !validateField(email) || !validateField(message)) {
      setErrorMessage('Please fill up all the fields');
    }
    else if (!validateEmail(email)) {
      setErrorMessage('Email is invalid');
    }
    else {
      setErrorMessage('')
    }
  }

  return (
    <div className="row">
      <h1 className="text-center fw-bold">Get in touch</h1>
      <div className="col-6 offset-3">
        <form className="form" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label" htmlFor="email">Email</label>
            <input
              value={email}
              className="form-control"
              id="email"
              name="email"
              onChange={handleInputChange}
              onBlur={handleFormBlur}
              type="email"
              placeholder="email"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="name">Name</label>
            <input
              value={name}
              className="form-control"
              id="name"
              name="name"
              onChange={handleInputChange}
              onBlur={handleFormBlur}
              type="text"
              placeholder="name"
            />
          </div>
          <div className="mb-3">
            <label className="form-label" htmlFor="message">Message</label>
            <textarea
              value={message}
              className="form-control"
              id="message"
              name="message"
              onChange={handleInputChange}
              onBlur={handleFormBlur}
              type="message"
              placeholder="message"
            />
          </div>
          <div>
            {errorMessage.length > 0 &&
              (<p className="alert alert-danger">{errorMessage}</p>)
            }
            {state.succeeded &&
              (<p className="alert alert-success">Thank you for your message. I'll get in touch soon.</p>)
            }
          </div>
          <div className="text-center mb-3">
            <button
              type="submit"
              className="btn btn-dark"
              disabled={state.submitting || errorMessage.length > 0 ? true : false}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
