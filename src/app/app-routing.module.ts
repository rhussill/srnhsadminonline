import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { DashboardComponent } from './dashboard/dashboard/dashboard.component';
import { FilterNavComponent } from './dashboard/filter-nav/filter-nav.component';

import { PatientComponent } from './dashboard/patient/patient.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ProfileComponent } from './dashboard/profile/profile.component';
import { ResultComponent } from './dashboard/result/result.component';
import { ScienceComponent } from './dashboard/science/science.component';
import { SettingComponent } from './dashboard/setting/setting.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register-shared/register/register.component';
import { AioncoComponent } from './user/aionco/aionco.component';
import { ApolloRegistrationComponent } from './user/apollo-registration/apollo-registration.component';
import { ApolloComponent } from './user/apollo/apollo.component';
import { DashboardMainComponent } from './user/dashboard-main/dashboard-main.component';
import { DashboardTestComponent } from './user/dashboard-test/dashboard-test.component';
import { DashboardUserComponent } from './user/dashboard-user/dashboard-user.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { SidecardsComponent } from './body/sidecards/sidecards.component';
import { SideNavComponent } from './dashboard/body/side-nav/side-nav.component';
import { AdminactivitiesComponent } from './adminactivities/adminactivities.component';
import { EditGradesComponent } from './edit-grades/edit-grades.component';
import { MathComponent } from './admin-dashboard/subjects/math/math.component';
import { EnglishComponent } from './admin-dashboard/subjects/english/english.component';
import { ApComponent } from './admin-dashboard/subjects/ap/ap.component';
import { SciencesubComponent } from './admin-dashboard/subjects/science/sciencesub.component';
import { ViewAllAnnouncementComponent } from './dashboard/result/view-all-announcement/view-all-announcement.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },

  { path: 'home', component: HomeComponent },
  { path: 'register', component: RegisterComponent },

  // {path:'aionco',component:AioncoComponent},
  // {path:'dashboard',component:AioncoComponent},

  //test

  { path: 'sidecard', component: FilterNavComponent },


  {
    path: 'sidenav', component: SideNavComponent, children: [
      { path: 'activities', component: DashboardComponent },
      { path: 'admin', component: AdminDashboardComponent },
      { path: 'grades', component: PatientComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'edit-profile', component: EditProfileComponent },
      { path: 'announcement', component: ResultComponent },
      { path: 'subject', component: ScienceComponent },
      { path: 'settings', component: SettingComponent },
      { path: 'adminactivities', component: AdminactivitiesComponent },
      { path: 'editgrades', component: EditGradesComponent },
      { path: 'math', component: MathComponent },
      { path: 'sciencesub', component: SciencesubComponent },
      { path: 'english', component: EnglishComponent },
      { path: 'ap', component: ApComponent },
      {path:'viewallannouncement',component:ViewAllAnnouncementComponent}
    ]
  },













  // {path: 'dashboardtest',component:DashboardTestComponent},
  // {path:'dashboard',component:DashboardComponent},
  {
    path: 'dashboardmain', component: DashboardMainComponent, children: [

      { path: 'apollo', component: ApolloComponent },
      { path: 'apollo-registration', component: ApolloRegistrationComponent },
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
