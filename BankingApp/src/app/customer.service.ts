import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
import { Page } from './Page';
import { Account } from 'src/account';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

private baseUrl : string = 'http://localhost:8080/bank';

  constructor(private http: HttpClient) {
   }

   getAllCustomer(page:number,size:number):Observable<Page<Customer>>{
    console.log("inside getAllCustommer");
    let params = new HttpParams()
    .set('page', page.toString())
    .set('size', size.toString());

    return this.http.get<any>(`${this.baseUrl}/customers/`,{params});
   }

   getAllAccountsOfCustomer(custId: any):Observable<Account[]>{
    console.log("inside getAllAccountsOfCustomer");
    return this.http.get<any>(`${this.baseUrl}/account/allAccounts/${custId}`,);
   }

   saveCustomer(user: any):Observable<Customer> {
    console.log("inside saveCustomer");
    return this.http.post(`${this.baseUrl}/addCustomer`,user);
  }

  editCustomer(user: any):Observable<Customer> {
    console.log("inside editCustomer");
    return this.http.put(`${this.baseUrl}/editCustomer`,user);
  }
}

