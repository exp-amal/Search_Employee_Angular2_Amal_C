import { Component, OnInit, Input } from '@angular/core';
import { EmployeeService } from '../employee.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-sresult',
  templateUrl: './sresult.component.html',
  styleUrls: ['./sresult.component.css']
})
export class SresultComponent implements OnInit {
  @Input() searchArray1 = [];
  constructor(private service: EmployeeService) {
    this.searchArray1 = this.service.getArray();
    console.log(this.searchArray1);
  }
  ngOnInit() {
  }
}
