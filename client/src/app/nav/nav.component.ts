import { Component, OnInit } from '@angular/core';
import { AccountService } from '../_services/account.service';
import { observableToBeFn } from 'rxjs/internal/testing/TestScheduler';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {}

  constructor(public accountServices: AccountService) { }

  ngOnInit(): void {
  }

  login() {
    this.accountServices.login(this.model).subscribe({
      next: response => {
        console.log(response);
      },
      error: error => console.log(error)
    })
  }

  logout() {
    this.accountServices.logout();
  }
}
