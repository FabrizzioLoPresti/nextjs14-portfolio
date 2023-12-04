'use client';

import { useState, useEffect } from 'react';
import { Input, Textarea, Button } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { IconSend } from '@tabler/icons-react';

type Props = {};

const ContactForm = (props: Props) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  return (
    <form action="" className="flex flex-col gap-y-4 w-full lg:w-1/3">
      <h3 className="text-2xl underline">Send me a message</h3>

      <div className="flex flex-col gap-y-2">
        <Input
          type="text"
          name="name"
          id="name"
          label="Name"
          labelPlacement="outside"
          color={theme === 'dark' ? 'secondary' : 'default'}
          classNames={
            {
              // input: 'bg-foreground/20',
            }
          }
        />
      </div>

      <div className="flex flex-col gap-y-2">
        <Input
          type="email"
          name="email"
          id="email"
          label="Email"
          labelPlacement="outside"
          description="We'll never share your email with anyone else."
          color={theme === 'dark' ? 'secondary' : 'default'}
        />
      </div>

      <div className="flex flex-col gap-y-2">
        {/* <label htmlFor="message">Message</label> */}
        <Textarea
          name="message"
          id="message"
          minRows={5}
          label="Your message"
          placeholder="Hi Fabrizzio, I would like to talk to you about..."
          className="w-full resize-none"
          color={theme === 'dark' ? 'secondary' : 'default'}
        />
      </div>

      <Button
        type="submit"
        className="bg-violet-600 py-2"
        endContent={<IconSend />}
        color="secondary"
      >
        Send Message
      </Button>
    </form>
  );
};

export default ContactForm;
