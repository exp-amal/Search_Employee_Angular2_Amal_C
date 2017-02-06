import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {
  
  searchlist = [];
  Employees = [
    { Employee_Number: 1, Employee_Name: 'Superman', Designation: 'HR', Dates: '2016-12-12', Band: 'A' },
    { Employee_Number: 2, Employee_Name: 'Batman', Designation: 'Tester', Dates: '2015-12-12', Band: 'B' },
    { Employee_Number: 3, Employee_Name: 'BatGirl', Designation: 'Devoloper', Dates: '2015-12-12', Band: 'C' },
    { Employee_Number: 4, Employee_Name: 'Robin', Designation: 'BA', Dates: '2014-12-12', Band: 'D' },
    { Employee_Number: 5, Employee_Name: 'Flash', Designation: 'HR', Dates: '2017-12-12', Band: 'A' }
  ];
   getEmployee() {
    return this.Employees;
  }

  passArray(searchArray) {

    this.searchlist = searchArray;
  
  }
  getArray() {
    
    return this.searchlist;
  }


}
