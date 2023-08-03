import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { CustomerAllComponent } from './customer-all/customer-all.component';
import { FormsModule } from '@angular/forms';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import { AllAccountsCustomerComponent } from './all-accounts-customer/all-accounts-customer.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { UserComponentComponent } from './user-component/user-component.component';
//import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
//import { EditCustomerComponent } from './edit-customer/edit-customer.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    CustomerAllComponent,
    AddCustomerComponent,
    CustomerAccountsComponent,
    AllAccountsCustomerComponent,
    LoginComponentComponent,
    AdminComponentComponent,
    UserComponentComponent,
  //  CustomerAccountsComponent,
   // EditCustomerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
