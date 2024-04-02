import React, { useState, useRef, useEffect } from 'react';
import ClipLoader from 'react-spinners/ClipLoader';
import { useForm, ValidationError } from '@formspree/react';

import { RiCheckLine } from 'react-icons/ri';
import Checked from './ui/Checked';

const Form = () => {
  const [formIsSubmitted, setFormIsSubmitted] = useState(false);

  const firstNameRef = useRef();
  const phoneNumberRef = useRef();
  const lastNameRef = useRef();
  const emailRef = useRef();

  const [state, handleSubmit] = useForm('xkndqrrp');

  useEffect(() => {
    if (state.succeeded) {
      setFormIsSubmitted(true);
    }
  }, [state.succeeded]);

  function handlePhoneChange(event) {
    const input = event.target.value;
    const numbersOnly = input.replace(/[^+\d]/g, '');

    event.target.value = numbersOnly;
  }

  return (
    <>
      {!formIsSubmitted && (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstName">FIRST NAME</label>
            <input
              type="text"
              id="firstName"
              ref={firstNameRef}
              name="firstName"
              placeholder="Enter Your Name"
            />
          </div>
          <div>
            <label htmlFor="lastName">LAST NAME</label>
            <input
              ref={lastNameRef}
              type="text"
              id="lastName"
              name="lastName"
              placeholder="Enter Your Last Name"
            />
          </div>
          <div>
            <label htmlFor="email">EMAIL &#65121;</label>
            <input
              ref={emailRef}
              type="text"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="email_validation"
            />
            {state?.errors && (
              <p className="email">
                &#65121; Please enter a valid email address.
              </p>
            )}
          </div>
          <div>
            <label htmlFor="phone">PHONE</label>
            <input
              onChange={handlePhoneChange}
              ref={phoneNumberRef}
              id="phone"
              name="phone"
              placeholder="Enter Your Phone"
              type="text"
              inputMode="numeric"
            />
          </div>

          <div className="centered-button">
            <button disabled={state.submitting}>
              {state.submitting ? (
                <ClipLoader color="#fff" size={20} />
              ) : (
                'Submit Form'
              )}
            </button>
          </div>
        </form>
      )}
      {formIsSubmitted && (
        <div className="submit-text">
          {/* <RiCheckLine /> */}
          <Checked />
          <p>Thanks for submitting. we will contact you as soon as possible</p>
        </div>
      )}
    </>
  );
};

export default Form;
