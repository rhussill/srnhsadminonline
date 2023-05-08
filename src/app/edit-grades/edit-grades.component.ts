import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { AppService } from '../app.service';
import { EditProfileComponent } from '../edit-profile/edit-profile.component';
import { AdminAdduserComponent } from '../admin-dashboard/admin-adduser/admin-adduser.component';
import { AdminEdituserComponent } from '../admin-dashboard/admin-edituser/admin-edituser.component';
import { DatePipe } from '@angular/common';
import { debounce } from 'lodash';
import { AdminAdmineditComponent } from '../admin-dashboard/admin-edituser/admin-adminedit/admin-adminedit.component';
import { AdmineditgradeComponent } from '../admineditgrade/admineditgrade.component';



export interface viewCompetency {
  id: number;
  user: any;
  division: any;
  division_chief: any;
  date_submitted: any;
  status: any;
}





const ELEMENT_DATA: viewCompetency[] = [
  { id: 1, user: 'qwe', division: 'Incomplete', division_chief: 'H', date_submitted: '----', status: 'pending' },
  { id: 2, user: 'qwe', division: 'Incomplete', division_chief: 'H', date_submitted: '----', status: 'pending' },

];

@Component({
  selector: 'app-edit-grades',
  templateUrl: './edit-grades.component.html',
  styleUrls: ['./edit-grades.component.css']
})
export class EditGradesComponent implements OnInit {

  displayedColumns: string[] = ['Email', 'FirstName', 'LastName', 'pnumber', 'dob','AP','TLE','Mapeh','Filipino','ESP'];

  viewAlladmindata: any;
  viewAlldatasource: any;
  pipe = new DatePipe('en-US');

  keyword: string = '';
  fName: string = '';

  activestat = false;
  inactivestat = false

  // user
  pageNo: number = 1;
  pageSize: number = 5;
  total: any;

  // admin
  adminpageNo: number = 1;
  adminpageSize: number = 5;
  totaladmin: any;

  data:any;



  constructor(private dialog: MatDialog, private service: AppService) { }

  ngOnInit(): void {

    this.applyFilter = debounce(this.applyFilter, 1000);
    this.getallgradeADMIN();

  }


  getallgradeADMIN(){
    this.service.getallgradeAdmin().subscribe(data=>{
      console.log(data,'admingrade')
      this.data = data
    })
  }

  addUser() {
    this.dialog.open(AdminAdduserComponent).afterClosed().subscribe(result => {
      this.getAllusers();
      this.getAlladmin();
    })
  }

  getAlladmin() {

    this.service.getalladmin(this.adminpageNo, this.adminpageSize).subscribe(data => {
      this.totaladmin = data[0].count
      console.log("admincountttt", this.totaladmin)
      this.viewAlladmindata = data[0].users
      console.log("admin", data[0].users)
    })

  }

  getAllusers() {
    this.service.getallUsers(this.pageNo, this.pageSize).subscribe(data => {
      this.total = data[0].count
      console.log("usercount", this.total)
      this.viewAlldatasource = data[0].users
      console.log("user", data[0].users)
    })
  }

  rowClicked(row) {
    console.log(row)
    this.service._id = row._id
    this.service.status = row.status
    this.service.email = row.email
    this.service.fname = row.fName
    this.service.lname = row.lName
    this.service.pnumber = row.pNumber
    this.service.dob = row.date
    this.service.role = row.roles


    this.dialog.open(AdmineditgradeComponent).afterClosed().subscribe(data => {
      //perform something on dialog close
      this.getAllusers();
      this.getAlladmin();
    })
  }

  rowClickedadmin(row) {
    console.log(row)
    this.service._id = row._id
    this.service.status = row.status
    this.service.email = row.email
    this.service.fname = row.fName
    this.service.lname = row.lName
    this.service.pnumber = row.pNumber
    this.service.dob = row.date
    this.service.role = row.roles


    this.dialog.open(AdminAdmineditComponent).afterClosed().subscribe(data => {
      //perform something on dialog close
      this.getAlladmin();
      this.getAllusers();
    })

  }




  applyFilter(value: string) {

    this.keyword = value.trim().toLowerCase();
    this.search();
    console.log(this.keyword)
    console.log(this.keyword)


  }

  search() {
    if (this.keyword == undefined || this.keyword == '') {
      this.getAllusers();
      this.getAlladmin();
    } else {
      this.service.searchAdminuser(this.keyword, this.pageNo, this.pageSize).subscribe(data => {

        console.log("search", data)
        this.viewAlldatasource = data;
      })
    }

  }



  adminonPageChange(event) {
    console.log(event);
    console.log("admintsteste")
    this.adminpageNo = event.pageIndex + 1;
    this.search();
  }

  useronPageChange(events) {
    console.log("teststst")
    console.log(events);
    console.log("teststst")
    this.pageNo = events.pageIndex + 1;
    this.search();
  }



}
