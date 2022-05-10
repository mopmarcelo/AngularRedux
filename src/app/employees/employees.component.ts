import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent implements OnInit, OnDestroy {
  user: any;
  storeSub$: Subscription = new Subscription();

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.storeSub$ = this.store.select('employees').subscribe((stateEmployees) => {
      this.user = stateEmployees;
    });
  }

  public onclickDispatch(){
    console.log('dispachou a action');
    this.store.dispatch({type: '[Employees] Set Logged in or out' });
  }

  ngOnDestroy(): void {
    this.storeSub$.unsubscribe();
  }

}
