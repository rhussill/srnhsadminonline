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


  ///user data
  _id:any;
  status:any;
  email:any;
  fname:any;
  lname:any;
  pnumber:any;
  dob:any;
  role:any;



  //variable to store training provider id
  id:any = null;
  //variable to store program id
  progID:any = null;
  //variable to store SME id
  smeID:any = null;
  //variable to store Competency entry id
  compId:any = null;
  //variable to store ALDP entry ID
  aldpID:any = null;

  trainingProviderURL = environment.apiURL + '/trainingProvider';
  programURL = environment.apiURL + '/providerProgram';
  ddTrainingProviderURL = environment.apiURL + '/pProg';
  smeURL = environment.apiURL + 'sme';
  aldpURL = environment.apiURL;
  competencyURL = environment.apiURL; 

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
  getAlluploadurl = environment.apiURL + 'api/getall'
  searchuserUrl = environment.apiURL + 'api/export'
  deleteFileuserUrl = environment.apiURL + 'api/delete'
  

  pdf:any;


  imgFILE:File;

  filetodelete:any;

  constructor(private http: HttpClient) { }



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


  getallUpload(page){
    let options =  { headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.get<any>(`${this.getAlluploadurl}/${page}`,options).
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

  //Training Provider functions
  getAllTrainingProvider(pageNo:number,pageSize:number){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'}),params : new HttpParams().set('pageNo',pageNo).set('pageSize',pageSize)};

    return this.http.get<any>(this.trainingProviderURL,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }
  getpdf(){

    // const url =`${this.pdfFile}`;

    // const httpOptions = {
    //   'responseType'  : 'arraybuffer' as 'json'
       //'responseType'  : 'blob' as 'json'        //This also worked
       let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    

    return this.http.get<any>(this.pdfFile,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )

  }

  getTrainingProvider(id:any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};

    return this.http.get<any>(this.trainingProviderURL+`/${id}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  createTrainingProvider(form_value:any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    let body = form_value;

    return this.http.post<any>(this.trainingProviderURL,form_value,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  updateTrainingProvider(form_value : any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    let body = form_value;

    return this.http.patch<any>(this.trainingProviderURL+`/${this.id}`,body,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  deleteTrainingProvider(id: number){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};

    return this.http.delete<any>(this.trainingProviderURL+`/${id}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }
  //End of Training Provider functions

  //Training Programs functions
  getAllProgram(){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};

    return this.http.get<any>(this.programURL,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  getProgram(id:any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};

    return this.http.get<any>(this.programURL+`/${id}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  getDropDownTrainingProviders(){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};

    return this.http.get<any>(this.ddTrainingProviderURL,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  createProgram(form_value:any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    let body = form_value;

    return this.http.post<any>(this.programURL,form_value,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  updateProgram(form_value : any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    let body = form_value;

    return this.http.patch<any>(this.programURL + `/${this.progID}`,body,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  deleteProgram(id: number){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};

    return this.http.delete<any>(this.programURL+`/${id}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }
  //End of Training Programs functions

  //SME functions
  getAllSME(){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};

    return this.http.get<any>(this.smeURL,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  getSME(id:any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};

    return this.http.get<any>(this.smeURL+`/${id}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }


  createSME(form_value:any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    let body = form_value;

    return this.http.post<any>(this.smeURL,form_value,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  updateSME(form_value : any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    let body = form_value;

    return this.http.patch<any>(this.smeURL + `/${this.progID}`,body,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  deleteSME(id: number){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};

    return this.http.delete<any>(this.smeURL+`/${id}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }
  //End of SME functions

  //ALDP Functions
  getAllALDP(){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};

    return this.http.get<any>(this.aldpURL,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  getALDP(id:any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};

    return this.http.get<any>(this.aldpURL+`/${id}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }


  createALDP(form_value:any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    let body = form_value;

    return this.http.post<any>(this.aldpURL,form_value,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  updateALDP(form_value : any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    let body = form_value;

    return this.http.patch<any>(this.aldpURL + `/${this.progID}`,body,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  deleteALDP(id: number){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};

    return this.http.delete<any>(this.aldpURL+`/${id}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }
  //End of ALDP Functions

  //Competency Functions
  getAllCompetency(){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};

    return this.http.get<any>(this.competencyURL,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  getCompetency(id:any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};

    return this.http.get<any>(this.competencyURL+`/${id}`,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }


  createCompetency(form_value:any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    let body = form_value;

    return this.http.post<any>(this.competencyURL,form_value,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  updateCompetency(form_value : any){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};
    let body = form_value;

    return this.http.patch<any>(this.competencyURL + `/${this.progID}`,body,options).
    pipe(
      map(data => data),
      retry(3),
      catchError(this.handleError)
    )
  }

  deleteCompetency(id: number){
    let options =  { headers: new HttpHeaders({'Content-Type':  'application/json'})};

    return this.http.delete<any>(this.competencyURL+`/${id}`,options).
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
