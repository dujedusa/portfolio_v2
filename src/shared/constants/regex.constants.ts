// Regex taken from: https://stackoverflow.com/questions/46155/whats-the-best-way-to-validate-an-email-address-in-javascript
export const EMAIL_REGEX =
    /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
