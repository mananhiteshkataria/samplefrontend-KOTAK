import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerComponent } from './customer/customer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmployeeComponent } from './employee/employee.component';
import { FeedbackFormComponent } from './feedback-form/feedback-form.component';
import { FooterComponent } from './footer/footer.component';
import { AuthGuard } from './guard/auth.guard';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { LocateUsComponent } from './locate-us/locate-us.component';
import { LoginComponent } from './login/login.component';
import { OffersComponent } from './offers/offers.component';
import { SignupComponent } from './signup/signup.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: SignupComponent },
  { path: 'feedback', component: FeedbackFormComponent, canActivate: [AuthGuard] },
  { path: 'customer', component: CustomerComponent, canActivate: [AuthGuard] },
  { path: 'employee', component: EmployeeComponent, canActivate: [AuthGuard] },
  { path: 'locate', component: LocateUsComponent, canActivate: [AuthGuard] },
  { path: 'header', component: HeaderComponent },
  // { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard] },
  { path: "", redirectTo:"/login", pathMatch:'full'},
  { path: 'home', component:HomeComponent, canActivate: [AuthGuard]},
  { path: 'offer', component:OffersComponent, canActivate: [AuthGuard]},
  { path: 'footer', component: FooterComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
