import { Component, OnInit } from '@angular/core';
import { AppService } from '../app.service';
import { debounce } from 'lodash';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dash',
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css']
})
export class DashComponent implements OnInit {

  displayedColumns: string[] = ['Email', 'FirstName', 'LastName', 'pnumber', 'dob', 'status'];

  displayedColumn: string[] = [ 'timestamp','name', 'status'];

  viewAlldatasource: any;

  //students
  keyword:string = ''
  pageNo: number = 1;
  pageSize: number = 5;
  total: any;

  //act
  page:number = 1;
  pagesize:number = 5;
  totals:any;

  //anouncement
  announce:any;


  dataSource:any;

  constructor(private service:AppService ,private router:Router) { }

  ngOnInit(): void {

    this.applyFilter = debounce(this.applyFilter, 1000);
    this.getAllusers();

    this.getAllUploads();

    this.getallAnnouncement(this.pageNo);
  }


  getAllusers() {
    this.service.getallUsers(this.pageNo, this.pageSize).subscribe(data => {
      this.total = data[0].count
      console.log("usercount", this.total)
      this.viewAlldatasource = data[0].users
      console.log("user", data[0].users)
    })
  }


  
  search() {
    if (this.keyword == undefined || this.keyword == '') {
      this.getAllusers();
     
    } else {
      this.service.searchAdminuser(this.keyword, this.pageNo, this.pageSize).subscribe(data => {

        console.log("search", data)
        this.viewAlldatasource = data;
      })
    }

  }


  useronPageChange(events) {
    console.log("teststst")
    console.log(events);
    console.log("teststst")
    this.pageNo = events.pageIndex + 1;
    this.search();
  }

  
  applyFilter(value: string) {

    this.keyword = value.trim().toLowerCase();
    this.search();
    console.log(this.keyword)
    console.log(this.keyword)


  }

  onPageChange(event) {
    console.log(event);
    //this.getData(this.pageNo,this.pageSize);
    this.page= event.pageIndex + 1;
    console.log("nextpageeeee",this.page)
    this.getAllUploads();
 
  }


  getAllUploads() {
 
    this.service.getallUpload(this.page).subscribe(data => {
      console.log("seeedataaaaaaaaaaa",data[0].files)


      this.service.dataService = data[0].files
      this.dataSource = data[0].files
      this.totals = data[0].count
      console.log("totallllll",this.total)
    })
  

  

}


getallAnnouncement(pageNo){
  this.service.getAllActiveAnnouncement(pageNo).subscribe(data=>{
    console.log(data.count)
    console.log(data.result)
    this.announce = data.result
   

    console.log(this.announce,'announce')
  })
}

grade(){
  this.router.navigate(['sidenav/adminactivities'])
}



}
