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
    emailjs.send('service_u5bt7qn', 'template_t7k01ka', values, 'etIeGgOXh5QqIIJ66').then(
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
      name: Yup.string().max(18, 'Must be 15 characters or less').required('Name is Required'),
      email: Yup.string().email('Invalid email address').required('Email is Required'),
      phone: Yup.string().min(10, 'Minimum of 10 numbers is required').required('Phone number is Required'),
      message: Yup.string().min(10, 'Minimum of 10 charecters is required').required('Message is Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      sendEmail(values, resetForm);
      resetForm();
    },
  });

  return (
    <section
      className='w-full max-w-6xl flex flex-col justify-center mt-8 mx-auto py-10 sm:py-20'
      ref={contactRef}
      id='contactContainer'>
      <h2 className='text-white font-extralight pt-5 text-3xl text-center mb-2'>
        Get <strong className='font-extrabold'>In Touch</strong>
      </h2>
      <div className='w-full flex flex-col md:flex-row'>
        <div className='md:w-3/5 p-4'>
          <h3 className='text-white font-extralight text-2xl mb-2 sm:mb-16'>Get In Touch</h3>
          <form
            ref={form}
            onSubmit={formik.handleSubmit}>
            <div className='mb-4 box-border w-full'>
              {formik.errors.name && formik.touched.name && <span className='text-red-500'>{formik.errors.name}</span>}
              <input
                className='border-none bg-[#333] w-full text-white py-6 px-4 block h-[2.375rem] text-base border border-r-[0.25rem] overflow-hidden'
                placeholder='Your name'
                type='text'
                id='name'
                error={formik.errors.name}
                onChange={formik.handleChange}
                fieldprops={formik.getFieldProps('name')}
                value={formik.values.name}
              />
            </div>

            <div className='mb-4 box-border w-full'>
              {formik.errors.email && formik.touched.email && <span className='text-red-500'>{formik.errors.email}</span>}
              <input
                className='border-none bg-[#333] w-full text-white py-6 px-4 block h-[2.375rem] text-base border border-r-[0.25rem] overflow-hidden'
                placeholder='Email'
                type='email'
                id='email'
                error={formik.errors.email}
                onChange={formik.handleChange}
                fieldprops={formik.getFieldProps('email')}
                value={formik.values.email}
              />
            </div>
            <div className='mb-4 box-border w-full'>
              {formik.errors.phone && formik.touched.phone && <span className='text-red-500'>{formik.errors.phone}</span>}
              <input
                className='border-none bg-[#333] w-full text-white py-6 px-4 block h-[2.375rem] text-base border border-r-[0.25rem] overflow-hidden'
                placeholder='Phone'
                type='text'
                id='phone'
                error={formik.errors.phone}
                onChange={formik.handleChange}
                fieldprops={formik.getFieldProps('phone')}
                value={formik.values.phone}
              />
            </div>
            <div className='mb-4 box-border w-full'>
              {formik.errors.message && formik.touched.message && <span className='text-red-500'>{formik.errors.message}</span>}
              <textarea
                className='border-none bg-[#333] w-full text-white py-6 px-4 block text-base border-r-[0.25rem] overflow-visible h-auto min-h-[250px] '
                placeholder='Write a Message'
                type='text'
                id='message'
                error={formik.errors.message}
                onChange={formik.handleChange}
                fieldprops={formik.getFieldProps('message')}
                value={formik.values.message}
              />
            </div>
            <div className='mb-4 box-border w-full'>
              {isSubmitted && <p className='text-[#bac964]'>Successfully submitted, you will hear from me soon.</p>}
              {isError ? (
                <span className='text-red-500'>Something went wrong</span>
              ) : (
                <button
                  className='py-4 px-6 tracking-wide text-xs uppercase text-white cursor-pointer border rounded-lg bg-[#bac964] border-[#bac964] '
                  type='submit'>
                  SEND MESSAGE
                </button>
              )}
            </div>
          </form>
        </div>
        <div className='md:w-2/5 p-4 md:pl-12 md:py-4'>
          <h3 className='text-white font-extralight text-2xl mb-2 sm:mb-16'>My Contact Details</h3>
          <ul className='text-left p-0 m-0'>
            <li className='list-none mb-5 font-light text-base text-white'>
              <span className='text-[#2c3e50] block uppercase mb-1 font-medium text-xs'>Email</span> bucibot@gmail.com
            </li>
            <li className='list-none mb-5 font-light text-base text-white'>
              <span className='text-[#2c3e50] block uppercase mb-1 font-medium text-xs'>Address</span> South Africa <br /> Gauteng <br />{' '}
              Johannesburg <br />
              1804 <br />
            </li>
          </ul>
        </div>
      </div>
    </section>
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
