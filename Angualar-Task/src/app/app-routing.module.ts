import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminpannelComponent } from './adminpannel/adminpannel.component';
import { CountriesComponent } from './adminpannel/countries/countries.component';
// import { AuthGuard } from './_guards/auth.guard';
import { VehiclesComponent } from './ownerpannel/vehicles/vehicles.component';
import { LocationComponent } from './adminpannel/location/location.component';
import { AdminapprovevehiclesComponent } from './adminpannel/adminapprovevehicles/adminapprovevehicles.component';
import { PaymentreportsComponent } from './adminpannel/paymentreports/paymentreports.component';
import { ResetPassowrdComponent } from './adminpannel/reset-passowrd/reset-passowrd.component';
import { AddnewCarsComponent } from './ownerpannel/addnew-cars/addnew-cars.component';
import { DriversComponent } from './ownerpannel/drivers/drivers.component';
import { AddDriversComponent } from './ownerpannel/drivers/add-drivers/add-drivers.component';
import { ViewliscenceComponent } from './ownerpannel/drivers/viewliscence/viewliscence.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { AddLocationComponent } from './adminpannel/location/add-location/add-location.component';
import { EditLocationComponent } from './adminpannel/location/edit-location/edit-location.component';
import { ErrorPageComponent } from './error-page/error-page.component';


const routes: Routes = [
  { path:'', redirectTo: '/404', pathMatch: 'full' },
  // {path: '**', redirectTo: '/404'},
  {path: '404', component: ErrorPageComponent},
   
  { path:'Home', component: HomeComponent },
  { path:'login', component: LoginComponent },
  { path:'register', component: RegisterComponent },
  { path:'admin', component: AdminpannelComponent ,},
  { path:'countries', component: CountriesComponent,},
  { path:'vehicles', component: VehiclesComponent,},
  { path:'locations', component: LocationComponent,},
  { path:'admin-vehicles', component: AdminapprovevehiclesComponent,},
  { path:'admin-paymentreports', component: PaymentreportsComponent,},
  { path:'admin-resetpassword', component: ResetPassowrdComponent,},
  { path:'add-cars', component: AddnewCarsComponent,},
  { path:'drivers', component: DriversComponent,},
  { path:'add-drivers', component: AddDriversComponent,},
  { path:'forgotpassword', component: ForgotpasswordComponent,},
  { path:'add-location', component: AddLocationComponent,},
  { path:'edit-location/:id/:name', component: EditLocationComponent,},

  { path:'view-licsense/:id', component: ViewliscenceComponent,},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
