import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { AppService } from 'src/app/app.service';
import { DialogboxComponent } from 'src/app/dialogbox/dialogbox.component';
import { UploadService } from 'src/app/upload-service/upload.service';
import { DatePipe, formatDate } from '@angular/common' ;

@Component({
  selector: 'app-filter-form',
  templateUrl: './filter-form.component.html',
  styleUrls: ['./filter-form.component.css'],
  providers:[DatePipe]
})
export class FilterFormComponent implements OnInit {

  addval: boolean = false;

  start_date:any;
  end_date:any;
  instructions:any;

  capturekit: any;
  cancertype: any;
  specimentype: any;
  datatype:any
  sequencetype:any;
  newprofile:any
  sampleid:any;
  regex:any;
  site:any;

  subject = [
    'Math',
    'Science',
    'English',
    'AralingPanlipunan',
    'Tle',
    'Mapeh',
    'Filipino',
    'Esp'
  ]


  isLoading:boolean=false;


  
  message: any;


  datas: any;
  page:number = 1;


  dataclassTypes = [
    'None',
    '.fastq',
    '.bam',
    '.bai'
  ]

  specimenTypes = [
    'None',
    'Blood',
    'Urine',
    'Saliva',
    'Buccal',
    'Nasal'
  ];

  cancerTypes = [
    'None',
    'ACC',
    'BLCA',
    'BRCA',
    'CESC',
    'CHOL',
    'COAD',
    'DLBC',
    'ESCA',
    'GBM',
    'HNSC',
    'KICH',
    'KIRC',
    'KIRP',
    'LAML',
    'LGG',
    'LIHC',
    'LUAD',
    'LUSC',
    'MESO',
    'OV',
    'PAAD',
    'PCPG',
    'PRAD',
    'READ',
    'SARC',
    'SKCM',
    'STAD',
    'TGCT',
    'THCA',
    'THYM',
    'UCEC',
    'UCS',
    'UVM',
  ];

  captureKits = [
    'None',
    'Agilent Sure Select Human All Exon v1 kits',
    'Agilent SureSelect All Exon v2',
    'Agilent SureSelect Human All Exon v2',
    'Agilent Sure-Select Human All Exon v2.0',
    'Agilent SureSelect Human All Exon V6 Kit',
    'Agilent SureSelect XT LowInput kit',
    'Agilent SureSelectXT Clinical Research Exome\xa0v2\xa0capture library',
    'Agilent SureSelectXT Clinical Research Exomev2capture library',
    'Agilent v7',
    'Agilent v8',
    'Custom V2 Exome Bait, 48 RXN X 16 tubes',
    'Custom V2 Exome Bait, 48 RXN X 16 tubes|Custom V2 Exome Bait, 48 RXN X 16 tubes',
    'Custom V2 Exome Bait, 48 RXN X 16 tubes|Custom V2 Exome Bait, 48 RXN X 16 tubes|Custom V2 Exome Bait, 48 RXN X 16 tubes',
    'Custom V2 Exome Bait, 48 RXN X 16 tubes|Custom V2 Exome Bait, 48 RXN X 16 tubes|Custom V2 Exome Bait, 48 RXN X 16 tubes|Custom V2 Exome Bait, 48 RXN X 16 tubes',
    'Gapfiller_7m',
    'hg18 nimblegen exome version 2',
    'hg18 nimblegen exome version 2|SureSelect Human All Exon 38 Mb v2',
    'Human All Exon v7',
    'Nimblegen EZ Exome v3.0',
    'Nimblegen EZ Exome v3.0|120613_HG19_EC_HPV_39235 capture oligo tube|Nimblegen SeqCap EZ Human Exome Library v2.0',
    'Nimblegen EZ Exome v3.0|HPV_IDT_probes capture chip set',
    'Nimblegen EZ Exome v3.0|WO2791991 pooled probes|WO2768646 pooled probes|WO2793950 pooled probes|WO2790654 pooled probes',
    'Nimblegen SeqCap EZ Human Exome Library v2.0',
    'Nimblegen SeqCap EZ Human Exome Library v2.0|hg18 nimblegen exome version 2',
    'Nimblegen SeqCap EZ Human Exome Library v2.0|Nimblegen EZ Exome v3.0|120613_HG19_EC_HPV_39235 capture oligo tube',
    'Nimblegen SeqCap EZ Human Exome Library v3.0',
    'NimbleGen Sequence Capture 2.1M Human Exome Array',
    'NimbleGen Sequence Capture 2.1M Human Exome Array|SureSelect Human All Exon 38 Mb v2',
    'NimbleGen Sequence Capture 2.1M Human Exome Array|SureSelect Human All Exon 50Mb Kit',
    'NimbleGen_SeqCap_EZ_Exome_v3a',
    'NimbleGen_SeqCap_EZ_Exome_v3b',
    'SeqCap EZ Exome V2.0',
    'SeqCap EZ HGSC VCRome',
    'SureSelect All Exon V5 Kit',
    'SureSelect Human All Exon',
    'SureSelect Human All Exon 38 Mb v2|hg18 nimblegen exome version 2',
    'SureSelect Human All Exon 50Mb Kit|NimbleGen Sequence Capture 2.1M Human Exome Array',
    'SureSelect Human All Exon 51MB V3 (JHH samples) or V4 (all other samples) kits (Agilent)',
    'SureSelect Human All Exon V6 probe',
    'SureSelect Human All ExonV6 COSMIC Kit (Agilent Technologies)',
    'SureSelect XT Human All Exon V5',
    'SureSelectXT Human All Exon V5, 16',
    'SureSelectXT Human All ExonV6Capture Library (Agilent, 5190-8865)',
    'VCRome V2.1',
    ' VCRome V2.1-PKv1',
    'WO2791991 pooled probes|WO2768646 pooled probes|WO2793950 pooled probes|WO2790654 pooled probes|Nimblegen EZ Exome v3.0',
    'Unknown',
  ];
  sequenceTypes = [
    'None',
    'WGS',
    'WXS'
  ];


