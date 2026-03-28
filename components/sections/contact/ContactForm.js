import React, { useEffect, useState } from 'react';
import {
  Button, Flex, FormControl, FormErrorMessage,
  FormLabel, Input, Textarea, useColorModeValue, useToast,
} from '@chakra-ui/react';
import { Formik, Form, Field } from 'formik';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const toast = useToast();
  const [formSent, setFormSent] = useState(false);

  const formBg      = useColorModeValue('#ffffff',                   'rgba(255,255,255,0.025)');
  const formBorder  = useColorModeValue('rgba(0,0,0,0.08)',          'rgba(255,255,255,0.07)');
  const inputBg     = useColorModeValue('rgba(0,0,0,0.03)',          'rgba(255,255,255,0.04)');
  const inputBorder = useColorModeValue('rgba(0,0,0,0.10)',          'rgba(255,255,255,0.09)');
  const inputColor  = useColorModeValue('#0f172a',                   'rgba(255,255,255,0.92)');
  const placeholder = useColorModeValue('rgba(0,0,0,0.38)',          'rgba(255,255,255,0.35)');
  const labelColor  = useColorModeValue('rgba(0,0,0,0.6)',           'rgba(255,255,255,0.6)');
  const hoverBorder = useColorModeValue('rgba(0,0,0,0.18)',          'rgba(255,255,255,0.18)');
  const focusBorder = useColorModeValue('rgba(28,78,216,0.55)',      'rgba(96,165,250,0.5)');
  const focusShadow = useColorModeValue('0 0 0 1px rgba(28,78,216,0.2)', '0 0 0 1px rgba(96,165,250,0.25)');
  const focusBg     = useColorModeValue('rgba(28,78,216,0.03)',      'rgba(96,165,250,0.04)');

  const inputStyles = {
    bg: inputBg,
    border: `1px solid ${inputBorder}`,
    borderRadius: '10px',
    color: inputColor,
    fontSize: '15px',
    fontFamily: "'DM Sans', sans-serif",
    _placeholder: { color: placeholder },
    _hover: { borderColor: hoverBorder },
    _focus: { borderColor: focusBorder, boxShadow: focusShadow, bg: focusBg },
  };

  const labelStyles = {
    fontSize: '12px',
    fontWeight: '500',
    letterSpacing: '0.08em',
    textTransform: 'uppercase',
    color: labelColor,
    mb: 2,
  };

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
        toast({ title: 'Message Sent!', description: 'Thank you for your message. I will get back to you as soon as possible.', status: 'success', duration: 5000, isClosable: true });
      }
    } catch {
      toast({ title: 'Error Sending Message', description: 'There was an error sending your message. Please try again later.', status: 'error', duration: 5000, isClosable: true });
    } finally {
      setFormSent(false);
    }
  };

  useEffect(() => {
    try { emailjs.init(process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY); } catch (e) { console.log(e); }
  }, []);

  return (
    <Flex
      flexDir="column"
      bg={formBg}
      border={`1px solid ${formBorder}`}
      borderRadius="16px"
      p={['24px', '32px']}
      backdropFilter="blur(12px)"
      w={['90vw', '70vw', '480px']}
      boxShadow={`0 1px 3px rgba(0,0,0,0.06), 0 4px 12px rgba(0,0,0,0.04)`}
    >
      <Formik
        initialValues={{ name: '', email: '', subject: '', body: '' }}
        validate={handleValidation}
        onSubmit={(values, { setSubmitting }) => { setSubmitting(true); handleSubmit(values); }}
      >
        {() => (
          <Form>
            <Flex gap={4} flexDir={['column', 'row']}>
              <Field name="name">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.name && form.touched.name} flex={1}>
                    <FormLabel {...labelStyles}>Name</FormLabel>
                    <Input {...field} {...inputStyles} type="text" id="name" placeholder="Full Name" />
                    <FormErrorMessage fontSize="12px">{form.errors.name}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
              <Field name="email">
                {({ field, form }) => (
                  <FormControl isInvalid={form.errors.email && form.touched.email} flex={1}>
                    <FormLabel {...labelStyles}>Email</FormLabel>
                    <Input {...field} {...inputStyles} type="text" id="email" placeholder="your@email.com" />
                    <FormErrorMessage fontSize="12px">{form.errors.email}</FormErrorMessage>
                  </FormControl>
                )}
              </Field>
            </Flex>

            <Field name="subject">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.subject && form.touched.subject} mt={5}>
                  <FormLabel {...labelStyles}>Subject</FormLabel>
                  <Input {...field} {...inputStyles} type="text" id="subject" placeholder="What's this about?" />
                  <FormErrorMessage fontSize="12px">{form.errors.subject}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Field name="body">
              {({ field, form }) => (
                <FormControl isInvalid={form.errors.body && form.touched.body} mt={5}>
                  <FormLabel {...labelStyles}>Message</FormLabel>
                  <Textarea {...field} {...inputStyles} id="body" placeholder="Tell me about your project or opportunity..." rows={5} resize="none" />
                  <FormErrorMessage fontSize="12px">{form.errors.body}</FormErrorMessage>
                </FormControl>
              )}
            </Field>

            <Flex mt={7} justifyContent="flex-end">
              <Button
                type="submit"
                size="md"
                bg="secondary"
                color="white"
                fontWeight="600"
                px={7}
                borderRadius="full"
                isLoading={formSent}
                fontFamily="'DM Sans', sans-serif"
                _hover={{ bg: '#3b82f6', transform: 'translateY(-2px)', boxShadow: '0 8px 28px rgba(28,78,216,0.3)' }}
              >
                Send Message
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};

export default ContactForm;
