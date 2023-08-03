import { Component } from '@angular/core';
import { Customer } from '../customer';
import { CustomerService } from '../customer.service';

@Component({
  selector: 'app-edit-customer',
  templateUrl: './edit-customer.component.html',
  styleUrls: ['./edit-customer.component.css']
})
export class EditCustomerComponent {

  customer: Customer = {};

  constructor(private custService:CustomerService){
  }

  getCustId(customerId:number){
    this.customer.customerId = customerId;
  }

  editCustomer(){
    console.log(" Customer Edit Componenet inside ngOnINit");
    this.custService.editCustomer(this.customer).subscribe(
      data => {
        
      }
     );
   }
  
}
