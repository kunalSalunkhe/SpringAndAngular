import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Account } from 'src/account';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

private baseUrl : string = 'http://localhost:8080/bank';

  constructor(private http: HttpClient) {
   }

   getAllAccounts(){
    console.log("inside getAllAccountsOfCustomer");
   }
}

