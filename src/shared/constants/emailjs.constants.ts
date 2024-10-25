import { Options } from "@emailjs/browser/es/types/Options";

export const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
export const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
export const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;

export const EMAILJS_OPTIONS = {
    publicKey: PUBLIC_KEY
} as Options; 
