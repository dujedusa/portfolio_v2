import { Icon } from "@shared/models";

export class Link {
    constructor(public url: string,
        public title?: string,
        public icon?: Icon,
        public target = '_blank',
        public rel = 'noopener noreferrer') { }
}
