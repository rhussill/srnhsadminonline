import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { StudentSubmitComponent } from '../student-submit/student-submit.component';
@Component({
  selector: 'app-ap',
  templateUrl: './ap.component.html',
  styleUrls: ['./ap.component.css']
})
export class ApComponent implements OnInit {

  
  dataSource:any;
  role:boolean = true
  activityData:any


  StudentsdisplayedColumns: string[] = [
    'Name',
    'Grade',  
    'Section', 
    'Year',
    'Status',
  ];

  ActivitydisplayedColumns: string[] = [
    'Activity',
    'Detail',
    'Duration',  
  ];

  pageNo:number =1;
  pageSize:number=10;
  total:any;
  constructor(private service : AppService, private dialog:MatDialog) { }

  ngOnInit(): void {
    this.getAP()
   
  }

  rowclick(row){
    console.log(row)
    localStorage.setItem('filename',row.FileName)
    this.dialog.open(StudentSubmitComponent)
  }

  getAP(){

    this.service.getsubject().subscribe(data=>{
      console.log(data.result[0])
       this.activityData = data.result
    })
  }
 


  onPaginate(event:any){
    this.pageNo = event.pageIndex +1;
    this.pageSize = event.pageSize;

    // this.getData(this.pageNo,this.pageSize,this.keyword);
    console.log('onPaginate working!')
   
  }

}
