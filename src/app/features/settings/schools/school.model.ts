import { BaseEntity } from 'src/app/core/models/base.model';

export interface School extends BaseEntity{
    id:number;
    name:string;
    district:string;
}