import { RegisterOptions } from "react-hook-form";
import { EMAIL_REGEX } from "@shared/constants";

import { ContactForm } from "./contact.model";

export const CONTACT_TEXT = {
    title: 'Get in touch',
    firstSubtitle: 'Want to collaborate, or have any questions?',
    secondSubtitle: 'Feel free to contact me without any hesitation.',
};

export const CONTACT_FORM_VALIDATION: Record<keyof ContactForm, RegisterOptions<ContactForm>> = {
    fullName: {
        required: 'Name is required',
        minLength: {
            value: 3,
            message: 'Full name must be at least 3 characters'
        }
    },
    email: {
        required: 'Email is required',
        pattern: {
            value: EMAIL_REGEX,
            message: 'Enter a valid email address'
        }
    },
    subject: {
        required: 'Subject is required',
        maxLength: {
            value: 100,
            message: 'Subject cannot exceed 100 characters',
        },
    },
    message: {
        required: 'Message is required',
        minLength: {
            value: 10,
            message: 'Message must be at least 10 characters',
        },
        maxLength: {
            value: 1000,
            message: 'Message cannot exceed 1000 characters',
        },
    },
};
