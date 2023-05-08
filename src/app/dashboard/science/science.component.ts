import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {


  fileToUpload: any;
  imageUrl: any;




  constructor(private router:Router ,private service:AppService) { }

  ngOnInit(): void {
  }

  handleFileInput(files:any) {

    const inputElement = event.target as HTMLInputElement;
    files = inputElement.files;
    this.fileToUpload = files.item(0);

    //Show image preview
    let reader = new FileReader();
    reader.onload = (event: any) => {
      this.imageUrl = event.target.result;
    }
    reader.readAsDataURL(this.fileToUpload);
  }


  

  navigateToMath(){

    this.router.navigate(['sidenav/math'])
    localStorage.setItem('sub','Math')

  }

  navigateToScience(){
    this.router.navigate(['sidenav/sciencesub'])
    localStorage.setItem('sub','Science')
    
  }
  navigateToEnglish(){
    this.router.navigate(['sidenav/english'])
    localStorage.setItem('sub','English')
  }

  navigateToAP(){
    this.router.navigate(['sidenav/ap'])
    localStorage.setItem('sub','AralingPanlipunan')
  }

 
  navigateTotle(){
    this.router.navigate(['sidenav/tle'])
    localStorage.setItem('sub','Tle')
  }

  navigateTomapeh(){
    this.router.navigate(['sidenav/mapeh'])
    localStorage.setItem('sub','Mapeh')
  }
  navigateTofilipino(){
    this.router.navigate(['sidenav/filipino'])
    localStorage.setItem('sub','Filipino')
  }


  navigateToesp(){
    this.router.navigate(['sidenav/esp'])
    localStorage.setItem('sub','Esp')
  }
}
