import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { PdfViwerComponent } from './pdf-viwer/pdf-viwer.component';
import { StudentSubmitComponent } from 'src/app/admin-dashboard/subjects/student-submit/student-submit.component';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {


  detail:any;
  constructor(private service:AppService , private dialog:MatDialog) { }

  ngOnInit(): void {

    this.detail= this.service.userDetail
    console.log(this.detail)
  }

  view(){
    this.dialog.open(PdfViwerComponent)
  }

  show(){
    this.dialog.open(StudentSubmitComponent)
  }
  
  

}
