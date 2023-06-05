import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//module
import { BrowserModule } from '@angular/platform-browser';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { MatFormFieldModule } from '@angular/material/form-field';
import { AdminLoginComponent } from '../admin-login/admin-login.component';





//component
import { LoginComponent } from './login/login.component';
import { RecoveryComponent } from './recovery/recovery.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';
import { DialogboxComponent } from './dialogbox/dialogbox.component';
import { adminLoginComponent } from './login copy/login.component';
import { MatIconModule } from '@angular/material/icon';



@NgModule({
  declarations: [
    LoginComponent,
    RecoveryComponent,
    ForgotPasswordComponent,
    DialogboxComponent,
    AdminLoginComponent,
    adminLoginComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AuthRoutingModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    PdfViewerModule,
    MatFormFieldModule,
    MatIconModule
  ]
})
export class AuthModule { }
