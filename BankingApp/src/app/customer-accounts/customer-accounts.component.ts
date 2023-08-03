import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { ActivatedRoute } from '@angular/router';
import { Account } from 'src/account';

@Component({
  selector: 'app-customer-accounts',
  templateUrl: './customer-accounts.component.html',
  styleUrls: ['./customer-accounts.component.css']
})
export class CustomerAccountsComponent implements OnInit {

  custId?: any;
  accounts?: Account[];

  constructor (private custService: CustomerService , private route: ActivatedRoute){
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      params => {
        this.custId = params['custId']; // Replace 'paramName' with the actual parameter name defined in the route path
        // Use the parameter value in your component logic
        console.log(this.custId);
      }
    );
    this.getAllAccounts(this.custId);
  }
 
  getAllAccounts(custId: any){
    this.custService.getAllAccountsOfCustomer(custId).subscribe(
      data => {
        this.accounts = data;
      }
    )
  }

}
