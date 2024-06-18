// models/expense-claim.model.ts


import {expenseClaimEntry} from "./expenseClaimEntry";

export interface expense {
  expenseClaimId: number;
  dates: string; // Use string for date handling
  description: string;
  total: number;
  statuss: string;
  employeeId: number;
  entries: expenseClaimEntry[];

}