  imageUrl: string;

  constructor(private dialogref: MatDialogRef<FilterFormComponent>, private uploadService: UploadService, private service: AppService, private dialog: MatDialog) { }

  ngOnInit(): void {
    this.getuploadData();
  }

  close() {
    this.dialogref.close()
  }

  getuploadData() {
    this.service.getallUpload(this.page).subscribe(data => {
      console.log(data.result)

      this.datas = data.result
    })
  }

  addvalue() {

    console.log("open")
    var sequencetypeID = document.getElementById('sequencetypeID'),
      inputValue = (<HTMLInputElement>document.getElementById('val')).value,
      newOption = document.createElement('option'),
      newOptionValue = document.createTextNode(inputValue);

    newOption.appendChild(newOptionValue);
    sequencetypeID.insertBefore(newOption, sequencetypeID.lastChild);

  }

  upload() {

    const form = new FormData();
    form.append('file', this.service.imgFILE);
    console.log("FILES", form)
    this.uploadService.imageUpload(form).subscribe(res => {
      console.log("testt", res)
      this.imageUrl = res['file'];
      this.dialogref.close();
      this.dialog.open(DialogboxComponent, {
        data: {
          message: "Successfully Uploaded"
        }
      }).afterClosed().subscribe(res => {
        this.getuploadData();
        console.log("getdataaaa")

      })
    });
  }

  submit(form){

    this.isLoading =true;
    const forms = new FormData();

    let start_date  = this.start_date;
    let end_date = this.end_date;

    start_date = formatDate(start_date,'YYYY-MM-dd','en');
    end_date = formatDate(end_date,'YYYY-MM-dd','en');
    
    forms.append('file', this.service.imgFILE);
    forms.append('newprofile', this.newprofile);
    forms.append('instructions',this.instructions)
    forms.append("start_date",start_date);
    forms.append("end_date",end_date)

    console.log("start",start_date)
    console.log("end",end_date)
    
      this.uploadService.imageUpload(forms).subscribe(res => {
      console.log("testt", res)
      this.imageUrl = res['file'];
    
      this.dialogref.close();
      
      this.dialog.open(DialogboxComponent, {
        data: {
          
          message: "Successfully Uploaded"
        }
      }).afterClosed().subscribe(res => {
        this.isLoading =false;
        this.getuploadData();
        console.log("getdataaaa")

      })
    });

  }

  

}


