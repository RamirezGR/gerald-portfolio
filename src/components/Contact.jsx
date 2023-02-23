import React, {useRef, useState, useEffect} from 'react'
import emailjs from '@emailjs/browser';
import {ImLocation2} from 'react-icons/im'
import {FaPhoneAlt} from 'react-icons/fa'
import TextError from './Error/TextError'

const Contact = () => {
  const form = useRef();
  const initialValues = { user_name: "", user_email: "", message: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false)
  
  
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

    const sendEmail = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        setIsSubmit(true);
      };

      useEffect(() => {
        if (Object.keys(formErrors).length === 0 && isSubmit) {
          emailjs.sendForm('service_p1xqsis', 'template_v7m6hdg', form.current, '-gZQ_MBrEOHepB7T1')
        .then((result) => {
            alert("Sent!");
        }, (error) => {
            alert("Sending failed");
        });
        }
      })


      const validate = (values) => {
        const errors = {};
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
        if (!values.user_name) {
          errors.user_name = "Name is required!";
        }
        if (!values.user_email) {
          errors.user_email = "Email is required!";
        } else if (!regex.test(values.user_email)) {
          errors.user_email = "This is not a valid e-mail format!";
        }
        if (!values.message) {
          errors.message = "Message is required!";
        } else if (values.message.length < 10) {
          errors.message = "Message must be more than 4 characters";
        } else if (values.message.length > 150) {
          errors.message = "Message cannot exceed more than 10 characters";
        }
        return errors;
      };
    

  return (
    <div className='contact'>
      <h1 className="title">CONTACT ME</h1>
      <div className="grid">
        <div className="card location">
          <ImLocation2 className='contact-icon'/>
          <p>Muntinlupa, National Capital Region</p>
        </div>
        <div className="card phone">
          <FaPhoneAlt className='contact-icon'/>
          <p>0915-828-4460</p>
        </div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
            <input 
              type="text" 
              name="user_name" 
              placeholder='Name'
              value={formValues.user_name}
              onChange={handleChange}
            />
            <TextError name={formErrors.user_name}/>
            <input 
              type="email" 
              name="user_email" 
              placeholder='E-mail' 
              value={formValues.user_email}
              onChange={handleChange}
            />
            <TextError name={formErrors.user_email}/>
            <textarea 
              name="message" 
              id="" 
              cols="30" 
              rows="10" 
              placeholder='Message' 
              value={formValues.message}
              onChange={handleChange}
              >
            </textarea>
            <TextError name={formErrors.message}/>
            <button type="submit" id="send-btn">Send</button>
        </form>
    </div>
  )
}

export default Contact