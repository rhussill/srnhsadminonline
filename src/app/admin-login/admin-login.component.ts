import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from '../app.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  pdf: any;
  today = Date.now();
  email: any;
  password: any;
  responsedata: any;
  message = '';

  constructor(private router: Router, public service: AppService, private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  home() {
    this.router.navigate(['home'])

  }
  login(form) {

    this.service.login(form).subscribe(data => {
      this.responsedata = data;
      console.log(this.responsedata)

      if (this.responsedata.token == null) {
        this.message = this.responsedata.message
        console.log("error")

      } else if (this.responsedata.user.roles == "User") {
        localStorage.setItem("Token", this.responsedata.token)
        localStorage.setItem("role", this.responsedata.user.roles)
        console.log("user", this.responsedata.user.roles)
        this.router.navigate(['sidenav/dashboard'])

      }
      else if (this.responsedata.user.roles == "Admin") {
        localStorage.setItem("Token", this.responsedata.token)
        localStorage.setItem("role", this.responsedata.user.roles)
        console.log("admin", this.responsedata.user.roles)
        this.router.navigate(['sidenav/dashboard'])

      }
    });

  }
  signup() {
    this.router.navigate(['register'])
  }

  recovery() {

    this.router.navigate(['forgotpass'])

  }



}
