import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { useFormik } from 'formik';
import { useNav } from '../hooks/useNav';

const Contact = () => {
  const contactRef = useNav('Contact');
  const form = useRef();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isError, setIsError] = useState(false);

  const sendEmail = (values, resetForm) => {
    emailjs
      .send('service_u5bt7qn', 'template_t7k01ka', values, 'etIeGgOXh5QqIIJ66')
      .then(
        () => {
          setIsSubmitted(true);
          setTimeout(() => {
            setIsSubmitted(false);
          }, 100);

          resetForm();
        },
        () => {
          setIsError(true);

          setTimeout(() => {
            setIsError(false);
          }, 100);
        },
      );
  };

  const formik = useFormik({
    initialValues: { name: '', email: '', phone: '', message: '' },
    validationSchema: Yup.object({
      name: Yup.string()
        .max(18, 'Must be 15 characters or less')
        .required('Name is Required'),
      email: Yup.string()
        .email('Invalid email address')
        .required('Email is Required'),
      phone: Yup.string()
        .min(10, 'Minimum of 10 numbers is required')
        .required('Phone number is Required'),
      message: Yup.string()
        .min(10, 'Minimum of 10 charecters is required')
        .required('Message is Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      sendEmail(values, resetForm);
      resetForm();
    },
  });

  return (
    <Container ref={contactRef} id="contactContainer">
      <Heading>
        Get <strong>In Touch</strong>
      </Heading>
      <Content>
        <ContactForm>
          <Title>Get In Touch</Title>
          <form ref={form} onSubmit={formik.handleSubmit}>
            <FormGroup>
              {formik.errors.name && formik.touched.name && (
                <span>{formik.errors.name}</span>
              )}
              <input
                placeholder="Your name"
                type="text"
                id="name"
                error={formik.errors.name}
                onChange={formik.handleChange}
                fieldprops={formik.getFieldProps('name')}
                value={formik.values.name}
              />
            </FormGroup>

            <FormGroup>
              {formik.errors.email && formik.touched.email && (
                <span>{formik.errors.email}</span>
              )}
              <input
                placeholder="Email"
                type="email"
                id="email"
                error={formik.errors.email}
                onChange={formik.handleChange}
                fieldprops={formik.getFieldProps('email')}
                value={formik.values.email}
              />
            </FormGroup>
            <FormGroup>
              {formik.errors.phone && formik.touched.phone && (
                <span>{formik.errors.phone}</span>
              )}
              <input
                placeholder="Phone"
                type="text"
                id="phone"
                error={formik.errors.phone}
                onChange={formik.handleChange}
                fieldprops={formik.getFieldProps('phone')}
                value={formik.values.phone}
              />
            </FormGroup>
            <FormGroup>
              {formik.errors.message && formik.touched.message && (
                <span>{formik.errors.message}</span>
              )}
              <textarea
                placeholder="Write a Message"
                type="text"
                id="message"
                error={formik.errors.message}
                onChange={formik.handleChange}
                fieldprops={formik.getFieldProps('message')}
                value={formik.values.message}
              />
            </FormGroup>
            <FormGroup>
              {isSubmitted && <p>Successfully submitted, you will hear from me soon.</p>}
              {isError ? (
                <span>Something went wrong</span>
              ) : (
                <SubmitButton type="submit">SEND MESSAGE</SubmitButton>
              )}
            </FormGroup>
          </form>
        </ContactForm>
        <ContactInfo>
          <Title>My Contact Details</Title>
          <List>
            <ListItem>
              <span>Email</span> bucibot@gmail.com
            </ListItem>
            <ListItem>
              <span>Address</span>Terenure AH, <br /> Kempton Park, <br />
              1619 <br />
            </ListItem>
          </List>
        </ContactInfo>
      </Content>
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  max-width: 1140px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  padding: 5rem 0;
`;

const Heading = styled.h2`
  margin-bottom: 0.5rem;
  line-height: 1.2;
  color: #fff;
  font-weight: 200;
  padding-top: 20px;
  font-size: 30px;
  text-align: center;
`;

const Content = styled.div`
  width: 100%;
  display: flex;
`;

const Title = styled.h3`
  color: #fff;
  font-weight: 200;
  font-size: 1.75rem;
  margin-bottom: 4rem;
`;

const SubmitButton = styled.button`
  cursor: pointer;
  color: #fff;
  background-color: #bac964;
  border-color: #bac964;
  border-style: solid;
  border-radius: 8px;
  text-transform: uppercase;
  font-size: 12px;
  letter-spacing: 0.2rem;
  padding: 1rem 1.5rem;
  margin-left: 5px;
`;

const ContactForm = styled.div`
  width: 60%;
  padding-right: 15px;
  padding-left: 15px;

  & form {
    & span {
      color: #e81717c7;
    }

    & p {
      color: #bac964;
    }
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
  box-sizing: border-box;
  width: 100%;

  & input {
    border: none;
    background: #333;
    color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    padding: 1.5rem 1rem;
    display: block;
    width: -webkit-fill-available;
    width: -moz-available;
    height: calc(2.25rem + 2px);
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    overflow: visible;
  }
  input:-webkit-autofill,
  input:-webkit-autofill:hover,
  input:-webkit-autofill:focus,
  input:-internal-autofill-selected,
  select:-webkit-autofill,
  select:-webkit-autofill:hover,
  select:-webkit-autofill:focus {
    border: none;
    border-radius: 0.25rem;
    -webkit-text-fill-color: #fff;
    box-shadow: 0 0 0px 1000px #333 inset;
    -webkit-box-shadow: 0 0 0px 1000px #333 inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  & textarea {
    border: none;
    background: #333;
    color: #fff;
    box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1);
    padding: 1.5rem 1rem;
    display: block;
    width: -webkit-fill-available;
    width: -moz-available;
    height: calc(2.25rem + 2px);
    font-size: 1rem;
    line-height: 1.5;
    border-radius: 0.25rem;
    overflow: visible;
    height: auto;
    min-height: 250px;
    font-family: inherit;
  }
`;

const ContactInfo = styled.div`
  width: 40%;
  padding-left: 3rem;
`;

const List = styled.ul`
  text-align: left;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  list-style: none;
  margin-bottom: 20px;
  color: rgba(255, 255, 255, 0.4);
  line-height: 1.7;
  font-size: 16px;
  font-weight: 300;

  & span {
    color: #2c3e50;
    letter-spacing: 0.1em;
    font-size: 12px;
    font-weight: 500;
    margin-bottom: 5px;
    display: block;
    text-transform: uppercase;
  }
`;

export default Contact;
