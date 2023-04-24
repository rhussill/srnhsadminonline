import { Component, OnInit } from '@angular/core';
import { MatDialogRef , MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { DialogboxComponent } from 'src/app/dialogbox/dialogbox.component';
import { DatePipe, formatDate } from '@angular/common' ;

@Component({
  selector: 'app-add-announcement',
  templateUrl: './add-announcement.component.html',
  styleUrls: ['./add-announcement.component.css'],
  providers:[DatePipe]
})
export class AddAnnouncementComponent implements OnInit {

  form_isValid: boolean = false;

  disable_button = false;

  start_date:any;
  end_date:any;

  constructor( private dialogref:MatDialogRef<AddAnnouncementComponent>,private service:AppService, private dialog:MatDialog) { }

  ngOnInit(): void {
  }

  submit(form:any){

    
    let start_date  = this.start_date;
    let end_date = this.end_date;

   start_date = formatDate(start_date,'YYYY-MM-dd','en')
    end_date = formatDate(end_date,'YYYY-MM-dd','en')

    form= {

      'announcementtitle':form.announcementtitle,
      'detail':form.detail,
      'start_date':start_date,
      'end_date':end_date

    }

    this.service.addAnnouncement(form).subscribe(data=>{
      console.log(data)

      this.dialog.open(DialogboxComponent, {
        data: {
          message: "Successfully Added"
        }
      })
      this.dialogref.close()
    })

  }

  cancel(){
    this.dialogref.close()
  }

}
