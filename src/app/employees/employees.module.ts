import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EmployeesComponent } from './employees.component';
import { StoreModule } from '@ngrx/store';
import { employeeReducer } from './state/employee.reducer';

@NgModule({
  declarations: [
    EmployeesComponent
  ],
  imports: [
    CommonModule,
    StoreModule.forFeature('employees', employeeReducer)
  ],
  exports: [
    EmployeesComponent
  ],
  providers: [
  ]
})
export class EmployeesModule { }
