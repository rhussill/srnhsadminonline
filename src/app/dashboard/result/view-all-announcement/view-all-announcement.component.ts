import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { MatDialog } from '@angular/material/dialog';
import { EditAnnouncementComponent } from './edit-announcement/edit-announcement.component';
import { AddAnnouncementComponent } from './add-announcement/add-announcement.component';

@Component({
  selector: 'app-view-all-announcement',
  templateUrl: './view-all-announcement.component.html',
  styleUrls: ['./view-all-announcement.component.css']
})
export class ViewAllAnnouncementComponent implements OnInit {

  dataSource:any;
  role:boolean = true
  activityData :any ;
  


  StudentsdisplayedColumns: string[] = [
    'Name',
    'Grade',  
    'Section', 
    'Status',
  ];

  ActivitydisplayedColumns: string[] = [
    'Activity',
    'Detail',
    'Duration',  
  ];

  pageNo: number = 1;
  pageSize: number = 5;
  total: any;
  constructor(private service : AppService , private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getMathAct();
    this.getallAnnouncement(this.pageNo);
   
  }

  getallAnnouncement(pageNo){
    this.service.getAllAnnouncement(pageNo).subscribe(data=>{
      console.log(data.count)
      console.log(data.result)
      this.dataSource = data.result
      this.total = data.count
    })
  }

  add(){
    this.dialog.open(AddAnnouncementComponent).afterClosed().subscribe(res=>{
      this.getallAnnouncement(this.pageNo)
    })
  }

  getMathAct(){

    this.service.getsubject().subscribe(data=>{
      console.log(data.result[0])
       this.activityData = data.result
    })
  }

  rowclick(row){
    console.log(row)
    this.service.announcementData = row
    this.service._id= row._id
    console.log(this.service._id)
    this.dialog.open(EditAnnouncementComponent).afterClosed().subscribe(res=>{
      this.getallAnnouncement(this.pageNo);
    })
  }
 
  


  onPaginate(event:any){
    this.pageNo = event.pageIndex +1;
    this.pageSize = event.pageSize;
    console.log('onPaginate working!')
   this.getallAnnouncement(this.pageNo)
  }

}
