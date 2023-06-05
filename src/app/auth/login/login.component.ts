import { DatePipe } from '@angular/common';
import { Component, OnInit ,ViewEncapsulation} from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';
import { DialogboxComponent } from '../dialogbox/dialogbox.component';
import { MatDialog,MatDialogRef } from '@angular/material/dialog';





@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [DatePipe],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit {
  pdf:any;
  today = Date.now();
  email:any;
  password:any;
  responsedata:any;
  message='';

  hide=true;

  constructor(private router:Router ,public service:AppService , private dialog:MatDialog) { }

  ngOnInit(): void {
   
    console.log('workimg');
  }
  home(){
    this.router.navigate(['home'])

  }
  login(form){
  
    this.service.login(form).subscribe(data=>{
      this.responsedata=data;

      if(this.responsedata.token == null){
        this.message=this.responsedata.message
        console.log("error")
      
      }else if(this.responsedata.user.roles == "User"){
        localStorage.setItem("Token",this.responsedata.token)
        localStorage.setItem("role",this.responsedata.user.roles)
        console.log("user",this.responsedata.user.roles)
        this.router.navigate(['sidenav/activities'])
       
      }
      else if(this.responsedata.user.roles == "Admin" ){
        localStorage.setItem("Token",this.responsedata.token)
        localStorage.setItem("role",this.responsedata.user.roles)
        console.log("admin",this.responsedata.user.roles)
        this.router.navigate(['sidenav/dashboard'])
       
      }
    });
   
  }
  signup(){
    this.router.navigate(['register'])
  }

  recovery(){

    this.router.navigate(['forgotpass'])

  }
 
}
