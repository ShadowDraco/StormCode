import { Container } from '@mantine/core';
import ContactForm from '../components/contact/ContactForm'
import Services from '../components/contact/Services'

export default function page() {
  return (
    <Container mt={100}>
      <Services />
      <ContactForm />
    </Container>
   
  );
}