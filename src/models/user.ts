import { ObjectId } from "mongodb";

export default class User {
    constructor(
        public name: string, 
        public uuid: string, 
        public age: string, 
        public phoneNumber: string, 
        public username: string,
        public password: string, 
        public id?: ObjectId
    ) {

    }
}