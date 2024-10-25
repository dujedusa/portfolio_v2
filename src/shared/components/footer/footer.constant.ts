import { ROUTE } from "@shared/constants";
import { Icon, Link } from "@shared/models";

export const FOOTER_LINKS: Link[] = [
    new Link('https://www.facebook.com/duje.dusa', 'Author Facebook profile link', new Icon('facebook', 32, '#4267b2')),
    new Link('https://www.linkedin.com/in/duje-du%C5%A1a-673016227', 'Author LinkedIn profile link', new Icon('linkedin', 32, '#0077b5')),
    new Link(`/#/${ROUTE.contact}`, 'Contact the author via email', new Icon('envelope-solid', 32), '_self', ''),
];

export const FOOTER_TEXT = {
    socialMedia: 'Feeling more casual? Reach me out on social media.',
    email: 'Or just send an email.',
    attributions: 'Attributions'
};
