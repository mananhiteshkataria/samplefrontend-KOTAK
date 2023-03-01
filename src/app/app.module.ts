import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { RECAPTCHA_SETTINGS, RecaptchaFormsModule, RecaptchaModule, RecaptchaSettings } from 'ng-recaptcha';
import { environment } from 'src/environments/environment';
import { CustomerComponent } from './customer/customer.component';
import { CustAddComponent } from './cust-add/cust-add.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { EmployeeComponent } from './employee/employee.component';
import { EmpAddComponent } from './emp-add/emp-add.component';
import { LocateUsComponent } from './locate-us/locate-us.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { HeaderComponent } from './header/header.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeComponent } from './home/home.component';
import { LogHeadComponent } from './log-head/log-head.component';
import { OffersComponent } from './offers/offers.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { LogFooterComponent } from './log-footer/log-footer.component';



@NgModule({
  declarations: [
    AppComponent,
    FeedbackFormComponent,
    CustomerComponent,
    CustAddComponent,
    EmployeeComponent,
    EmpAddComponent,
    LocateUsComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    DashboardComponent,
    HomeComponent,
    LogHeadComponent,
    OffersComponent,
    Child1Component,
    Child2Component,
    LogFooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RecaptchaModule,
    RecaptchaFormsModule,
    MatTableModule, MatPaginatorModule, MatSortModule, MatSnackBarModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatToolbarModule, MatIconModule, MatButtonModule, MatDialogModule, MatFormFieldModule, MatInputModule,
    MatDatepickerModule
  ],
  providers: [
    {
      provide: RECAPTCHA_SETTINGS,
      useValue: {
        siteKey: environment.recaptcha.siteKey,
      } as RecaptchaSettings,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
