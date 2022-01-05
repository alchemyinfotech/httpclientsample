import { Component, OnInit } from '@angular/core';
import { CustomerService } from './customer.service';
import { Customer } from './customer';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  customers=new Array<Customer>();
  constructor(private service:CustomerService)
  {

  }
  
  ngOnInit(): void {
this.service.getCustomers().subscribe(Response=>{

this.customers=Response.map(items=>{

return new Customer(items.cname,items.address);


})

})


    throw new Error('Method not implemented.');
  }
  title = 'httpclientsample';
}
