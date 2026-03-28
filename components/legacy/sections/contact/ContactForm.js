import React, { useEffect, useState } from 'react';
import {
  Flex, FormControl, FormLabel, FormErrorMessage,
  Input, Button, Textarea, useToast,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const toast = useToast();
  const [formSent, setFormSent] = useState(false);

  const handleValidation = (values) => {
    const errors = {};
    if (!values.name)    errors.name    = 'Your Full Name is Required';
    if (!values.subject) errors.subject = 'A Subject is Required';
    if (!values.email) {
      errors.email = 'An Email is Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Invalid Email Address';
    }
    if (!values.body) errors.body = 'A Message is Required';
    return errors;
  };

  const handleSubmit = async (values) => {
    try {
      const serviceID  = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID;
      const templateID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID;
      const templateParams = {
        from_name: values.name,
        to_name:   'Michael Volakis',
        subject:   values.subject,
        message:   values.body,
        email:     values.email,
      };
      setFormSent(true);
      const res = await emailjs.send(serviceID, templateID, templateParams);
      if (res.status === 200) {
        toast({ title: 'Message Sent!', description: 'Thank you for your message.', status: 'success', duration: 5000, isClosable: true });
      }
    } catch {
      toast({ title: 'Error Sending Message', description: 'Please try again later.', status: 'error', duration: 5000, isClosable: true });
    } finally {
      setFormSent(false);
    }
  };

  useEffect(() => {
    try { emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY); } catch (e) { console.log(e); }
  }, []);

  return (
    <Flex flexDir={'column'} bgColor={'#1f264d'} p={'20px'} rounded={'md'} color={'white'} w={['80vw', '60vw', '35vw']}>
      <Formik
        initialValues={{ name: '', email: '', subject: '', body: '' }}
        validate={handleValidation}
        onSubmit={(values, { setSubmitting }) => { setSubmitting(true); handleSubmit(values); }}
      >
        {() => (
          <Form>
            <Field name="name">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.name && form.touched.name} mt={'20px'}>
                  <FormLabel color={'secondary'} htmlFor="name">Name</FormLabel>
                  <Input {...field} type="text" id="name" color={'purple.300'} placeholder="Your Full Name" bgColor={'primary'} />
                  <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.email && form.touched.email} mt={'20px'}>
                  <FormLabel color={'secondary'} htmlFor="email">Email Address</FormLabel>
                  <Input {...field} type="text" id="email" color={'purple.300'} placeholder="Your Email Address" bgColor={'primary'} />
                  <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="subject">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.subject && form.touched.subject} mt={'20px'}>
                  <FormLabel color={'secondary'} htmlFor="subject">Subject</FormLabel>
                  <Input {...field} type="text" id="subject" color={'purple.300'} placeholder="Subject" bgColor={'blue.800'} />
                  <FormErrorMessage>{form.errors.subject}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field name="body">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.body && form.touched.body} mt={'20px'}>
                  <FormLabel color={'secondary'} htmlFor="body">Message</FormLabel>
                  <Textarea {...field} id="body" color={'purple.300'} bgColor={'blue.800'} />
                  <FormErrorMessage>{form.errors.body}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Flex mt={'40px'} justifyContent={'flex-end'} mb={'20px'}>
              <Button size="lg" bgColor={'secondary'} color={'blue.900'} isLoading={formSent} type="submit" _hover={{ color: 'primary', bgColor: 'green.500' }}>
                Submit
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};
export default ContactForm;
