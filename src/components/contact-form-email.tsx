import {
  Html,
  Body,
  Head,
  Heading,
  Hr,
  Container,
  Preview,
  Section,
  Text,
} from '@react-email/components';
import { Tailwind } from '@react-email/tailwind';

type Props = {
  message: string;
  email: string;
  name: string;
};

const ContactFormEmail = ({ message, email, name }: Props) => {
  return (
    <Html lang="en">
      <Head>
        <title>Contact Form</title>
      </Head>
      <Preview>New message from your Portfolio</Preview>
      <Tailwind>
        <Body key={message}>
          <Container>
            <Heading>Message from {name}</Heading>
            <Hr />
            <Section>
              <Text>
                The sender{"'"}s email is: {email}
              </Text>
            </Section>
            <Hr />
            <Section>
              <Text>{message}</Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default ContactFormEmail;
