import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { elementAt } from 'rxjs';
import { AppService } from 'src/app/app.service';
import { FormGroup } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { TermofserviceComponent } from 'src/app/termofservice/termofservice.component';
import { PrivacypolicyComponent } from 'src/app/privacypolicy/privacypolicy.component';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit {
  email:any;
  checkbox:boolean=false;
  button:boolean=true;


  constructor(private router:Router, private service:AppService , private dialog:MatDialog) { }

  ngOnInit(): void {
    
  }

  privacy(){
    this.dialog.open(PrivacypolicyComponent);
  }
  terms(){
    this.dialog.open(TermofserviceComponent)
  }

  home(){
    this.router.navigate(['home'])

  }
  checkboxs(){
    if(this.checkbox == !this.checkbox){
    this.button=this.button
    }else {
      this.button=!this.button
    }
  }
  login(form:any){
    form = {
      "email":form.email,

};
console.log(form)
    this.service.postEmail(form).subscribe(data =>{
    if(data.result=="Failure" || this.checkbox==false){
      alert(data.message)
     
    }
    else if (data.result=="Success"){
      localStorage.setItem('_id',data.user._id)
      console.log(data)
      this.router.navigate(['thankyou'])
    }
    },err=>{
      alert(err)
    })
  }
  
  createacc(){
    
    
  }
  log(){
    this.router.navigate(['login'])
  }

}
