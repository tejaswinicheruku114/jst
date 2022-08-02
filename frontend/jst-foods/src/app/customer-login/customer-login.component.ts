import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { CustomerRegistrationService } from '../custome-registration.service';

@Component({
  selector: 'app-customer-login',
  templateUrl: './customer-login.component.html',
  styleUrls: ['./customer-login.component.css']
})
export class CustomerLoginComponent implements OnInit {
customerLoginForm:FormGroup;
isLogin = false;
o:any;
value:any;
  constructor(private fb:FormBuilder,private cs:CustomerRegistrationService,private router:Router) { 
    this.customerLoginForm=this.fb.group({
    // id:[null, Validators.required],
   id:[null, Validators.required],
    password:[null, Validators.required]
    
  }); }
  ngOnInit(): void {
  }
    fnsubmit()
    {
      // if(this.customerLoginForm.invalid){
      //   alert('Valid login credential required')
      //   return;
      // } 
     // alert("hi");
      // this.o=this.cs.fnLogin(this.customerLoginForm.value).subscribe((data)=>console.log(data));
      // if(this.o!=null)
      // {
      //   alert("u are logged in");
         
      // }

      //New Code Starts Here ----

      this.o=this.cs.fnLogin(this.customerLoginForm.value).subscribe(data=>{
        console.log(data);
        this.value = data;
        if(this.value.message == "loginid_is_invalid"){
          alert("The login Id is invalid! Please use the valid login Id.");
        } else if(this.value.message == "Password_wrong"){
          alert("The password is wrong! Pleaase use the correct password.");
        } else if(this.o!=null){
          alert("You are logged in successfully!");
          this.router.navigate(['menu'])
          
       }
      })

      //New Code Ends Here ----



      
    }
    
  }
 
  



