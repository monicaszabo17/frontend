import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  myForm: FormGroup ;

  constructor(
    
    private formBuilder: FormBuilder,
    private http: HttpClient,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required],
      gender: ['', Validators.required],
      address: ['', Validators.required]
   });
  }
  //check  const mongodb in backend
signUp(form: FormGroup):void{
  console.log(this.myForm);
    this.http.post("mongodb/api/users/register", this.myForm.getRawValue())
      .subscribe(res => {
        console.log(res);
          this.router.navigate(['/login']);
      });
}

}
