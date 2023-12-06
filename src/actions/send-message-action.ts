'use server';

import React from 'react';
import { Resend } from 'resend';
import { renderAsync } from "@react-email/render";
import ContactFormEmail from '@/components/contact/contact-form-email';

const resend = new Resend(process.env.RESEND_API_KEY);

export type Message = {
  name: string;
  email: string;
  message: string;
};

export const sendMessageAction = async (formData: Message) => {
  try {
    const html = await renderAsync(React.createElement(ContactFormEmail, formData));

    const { data, error } = await resend.emails.send({
      from: 'Portfolio <onboarding@resend.dev>',
      to: 'fabrizziolopresti1999@gmail.com',
      reply_to: formData.email,
      subject: 'New message from portfolio',
      html
    });

    if(error) throw new Error(error.message);

    return {
      message: 'Message sent successfully',
      status: 200,
    }
  } catch (error) {
    return {
        message: 'Error sending message',
        status: 500
    }
  }
};
