import { Injectable } from '@angular/core';
import { throwError,Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map, catchError, retry, toArray } from 'rxjs/operators';
import { of } from 'rxjs';
import { tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  userDetail:any;
  filterdata:any;
  dataService:any;

  ///user data
  _id:any;
  status:any;
  email:any;
  fname:any;
  lname:any;
  pnumber:any;
  dob:any;
  role:any;


  //forgotpass
  fgtemailUrl=environment.apiURL + 'forgot/mail';

  pdfFile= environment.apiURL + 'e/pdf';

  ///register
  emailUrl=environment.apiURL + 'register/email'
  createpassUrl= environment.apiURL + 'register/password'
  createprofileUrl=environment.apiURL + 'register/profile'
  sendcodeUrl = environment.apiURL + 'forgot/confirmcode'

  ///login

  loginUrl=environment.apiURL + 'sign/login'

  adminloginUrl= environment.apiURL + 'admin/loginadmin'


  //profile
  postToken = environment.apiURL + 'profile/profile'
  updateProfileURL = environment.apiURL + 'profile/updateprofile'



  //admin
  addUserURL = environment.apiURL + 'admin/newuser'
  getalladminuserUrl =environment.apiURL + 'admin/page'
  getalladminadminUrl =environment.apiURL + 'admin/pageadmin'
  edituseradminURL =environment.apiURL + 'admin/edituser' 
  searhAdminUrl =environment.apiURL + 'admin/search'
  editadminuserURL = environment.apiURL + 'admin/editadmin'



  //user
  getAlluploadurl = environment.apiURL + 'api/s3admin'
  searchuserUrl = environment.apiURL + 'api/export'
  deleteFileuserUrl = environment.apiURL + 'api/delete'
  

  //filteren
  filterUrl = environment.apiURL + 'admin/searchfilter'


  imgFILE:File;

  filetodelete:any;

  viewFileURL = environment.apiURL + 'api/view'
  fileName:any;
  viewPDF:any
 
  //subject
  getActbySubjURL= environment.apiURL + 'admin/getsubject'
  subjectOBJ:any;

  getStudentSubmittedinACTURL = environment.apiURL + 'api/getstudentsubject'


  //announcement

  addAnnouncementURL = environment.apiURL + 'admin/announcement'
  getAnnouncementURl= environment.apiURL + 'admin/announcement'
  editAnnouncementURL = environment.apiURL + 'admin/updateannouncement'

  announcementData:any;
  announcementDataID:any;


  //grading

  profileID:any;
  fileID:any;

  gradeURL = environment.apiURL + 'admin/throwgrade'

  constructor(private http: HttpClient) { }


  //grading

  
  grade(form:any){

    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.patch<any>(`${this.gradeURL}/${this.profileID}/${this.fileID}`,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  

  }




  //announcement

  updateAnnouncement(form:any, _id:any){

    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.patch<any>(`${this.editAnnouncementURL}/${_id}`,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  

  }


   addAnnouncement(form:any){

    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post<any>(this.addAnnouncementURL,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  

  }

  getAllAnnouncement(pageNo){

    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.get<any>(`${this.getAnnouncementURl}/${pageNo}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  

  }


  //subject




  getStudentSubmittedinACT(){

    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.get<any>(`${this.getStudentSubmittedinACTURL}/${localStorage.getItem('sub')}/${localStorage.getItem('filename')}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  

  }

    getsubject(){

    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.get<any>(`${this.getActbySubjURL}/${localStorage.getItem('sub')}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  

  }




  //filter


  viewFile() {
    this.http.get(`${this.viewFileURL}?Key=${this.fileName}`)
      .subscribe((data) => {
        const reader = new FileReader();
        //  reader.readAsDataURL(data);
        console.log(data)
          reader.onloadend = () => {
          this.viewPDF = reader.result as string;
          
        };
      });
    }

      
  // viewFile(){

  //   let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
  //   return this.http.get<any>(`${this.viewFileURL}?Key=${this.fileName}`).
  //   pipe(
  //     map(data => data),
  //     retry(3),
  //     catchError(this.handleError)
  //   )

  

  // }


    
  searchFilter(form,PageNo){

    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post<any>(`${this.filterUrl}/${PageNo}`,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  

  }




  //user

  deletefile(file:any){
    let options = { headers: new HttpHeaders({ 'Content-Type':  'application/json'}),body:file};
    console.log(file);
    return this.http.delete<any>(this.deleteFileuserUrl,options).pipe(
      tap(data=>{console.log('heerre')}),
      map(data=>data),
      retry(3), 
      catchError(this.handleError)
    );
      }

  searchUser(keywordfile,page,limit){

    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.get<any>(`${this.searchuserUrl}/${page}/${limit}/${keywordfile}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  

  }


  getallUpload(s3pageNo){
    let options =  { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.get<any>(`${this.getAlluploadurl}/${s3pageNo}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  }


  //admin

  searchAdminuser(keyword,pageno,total){

    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.get<any>(`${this.searhAdminUrl}/${keyword}/${pageno}/${total}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  

  }

  addUsers(form:any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post<any>(this.addUserURL,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  }


  editUser(form:any ,id:any ){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.patch<any>(`${this.edituseradminURL}/${id}`,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  }


  editAdmin(form:any ,id:any ){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.patch<any>(`${this.editadminuserURL}/${id}`,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  }

  getalladmin(adminpageNo,adminpageSize){
    let options =  { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.get<any>(this.getalladminadminUrl+`/${adminpageNo}/${adminpageSize}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  }


  getallUsers(pageNo,pageSize){
    let options =  { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.get<any>(this.getalladminuserUrl+`/${pageNo}/${pageSize}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  }




  editProfile(form:any){

    let options =  { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    let bodytoken = localStorage.getItem('Token');
    console.log("testset",bodytoken)
    return this.http.patch<any>(this.updateProfileURL,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  }



  postProfile(form:any){

    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    let bodytoken = localStorage.getItem('Token');
    console.log("testset",bodytoken)
    return this.http.post<any>(this.postToken,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  }


  
  sendcode(form:any){
    console.log(form)
    let options =  { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<any>(this.sendcodeUrl,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  }

  fgtemail(form:any){

    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.post<any>(this.fgtemailUrl,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  }

  login(form:any){

    let options =  { headers: new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post<any>(this.loginUrl,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  }

  adminlogin(form:any){

    let options =  { headers: new HttpHeaders({'Content-Type':'application/json'})};
    return this.http.post<any>(this.adminloginUrl,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  }
  createprofile(form:any,_id:any){

    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.patch<any>(`${this.createprofileUrl}/${_id}`,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  }

  createpassword(form:any,_id:any){

    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    return this.http.patch<any>(`${this.createpassUrl}/${_id}`,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  }
  postEmail(form:any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    

    return this.http.post<any>(this.emailUrl,form,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  
  



  //End of Competency Functions

  //error handler
  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }

    // return an observable with a user-facing error message
    return throwError(
      'Email not found');
  }
//   return throwError(
//     'Something bad happened; please try again later.');
// }
}
