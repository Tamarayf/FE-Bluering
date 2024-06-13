export interface Leave {
  leaveId?:number;
  leaveTypeId: number;
  fromDate: string;
  toDate: string;
  numberOfDays: number;
  note: string;
  employeeId: number;
}
