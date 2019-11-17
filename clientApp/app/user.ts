export class User {
    constructor(
        public Name?: string,
        public Lastname?: string,
        public Age?: number,
        public Id?: number,
        public Address?: string,
        public Phone?: string,
        public Cities?: Array<string>
    ) { }

}