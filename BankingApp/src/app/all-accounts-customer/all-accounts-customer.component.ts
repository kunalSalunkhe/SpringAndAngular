import { Component } from '@angular/core';
import { Account } from 'src/account';
import { AccountService } from '../account-service';

@Component({
  selector: 'app-all-accounts-customer',
  templateUrl: './all-accounts-customer.component.html',
  styleUrls: ['./all-accounts-customer.component.css']
})
export class AllAccountsCustomerComponent {

  accounts?: any[];

  constructor(private accountService:AccountService){

  }

  // ngOnInit(): void {
  //   console.log("inside ngOnINit");
  //      this.getAllAccounts();
  //  }

  //  getAllAccounts(){
  //   console.log(" Customer All Componenet inside ngOnINit");
  //   this.accountService.getAllAccounts().subscribe(
  //     (      data: any[] | undefined) => {this.accounts=data}
  //  )}
    
}
