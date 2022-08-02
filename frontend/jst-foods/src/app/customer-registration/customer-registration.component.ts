import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { CustomerRegistrationService } from '../custome-registration.service';

@Component({
  selector: 'app-customer-registration',
  templateUrl: './customer-registration.component.html',
  styleUrls: ['./customer-registration.component.css']
})
export class CustomerRegistrationComponent implements OnInit {
  customerRegistrationForm: FormGroup;
  o: any;
  value :any;
  constructor(private fb: FormBuilder, private crs: CustomerRegistrationService) {
    this.customerRegistrationForm = this.fb.group({
      id:[''],
      contact: ['', [Validators.required]],
      email: ['', [Validators.required]],
      name: ['', [Validators.required]],
      password: ['', [Validators.required]],
      cpassword: ['', [Validators.required]]
    });
  }

  ngOnInit(): void {
  }

  // fnSubmit() {
  //   if(this.customerRegistrationForm.invalid){
  //     console.log(this.customerRegistrationForm);
      
  //     alert('Customer valid details are required');
  //     return;
  //   }
  //     this.o=this.crs.fnCreate(this.customerRegistrationForm.value).subscribe((data:any)=>{
  //       console.log(data)
  //       //  alert(this.customerRegistrationForm.id);
  //         if(this.o!=null)
  //       {  
  //           alert("Sign-up successfull: You can login and Enjoy  ");
  //         alert(`login with id ${data.id}`);
  //         localStorage.setItem('userdetails', JSON.stringify(data))
          
  //         }
      
  //     });
    
  // }
  fnSubmit() {
    if(this.customerRegistrationForm.invalid){
      console.log(this.customerRegistrationForm);
      alert('Customer valid details are required');
      return;
    }
       this.o=this.crs.fnCreate(this.customerRegistrationForm.value).subscribe(data=>{
        console.log(data);
        this.value = data;
        if(this.value.message == "email_already_exits"){
          alert("Email is already used. Please use alternative email id.");
        }else if(this.value.message == "invalid_contact_number"){
          alert("Please enter valid contact number!");
        }
          else if(this.value.message == "invalid_email"){
            alert("Please enter valid email!");}
            else if(this.value.message == "invalid_password"){
              alert("Please enter valid password!");
            }
        else if(this.o!=null){
          alert("Sign-up successfull: You can login and Enjoy  ");
          if(this.value.id){
            alert(`login with id ${this.value.id}`);
          }
          localStorage.setItem('userdetails', JSON.stringify(data));
       }
      })
  }
}
