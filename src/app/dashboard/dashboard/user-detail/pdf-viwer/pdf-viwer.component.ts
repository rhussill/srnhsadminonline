import { Component, OnInit } from '@angular/core';
import { AppService } from 'src/app/app.service';
import { GcPdfViewer } from '@grapecity/gcpdfviewer';


@Component({
  selector: 'app-pdf-viwer',
  templateUrl: './pdf-viwer.component.html',
  styleUrls: ['./pdf-viwer.component.css']
})
export class PdfViwerComponent implements OnInit {
  pdfurl:any
  tempstring:any;
  instructions:any;



  constructor(public service :AppService) { }

 

  ngOnInit(): void {
    this.viewFile()
    this.instructions = this.service.userDetail
    
  }

  

  viewFile(){
  
  this.pdfurl  = `${this.service.viewFileURL}?Key=${this.service.fileName}`;
 

  console.log(this.pdfurl)
   
  }



}
