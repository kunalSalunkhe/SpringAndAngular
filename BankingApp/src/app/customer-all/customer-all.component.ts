import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';
import { Page } from '../Page';
import { Account } from 'src/account';


@Component({
  selector: 'app-customer-all',
  templateUrl: './customer-all.component.html',
  styleUrls: ['./customer-all.component.css']
})
export class CustomerAllComponent implements OnInit {
  page?: Page<Customer> ;
  currentPage: number = 0;
  pageSize: number = 5;
  accounts?: Account[];

  constructor(private custService:CustomerService, private router: Router){
   }

   ngOnInit(): void {
    console.log("inside ngOnINit");
       this.getAllCustomers();
   }

   getAllCustomers(){
    console.log(" Customer All Componenet inside ngOnINit");
    this.custService.getAllCustomer(this.currentPage,this.pageSize).subscribe(
      page => { this.page = page});
   }

   goToPage(pageNumber: number): void {
    if (this.page === undefined) {
      return;
    }
    this.currentPage = pageNumber;
    this.getAllCustomers();
  }

  getAccounts(custId: any): void {
    console.log(custId);
    this.router.navigate(['/allAccounts', custId]);
  }
}
