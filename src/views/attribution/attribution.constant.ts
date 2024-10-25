import { Link } from "@shared/models";

const FA_LINK: Link = new Link('https://fontawesome.com', 'Font Awesome');
const FA__LICENSE_LINK: Link = new Link('https://fontawesome.com/license/free', 'Font Awesome Free License');

export const FA__ATTRIBUTION_DESCRIPTION = `
Following icons used on this site are provided by
    <a
        key=${FA_LINK.url}
        href=${FA_LINK.url}
        target=${FA_LINK.target}
        rel=${FA_LINK.rel}
        title=${FA_LINK.title}
        tabIndex=${0}
    >
        <strong>${FA_LINK.title}</strong>, licensed under the
    </a>
    <a
        key=${FA__LICENSE_LINK.url}
        href=${FA__LICENSE_LINK.url}
        target=${FA__LICENSE_LINK.target}
        rel=${FA__LICENSE_LINK.rel}
        title=${FA__LICENSE_LINK.title}
        tabIndex=${0}
    >
        <strong>${FA__LICENSE_LINK.title}</strong>:
    </a>
`;

export const FA_ICON_LINKS: Link[] = [
    new Link('https://fontawesome.com/v5.15/icons/angular?style=brands', 'Angular icon'),
    new Link('https://fontawesome.com/v5.15/icons/react?style=brands', 'React icon'),
    new Link('https://fontawesome.com/v5.15/icons/html5?style=brands', 'HTML5 icon'),
    new Link('https://fontawesome.com/v5.15/icons/css3-alt?style=brands', 'CSS3 icon'),
    new Link('https://fontawesome.com/v5.15/icons/js-square?style=brands', 'JavaScript icon'),
    new Link('https://fontawesome.com/v5.15/icons/git-alt?style=brands', 'GIT icon'),
    new Link('https://fontawesome.com/v5.15/icons/facebook?style=brands', 'Facebook icon'),
    new Link('https://fontawesome.com/v5.15/icons/linkedin?style=brands', 'LinkedIn icon'),
    new Link('https://fontawesome.com/icons/envelope?f=classic&s=solid', 'Envelope icon'),
    new Link('https://fontawesome.com/icons/circle-radiation?f=classic&s=solid', 'Radiation icon'),
    new Link('https://fontawesome.com/icons/circle-check?f=classic&s=regular', 'Circle check icon'),
    new Link('https://fontawesome.com/icons/circle-xmark?f=classic&s=regular', 'Circle xmark icon'),
    new Link('https://fontawesome.com/icons/xmark?f=classic&s=solid', 'Xmark icon'),
];

export const OTHER_ATTRIBUTION_DESCRIPTION = 'Other icons used on this site are as follows:';

export const STENCIL_ATTRIBUTION = `
<span>&#8618;</span>
<div>
    <span>
        "Stencil.js icon" collection by Gil Barbara, licensed under
    </span>
    <a
        href="https://creativecommons.org/publicdomain/zero/1.0/deed.en"
        target="_blank"
        rel="noopener noreferrer"
        title="CC0 1.0"
        tabIndex={0}
    >
        <strong> CC0 1.0</strong>.
    </a>
    <span> Available at</span>
    <a
        href="https://www.streamlinehq.com/icons/download/stenciljs--31103"
        target="_blank"
        rel="noopener noreferrer"
        title="CC0 1.0"
        tabIndex={0}
    >
        <strong> SVG Logos</strong>.
    </a>
</div>
`;

export const VS_CODE_ATTRIBUTION = `
<span>&#8618;</span>
<div>
    <span>
        "Visual Studio Code version 1.35 icon" by Microsoft. Available at
    </span>
    <a
        href="https://code.visualstudio.com/brand"
        target="_blank"
        rel="noopener noreferrer"
        title="Visual Studio Code Brand"
        tabIndex={0}
    >
        <strong> Visual Studio Code Brand</strong>.
    </a>
</div>                
`;

export const TS_ATTRIBUTION = `
<span>&#8618;</span>
<div>
    <span>
        "TypeScript logo 2020" by Microsoft, vectorized by Vulphere.
        Available at
    </span>
    <a
        href="https://commons.wikimedia.org/wiki/File:Typescript_logo_2020.svg"
        target="_blank"
        rel="noopener noreferrer"
        title="Wikimedia Commons"
        tabIndex={0}
    >
        <strong> Wikimedia Commons</strong>.
    </a>
</div>
`;
