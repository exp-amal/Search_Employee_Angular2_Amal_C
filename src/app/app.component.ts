import { Component } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { EmployeeService } from './employee.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  type: String = 'text';
  Flag = false;
  searchby: String[] = ["Employee_Number", "Employee_Name", "Designation", "Dates", "Band"];

  filterOperator: String[] = [];

  searchArray = [];
  searchArray1 = [];
  myForm: FormGroup;
  constructor(private service: EmployeeService) {
    this.myForm = new FormGroup({
      'search': new FormControl('', [Validators.required]),
      'toDate': new FormControl('')
    });
  }
  val1;
  val2;
  onChange1(val) {
    this.type = 'text';
    this.val1 = val;
    this.Flag = false;

    if (val == 'Employee_Number') {
      this.filterOperator = ["<", ">", "<=", ">=", "=", "<>"];
    }
    else if (val == 'Employee_Name') {
      this.filterOperator = ["=", "<>", "LIKE"];
    }
    else if (val == 'Designation') {
      this.filterOperator = ["IS", "IS NOT"];
    }
    else if (val == 'Dates') {
      this.type = 'date';
      this.filterOperator = ["BETWEEN", "=", ">=", "<=", ">", "<"];
    }
    else if (val == 'Band') {
      this.filterOperator = ["IS", "IS NOT"];
    }
    else {
      this.filterOperator = [];
    }
  }
  onChange2(val) {

    if (val == 'BETWEEN') {
      this.Flag = true;
    }
    else{
      this.Flag = false;
    }
    this.val2 = val;

  }
  viewAll() {
    this.searchArray = this.service.getEmployee();

  }
  onClick() {

    this.searchArray = [];
    this.searchArray1 = this.service.getEmployee();
    let str = this.myForm.value;
    if (this.val1 == 'Employee_Number') {
      switch (this.val2) {
        case '<':
          for (let i of this.searchArray1) {
            if (i.Employee_Number < str.search) {
              this.searchArray.push(i);
            }
          } break;
        case '>':
          for (let i of this.searchArray1) {
            if (i.Employee_Number > str.search) {
              this.searchArray.push(i);
            }
          } break;
        case '<=':
          for (let i of this.searchArray1) {
            if (i.Employee_Number <= str.search) {
              this.searchArray.push(i);
            }
          } break;
        case '>=':
          for (let i of this.searchArray1) {
            if (i.Employee_Number >= str.search) {
              this.searchArray.push(i);
            }
          } break;
        case '=':
          for (let i of this.searchArray1) {
            if (i.Employee_Number == str.search) {
              this.searchArray.push(i);
            }
          } break;
        case '<>':
          for (let i of this.searchArray1) {
            if (i.Employee_Number != str.search) {
              this.searchArray.push(i);
            }
          } break;
      }
    }
    else if (this.val1 == 'Employee_Name') {
      switch (this.val2) {
        case '<>':
          for (let i of this.searchArray1) {
            if (i.Employee_Name != str.search) {
              this.searchArray.push(i);
            }
          } break;
        case '=':
          for (let i of this.searchArray1) {
            if (i.Employee_Name == str.search) {
              this.searchArray.push(i);
            }
          } break;
        case 'LIKE':
          for (let i of this.searchArray1) {
            if ((i.Employee_Name.search(str.search)) >= 0) {
              this.searchArray.push(i);
            }
          } break;
      }
    }
    else if (this.val1 == 'Designation') {
      switch (this.val2) {
        case 'IS':
          for (let i of this.searchArray1) {
            if (i.Designation == str.search) {

              this.searchArray.push(i);
            }
          } break;
        case 'IS NOT':
          for (let i of this.searchArray1) {
            if (i.Designation != str.search) {
              this.searchArray.push(i);
            }
          } break;
      }
    }
    else if (this.val1 == 'Band') {

      switch (this.val2) {
        case 'IS':
          for (let i of this.searchArray1) {
            if (i.Band == str.search) {
              this.searchArray.push(i);
            }
          } break;
        case 'IS NOT':
          for (let i of this.searchArray1) {
            if (i.Band != str.search) {
              this.searchArray.push(i);
            }
          } break;
      }
    }
    else if (this.val1 == 'Dates') {
      switch (this.val2) {
        case '=':
          for (let i of this.searchArray1) {
            if (i.Dates == str.search) {
              this.searchArray.push(i);
            }
          } break;
        case '<=':
          for (let i of this.searchArray1) {
            if (i.Dates <= str.search) {
              this.searchArray.push(i);
            }
          } break;
        case '>=':
          for (let i of this.searchArray1) {
            if (i.Dates >= str.search) {
              this.searchArray.push(i);
            }
          } break;
        case '>':
          for (let i of this.searchArray1) {
            if (i.Dates > str.search) {
              this.searchArray.push(i);
            }
          } break;
        case '<':
          for (let i of this.searchArray1) {
            if (i.Dates < str.search) {
              this.searchArray.push(i);
            }
          } break;
        case 'BETWEEN':
          console.log(str.toDate);
          console.log(str.search);
          for (let i of this.searchArray1) {

            if ((i.Dates > str.search) && (i.Dates < str.toDate)) {
              console.log("hai");
              this.searchArray.push(i);
            }
          } break;

      }
      console.log(this.searchArray);
    }
  }

}
