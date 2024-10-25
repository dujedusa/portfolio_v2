import { Link } from "@shared/models";

export class Experience {
    constructor(
        public title: string,
        public description: string | string[],
        public timestamp?: string,
        public listItems?: string[],
        public link?: Link
    ) { }
}
