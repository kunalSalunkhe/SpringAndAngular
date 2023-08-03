import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../customer.service';
import { Customer } from '../customer';

@Component({
  selector: 'app-add-customer',
  templateUrl: './add-customer.component.html',
  styleUrls: ['./add-customer.component.css']
})
export class AddCustomerComponent /*implements OnInit*/ {

customer:Customer = {};
CustomerId?:number; 
isInserted?:boolean = false;
  constructor(private custService:CustomerService){
  }

  ngOnInit(): void {
  //  this.addCustomer();
  }

  addCustomer(){
    //this.isInserted = false;
    console.log(" Customer Add Componenet inside ngOnINit");
    this.custService.saveCustomer(this.customer).subscribe(
      data => {
        if(data != null){
          this.isInserted = true;
          this.CustomerId = data.customerId}
      }
     );
   }
}
