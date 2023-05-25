import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//component
import { AppComponent } from './app.component';
import { HeaderComponent } from './body/header/header.component';
import { SidecardsComponent } from './body/sidecards/sidecards.component';

import { HomeComponent } from './home/home.component';



//Modules
import { BrowserModule } from '@angular/platform-browser';
import { MatIconModule} from '@angular/material/icon';
import { MatListModule} from '@angular/material/list';
import { MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule} from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule} from '@angular/material/card';
import { MatButtonModule} from '@angular/material/button';
import { MatMenuModule} from '@angular/material/menu';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatChipsModule} from '@angular/material/chips';
import { MatTableModule} from '@angular/material/table';
import { MatSortModule} from '@angular/material/sort';
import { MatPaginatorModule} from '@angular/material/paginator';
import { MatTabsModule} from '@angular/material/tabs';
import { MatSelectModule} from '@angular/material/select';
import { MatTooltipModule} from '@angular/material/tooltip';
import { MatDialogModule} from '@angular/material/dialog';
import { MatDividerModule} from '@angular/material/divider';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MatRippleModule } from '@angular/material/core';
import { AuthModule } from './auth/auth.module';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
import {MatGridListModule} from '@angular/material/grid-list';






//routing
import { AuthRoutingModule } from './auth/auth-routing.module';
import { AppRoutingModule } from './app-routing.module';
import { RegisterRoutingModule } from './register-shared/register-routing.module';
import { RegisterModuleModule } from './register-shared/register-module.module';
import {  RouterModule } from '@angular/router';

import { AioncoComponent } from './user/aionco/aionco.component';
import { ApolloComponent } from './user/apollo/apollo.component';
import { ApolloRegistrationComponent } from './user/apollo-registration/apollo-registration.component';
import { DashboardUserComponent } from './user/dashboard-user/dashboard-user.component';
import { DashboardMainComponent } from './user/dashboard-main/dashboard-main.component';
import { CreatepasswordRecoveryComponent } from './auth/createpassword-recovery/createpassword-recovery.component';
import { DashboardTestComponent } from './user/dashboard-test/dashboard-test.component';
import { BodyComponent } from './dashboard/body/body.component';
import { SidenavComponent } from './dashboard/sidenav/sidenav.component';
import { ScienceComponent } from './dashboard/science/science.component';
import { ResultComponent } from './dashboard/result/result.component';
import { PatientComponent } from './dashboard/patient/patient.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { UploadDialogComponent } from './dashboard/upload-dialog/upload-dialog.component';
import { FilterNavComponent } from './dashboard/filter-nav/filter-nav.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import { FilterFormComponent } from './dashboard/filter-form/filter-form.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminAdduserComponent } from './admin-dashboard/admin-adduser/admin-adduser.component';
import { AdminEdituserComponent } from './admin-dashboard/admin-edituser/admin-edituser.component';
import { SideNavComponent } from './dashboard/body/side-nav/side-nav.component';
import { AdminAdmineditComponent } from './admin-dashboard/admin-edituser/admin-adminedit/admin-adminedit.component';
import { DeleteDialogComponent } from './delete-dialog/delete-dialog.component';
import { UserDetailComponent } from './dashboard/dashboard/user-detail/user-detail.component';
import { AdminactivitiesComponent } from './adminactivities/adminactivities.component';
import { GradeDetailComponent } from './grade-detail/grade-detail.component';
import { EditGradesComponent } from './edit-grades/edit-grades.component';
import { AdmineditgradeComponent } from './admineditgrade/admineditgrade.component';
import { PdfViwerComponent } from './dashboard/dashboard/user-detail/pdf-viwer/pdf-viwer.component';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MathComponent } from './admin-dashboard/subjects/math/math.component';
import { EnglishComponent } from './admin-dashboard/subjects/english/english.component';
import { ApComponent } from './admin-dashboard/subjects/ap/ap.component';
import { SciencesubComponent } from './admin-dashboard/subjects/science/sciencesub.component';
import { NgxExtendedPdfViewerModule } from 'ngx-extended-pdf-viewer';
import { StudentSubmitComponent } from './admin-dashboard/subjects/student-submit/student-submit.component';
import { SubmittedPdfComponent } from './admin-dashboard/subjects/submitted-pdf/submitted-pdf.component';
import { ViewAllAnnouncementComponent } from './dashboard/result/view-all-announcement/view-all-announcement.component';
import { AddAnnouncementComponent } from './dashboard/result/view-all-announcement/add-announcement/add-announcement.component';
import { EditAnnouncementComponent } from './dashboard/result/view-all-announcement/edit-announcement/edit-announcement.component';
import { TleComponent } from './admin-dashboard/subjects/tle/tle.component';
import { MapehComponent } from './admin-dashboard/subjects/mapeh/mapeh.component';
import { FilipinoComponent } from './admin-dashboard/subjects/filipino/filipino.component';
import { EspComponent } from './admin-dashboard/subjects/esp/esp.component';
import { ContactusDialogComponent } from './contactus-dialog/contactus-dialog.component';
import { DashComponent } from './dash/dash.component';









@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidecardsComponent,
    HomeComponent,
    AioncoComponent,
    ApolloComponent,
    ApolloRegistrationComponent,
    DashboardUserComponent,
    DashboardMainComponent,
    CreatepasswordRecoveryComponent,
    DashboardTestComponent,
    BodyComponent,
    SidenavComponent,
    ScienceComponent,
    ResultComponent,
    PatientComponent,
    ProfileComponent,
    SettingComponent,
    DashboardComponent,
    UploadDialogComponent,
    FilterNavComponent,
    FilterFormComponent,
    EditProfileComponent,
    DialogboxComponent,
    AdminDashboardComponent,
    AdminAdduserComponent,
    AdminEdituserComponent,
    SideNavComponent,
    AdminAdmineditComponent,
    DeleteDialogComponent,
    UserDetailComponent,
    AdminactivitiesComponent,
    GradeDetailComponent,
    EditGradesComponent,
    AdmineditgradeComponent,
    PdfViwerComponent,
    MathComponent,
    EnglishComponent,
    ApComponent,
    SciencesubComponent,
    StudentSubmitComponent,
    SubmittedPdfComponent,
    ViewAllAnnouncementComponent,
    AddAnnouncementComponent,
    EditAnnouncementComponent,
    TleComponent,
    MapehComponent,
    FilipinoComponent,
    EspComponent,
    ContactusDialogComponent,
    DashComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    MatIconModule,
    MatListModule,
    MatSidenavModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    MatInputModule,
    MatFormFieldModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatChipsModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSelectModule,
    MatTooltipModule,
    MatDialogModule,
    MatDividerModule,
    MatButtonModule,
    MatButtonToggleModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressSpinnerModule,
    MatCheckboxModule,
    RegisterModuleModule,
    AuthModule,
    MatCheckboxModule,
    MatRippleModule,
    MatIconModule,
    MatProgressBarModule,
    MatSlideToggleModule,
    MatGridListModule,
    MatDatepickerModule,
    PdfViewerModule,
    NgxExtendedPdfViewerModule,


    
    
    //routing
    AppRoutingModule,
    AuthRoutingModule,
    RouterModule,
    RegisterRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
