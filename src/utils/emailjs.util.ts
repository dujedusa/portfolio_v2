import { EmailJSResponseStatus, init, send } from '@emailjs/browser';
import { Options } from "@emailjs/browser/es/types/Options";
import { SERVICE_ID, TEMPLATE_ID } from '@shared/constants';

export const emailJsInit = (options: Options): void => init(options);

export const sendEmail = (
    params?: Record<string, unknown>,
    options?: string | Options,
    fullfiled?: (response: EmailJSResponseStatus) => void,
    error?: (reason: unknown) => void) => {
    send(SERVICE_ID, TEMPLATE_ID, params, options) 
        .then(fullfiled, error);
};
