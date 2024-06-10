export enum Gender {
  Male = 'male',
  Female = 'female'
}

export interface Employee {
  empId?: number
  firstName: string;
  lastName: string;
  phonenumber: number;
  address: string;
  age: number;
  departmentId: number;
  gender: Gender;
  departmentName: string;
}



