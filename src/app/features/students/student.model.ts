import { BaseEntity } from './../../core/models/base.model';

export interface Student extends BaseEntity{
    id:number;
    fullName:string;
    email:string;
    gender:string;
    phoneNumber:string;
    school:string;
    address:string;
    image:string;
    guardianName:string;
    guardianPhoneNumber:string;
    atendance:any[];
    classSubscription: any[];
}
