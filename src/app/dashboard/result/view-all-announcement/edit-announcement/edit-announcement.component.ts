import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { DialogboxComponent } from 'src/app/dialogbox/dialogbox.component';
import { DatePipe, formatDate } from '@angular/common' ;

@Component({
  selector: 'app-edit-announcement',
  templateUrl: './edit-announcement.component.html',
  styleUrls: ['./edit-announcement.component.css'],
  providers:[DatePipe]
})
export class EditAnnouncementComponent implements OnInit {

  announcementtitle:any;
  detail:any;
  start_date:any;
  end_date:any;
  status:any;

  stats=[
    'Active',
    'Inactive'
  ]



  constructor(private service:AppService , private dialog:MatDialog , private dialogref:MatDialogRef<EditAnnouncementComponent>) { }

  ngOnInit(): void {
    this.getdata()
  }

  getdata(){

    let data = this.service.announcementData

     this.announcementtitle = data.announcementtitle;
     this.detail = data.Detail;
     this.start_date = data.start_date;
     this.end_date = data.end_date
     this.status = data.status
    

  }

  submit(form:any){

    
    let start_date  = this.start_date;
    let end_date = this.end_date;

   start_date = formatDate(start_date,'YYYY-MM-dd','en')
    end_date = formatDate(end_date,'YYYY-MM-dd','en')

    let id = this.service._id

    form= {

      'announcementtitle':form.announcementtitle,
      'detail':form.detail,
      'start_date':start_date,
      'end_date':end_date,
      'status':form.status

    }

    this.service.updateAnnouncement(form,id).subscribe(data=>{
      console.log(data)

      this.dialog.open(DialogboxComponent, {
        data: {
          message: "Successfully Updated"
        }
      })
      this.dialogref.close()
    })

  }

  cancel(){

  }

}
