import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { DialogboxComponent } from 'src/app/dialogbox/dialogbox.component';
@Component({
  selector: 'app-submitted-pdf',
  templateUrl: './submitted-pdf.component.html',
  styleUrls: ['./submitted-pdf.component.css']
})
export class SubmittedPdfComponent implements OnInit {

  pdfurl:any
  tempstring:any;
  instructions:any;



  constructor(public service :AppService , private dialog :MatDialog) { }

 

  ngOnInit(): void {
    this.viewFile()
    this.instructions = this.service.userDetail
    
  }

  

  viewFile(){
  
  this.pdfurl  = `${this.service.viewFileURL}?Key=${this.service.fileName}`;
 

  console.log(this.pdfurl)
   
  }

  submit(form:any){

    console.log(form)

    form = {
      'newprofile':localStorage.getItem('sub'),
      'grade':form.grade,
      'remarks':form.remarks
    }

    this.service.grade(form).subscribe(data=>{
      console.log(data)
      this.dialog.open(DialogboxComponent, {
        data: {
          message: "Successfully Graded"
        }
      })
    })
  }

}
