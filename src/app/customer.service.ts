import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Customer } from './customer';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
private url:string ='http://localhost:3200/customers'
  constructor(private httpClient: HttpClient) { }
public getCustomers():Observable<Customer[]>
{
  return this.httpClient.get<Customer[]>(this.url);
}

}
