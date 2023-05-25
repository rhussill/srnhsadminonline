import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ContactusDialogComponent } from 'src/app/contactus-dialog/contactus-dialog.component';


@Component({
  selector: 'app-sidecards',
  templateUrl: './sidecards.component.html',
  styleUrls: ['./sidecards.component.css']
})
export class SidecardsComponent implements OnInit {
  selected: Date | any;
  url:any = '';
  constructor( private router:Router ,private dialog:MatDialog) { }

  ngOnInit(): void {
  }


  open(){

    this.dialog.open(ContactusDialogComponent)

  }
  
  // onSelectFile(event:any) {
  //   if (event.target.files && event.target.files[0]) {
  //     var reader = new FileReader();

  //     reader.readAsDataURL(event.target.files[0]); // read file as data url

  //     reader.onload = (event) => { // called once readAsDataURL is completed
  //       this.url = event.target?.result;
  //     }
  //   }
  // }
  signup(){
    this.router.navigate(['register'])
  }
}
