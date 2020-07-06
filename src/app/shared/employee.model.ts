//export interface Employee{
  //  id:number;
    //name:string;
    //email:string;
    //DOB:Date;
    //salary:number;
//}
export class Employee {
    constructor(
        public id:number,
        public name:string,
        public email:string,
        public dob:Date,
        public salary:number,
        public contactno:number,
        public department:string,
        public jobtype:string,
        public doj:Date
        ){}
}