import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AdminpannelComponent } from './adminpannel/adminpannel.component';
import { HomeComponent } from './home/home.component';
import { MaterialModule } from './material';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SidebarComponent } from './adminpannel/sidebar/sidebar.component';
import { HeaderComponent } from './adminpannel/header/header.component';
import { CountriesComponent } from './adminpannel/countries/countries.component';
import { AdminhomeComponent } from './adminpannel/adminhome/adminhome.component';
import { fakeBackendProvider } from './_services/backend.service';
// import { AuthGuard } from './_guards/auth.guard';
import { NavigationComponent } from './navigation/navigation.component';
import { OwnerpannelComponent } from './ownerpannel/ownerpannel.component';
import { VehiclesComponent } from './ownerpannel/vehicles/vehicles.component';
import { CompaniesComponent } from './adminpannel/companies/companies.component';
import { LocationComponent } from './adminpannel/location/location.component';
import { AdminapprovevehiclesComponent } from './adminpannel/adminapprovevehicles/adminapprovevehicles.component';
import { PaymentreportsComponent } from './adminpannel/paymentreports/paymentreports.component';
import { ResetPassowrdComponent } from './adminpannel/reset-passowrd/reset-passowrd.component';
import { AddnewCarsComponent } from './ownerpannel/addnew-cars/addnew-cars.component';
import { AuthInterceptor } from './_interceptor/jwtinterceptor';
import { LoginService } from './login/login.service';
import { AdminService } from './adminpannel/admin.service';
import { OwnerService } from './ownerpannel/owner.service';
import { DriversComponent } from './ownerpannel/drivers/drivers.component';
import { AddDriversComponent } from './ownerpannel/drivers/add-drivers/add-drivers.component';
import { LoadingComponent } from './loading/loading.component';
import { LoadingScreenInterceptor } from './_interceptor/loadinginterceptor';
import { LoadingService } from './loading/loading.service';
import { ViewliscenceComponent } from './ownerpannel/drivers/viewliscence/viewliscence.component';
import { ForgotpasswordComponent } from './forgotpassword/forgotpassword.component';
import { EditLocationComponent } from './adminpannel/location/edit-location/edit-location.component';
import { AddLocationComponent } from './adminpannel/location/add-location/add-location.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AdminpannelComponent,
    HomeComponent,
    SidebarComponent,
    HeaderComponent,
    CountriesComponent,
    AdminhomeComponent,
    NavigationComponent,
    OwnerpannelComponent,
    VehiclesComponent,
    CompaniesComponent,
    LocationComponent,
    AdminapprovevehiclesComponent,
    PaymentreportsComponent,
    ResetPassowrdComponent,
    AddnewCarsComponent,
    DriversComponent,
    AddDriversComponent,
    LoadingComponent,
    ViewliscenceComponent,
    ForgotpasswordComponent,
    EditLocationComponent,
    AddLocationComponent,
    ErrorPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    FormsModule,

    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule
  ],
  providers: [
    // AuthGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    { provide: HTTP_INTERCEPTORS, useClass: LoadingScreenInterceptor, multi: true },

    LoginService, AdminService, OwnerService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },

    // fakeBackendProvider,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
