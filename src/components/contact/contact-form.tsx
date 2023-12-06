'use client';

import { useState, useEffect } from 'react';
import { useTransition } from 'react';
import { Input, Textarea } from '@nextui-org/react';
import { useTheme } from 'next-themes';
import { IconMailCheck } from '@tabler/icons-react';
import { useForm } from 'react-hook-form';
import { type Message, sendMessageAction } from '@/actions/send-message-action';
import SubmitButton from './submit-button';

type Props = {};

const ErrorFormComponent = ({
  message,
  error,
}: {
  message: string;
  error?: boolean;
}) => {
  if (error) {
    return <span className="text-red-500 text-xs m-0">{message}</span>;
  }
  return (
    <span className="text-[#67CE7E] text-lg m-0 flex flex-row gap-x-2 items-center justify-center">
      {message}
      <IconMailCheck />
    </span>
  );
};

const ContactForm = (props: Props) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<Message>();
  const [isPending, startTransition] = useTransition();
  const [errorMessage, setErrorMessage] = useState<{
    message: string;
    error?: boolean;
  } | null>(null);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const onSubmit = handleSubmit((data) => {
    startTransition(async () => {
      const response = await sendMessageAction(data);

      if (response.status !== 200) {
        return setErrorMessage({
          message: response.message,
          error: true,
        });
      }

      console.log(response);
      setErrorMessage({
        message: response.message,
        error: false,
      });
      setTimeout(() => {
        setErrorMessage(null);
      }, 5000);
      reset();
    });
  });

  return (
    <form onSubmit={onSubmit} className="flex flex-col gap-y-4 w-full lg:w-1/3">
      <h3 className="text-2xl underline">Send me a message</h3>

      <div className="flex flex-col gap-y-2">
        <Input
          type="text"
          id="name"
          label="Name"
          labelPlacement="outside"
          color={theme === 'dark' ? 'secondary' : 'default'}
          {...register('name', {
            required: {
              value: true,
              message: 'Your name is required',
            },
          })}
        />
        {errors.name && (
          <ErrorFormComponent
            message={errors.name.message ?? ''}
            error={true}
          />
        )}
      </div>

      <div className="flex flex-col gap-y-2">
        <Input
          type="email"
          id="email"
          label="Email"
          labelPlacement="outside"
          description="We'll never share your email with anyone else."
          color={theme === 'dark' ? 'secondary' : 'default'}
          {...register('email', {
            required: {
              value: true,
              message: 'E-Mail is required',
            },
          })}
        />
        {errors.email && (
          <ErrorFormComponent
            message={errors.email.message ?? ''}
            error={true}
          />
        )}
      </div>

      <div className="flex flex-col gap-y-2">
        {/* <label htmlFor="message">Message</label> */}
        <Textarea
          id="message"
          minRows={5}
          label="Your message"
          placeholder="Hi Fabrizzio, I would like to talk to you about..."
          className="w-full resize-none"
          color={theme === 'dark' ? 'secondary' : 'default'}
          {...register('message', {
            required: {
              value: true,
              message: 'Message is required',
            },
          })}
        />
        {errors.message && (
          <ErrorFormComponent
            message={errors.message.message ?? ''}
            error={true}
          />
        )}
      </div>

      <SubmitButton isPending={isPending} />

      {errorMessage && (
        <ErrorFormComponent
          message={errorMessage.message}
          error={errorMessage.error}
        />
      )}
    </form>
  );
};

export default ContactForm;
