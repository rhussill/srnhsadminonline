import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UploadDialogComponent } from '../dashboard/upload-dialog/upload-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { UploadService } from 'src/app/upload-service/upload.service';
import { debounce } from 'lodash';
import { FilterFormComponent } from '../dashboard/filter-form/filter-form.component';
import { DeleteDialogComponent } from 'src/app/delete-dialog/delete-dialog.component';
import { FilterNavComponent } from '../dashboard/filter-nav/filter-nav.component';
import { UserDetailComponent } from '../dashboard/dashboard/user-detail/user-detail.component';


export interface PeriodicElement {
  id: number;
  name: any;
  status: any;
  profile: any;
  timestamp: any;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { id: 1, name: '4A_Normal_S3_L004', status: 'Incomplete', profile: 'Normal', timestamp: 'H' },
  { id: 2, name: '4A_Normal_S3_L0045', status: 'Incomplete', profile: 'Normal', timestamp: 'H' },

];


@Component({
  selector: 'app-adminactivities',
  templateUrl: './adminactivities.component.html',
  styleUrls: ['./adminactivities.component.css']
})
export class AdminactivitiesComponent implements OnInit {

  hasData: any;
  file= [];
  edits: boolean = true;
  checks: boolean = false;
  allChecked: boolean = false
  displayedColumns: string[] = [ 'name','instructions', 'status', 'timestamp',];
  dataSource: any;
  form: any
  page: number = 1;
  pageSize: number = 5;
  total: number;

  isLoading:boolean=false;

  sideNavVisible: boolean = false;


  anyFile: File;
  imageUrl: string;


  //pagesearch
  limit:number = 5;
  keywordfile=''

  selectedFiles: FileList;
  @Output() menuClickedEvent = new EventEmitter<void>();

  constructor(private dialog: MatDialog, private service: AppService, private uploadService: UploadService) {
    this.applyFilter = debounce(this.applyFilter,750);
   }

  ngOnInit(): void {
    this.getAllUploads();
    // this.getProfile(this.form)
    // console.log(this.getProfile(this.form))

  }

  rowclick(row){

    console.log(row)
    localStorage.setItem("filename",row.FileName)
    localStorage.setItem('sub',row.NewProfile)
    this.service.fileName = row.FileName
    this.service.userDetail = row;
    this.dialog.open(UserDetailComponent)
  }

  applyFilter(value: string) {

    this.keywordfile = value.trim().toLowerCase();
    this.search();
    console.log(this.keywordfile)



  }

  search() {
    if (this.keywordfile == undefined || this.keywordfile == '') {
      this.getAllUploads();
    } else {
      this.service.searchUser(this.keywordfile,this.page,this.limit).subscribe(data => {
        console.log("search", data)
        this.dataSource = data.result;
      })
    }

  }

  getAllUploads() {
 
      this.service.getallUpload(this.page).subscribe(data => {
        console.log("seeedataaaaaaaaaaa",data[0].files)
  

        this.service.dataService = data[0].files
        this.dataSource = data[0].files
        this.total = data[0].count
        console.log("totallllll",this.total)
      })
    

    

  }

  removefilter(){
    this.getAllUploads();
  }


  upload() {

    const file = this.selectedFiles.item(0);
    // this.uploadService.uploadFile(file);
  }

  selectFile(event) {
    this.selectedFiles = event.target.files;
  }


  getProfile(form) {

    form = {
      "token": localStorage.getItem("Token")
    }
    this.service.postProfile(form).subscribe(data => {
      this.hasData = data;
      console.log("data", data)
    })
  }

  checkAll(event: any) {
    this.allChecked = !this.allChecked;

    if (this.allChecked == true) {
      this.checks = true
      for (let item of this.dataSource) {
        if (this.file.find((id) => { return id == item.Key }) != undefined) {
          continue;
        } else {
          this.checks = true
          this.file.push(item.Key);
          console.log("thisfile",this.file);
          console.log('pushed');
        }
      }
    } else {
      this.checks = false
      this.file = []
    }
  }

  check(element) {
    
    console.log(element)
    console.log("arg", arguments[0])
    this.file.find((Key) => { console.log("iteration", Key); return Key == arguments[0].Key })
    console.log("testfile", this.file.find((Key) => { console.log("iteration", Key); return Key == arguments[0].Key }))
    this.checks = true
    if (this.file.find((id) => { return id == arguments[0].Key }) != undefined) {
      let index = this.file.indexOf(arguments[0]);
      this.checks = false
      this.file.splice(index, 1);
      console.log(this.file, "gdhgdhgdghd");
      this.allChecked = false;

    } else {
      this.file.push(arguments[0].Key)

      if (this.file.length == this.dataSource.length) {
        this.allChecked = true;
      }
      console.log("testfileesss",this.file);
    }
    console.log(`allChecked: ${this.allChecked}`);
    console.log("datasource", this.dataSource.data.length)
    console.log("file", this.file)
    if (this.file.length > 1) {
      console.log("editremoves")
      this.edits = false;
    }
  }

  exist(id) {
    if (this.file.find((id) => { return id == arguments[0].id }) != undefined) {
      console.log("Exist!");
    }
    return this.file.find((id) => { return id == arguments[0].id }) != undefined;

  }

  edit(file) {

    console.log("idsss", file)

  }

  delete(element){
   
    console.log("delte",element.FileName)
    
    this.service.filetodelete = element.FileName
    console.log("deletesssss",this.service.filetodelete)
    this.dialog.open(DeleteDialogComponent).afterClosed().subscribe(data=>{
      this.getAllUploads();
    })
    // this.service.deletefile({Key:element.Key}).subscribe(data=>{
    //   console.log("deleteeeeee")
    //   this.file=[];
    //   this.allChecked= false;
    //   this.getAllUploads();
    // })
    
  }


  uploads() {
    this.dialog.open(UploadDialogComponent).afterClosed().subscribe(
      data => {
        this.dialog.open(FilterFormComponent).afterClosed().subscribe(
          data=> {
            this.getAllUploads();
          }
        )
      }
    )
  }

  toggleSideNav(){
    this.sideNavVisible = !this.sideNavVisible;

    console.log("open")
    // this.service.dataService = this.dataSource
    this.dataSource = this.service.filterdata
    // console.log("service",this.service.dataService)
    
    
  
    

  }



  ///upload
  onImagePicked(event: Event): void {
    const FILE = (event.target as HTMLInputElement).files[0];
    this.anyFile = FILE;
    console.log(this.anyFile)
  }

  onImageUpload() {
    // const imageForm = new FormData();
    const form = new FormData();
    form.append('file', this.anyFile);
    console.log("file", form)
    this.uploadService.imageUpload(form).subscribe(res => {
      console.log("testt", res)
      this.imageUrl = res['file'];
    });
  }


  onPageChange(event) {
    console.log(event);
    //this.getData(this.pageNo,this.pageSize);
    this.page= event.pageIndex + 1;
    console.log("nextpageeeee",this.page)
    // this.pageNo =event.pageNo
    // this.total =event.total
    this.search();
 
  }




}
