import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { SubmittedPdfComponent } from '../submitted-pdf/submitted-pdf.component';

@Component({
  selector: 'app-student-submit',
  templateUrl: './student-submit.component.html',
  styleUrls: ['./student-submit.component.css']
})
export class StudentSubmitComponent implements OnInit {

  studentsubmit:any;
  pageNo: number = 1;
  pageSize: number = 5;
  total: any;


  displayedColumns: string[] = ['name','datesub','remarks','filename'];
  constructor(private service:AppService , private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getstudent()
  }


  getstudent(){
    this.service.getStudentSubmittedinACT().subscribe(data=>{
      console.log(data,'submitted')
      this.studentsubmit = data.result
    })
  }

  rowclick(row){
    console.log(row)
    this.service.profileID = row._id
    this.service.fileID = row.FileName
    this.service.fileName = row.FileName
    console.log(this.service.fileName)
    this.service.userDetail = row
    this.dialog.open(SubmittedPdfComponent)
  }

}
