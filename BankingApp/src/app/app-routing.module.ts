import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomerAllComponent } from './customer-all/customer-all.component';
import { AddCustomerComponent } from './add-customer/add-customer.component';
import { EditCustomerComponent } from './edit-customer/edit-customer.component';
import { CustomerAccountsComponent } from './customer-accounts/customer-accounts.component';
import { LoginComponentComponent } from './login-component/login-component.component';
import { AdminComponentComponent } from './admin-component/admin-component.component';
import { UserComponentComponent } from './user-component/user-component.component';

const routes: Routes = [
  {path:'all', component: CustomerAllComponent},
  {path:'add', component: AddCustomerComponent},
  {path:'edit', component: EditCustomerComponent },
  {path:'allAccounts/:custId', component: CustomerAccountsComponent},
  {path: 'login', component: LoginComponentComponent},
  {path: 'admin', component: AdminComponentComponent},
  {path: 'user', component: UserComponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
