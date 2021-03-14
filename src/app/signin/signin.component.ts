import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup} from '@angular/forms';
import { Router } from '@angular/router';
import {HttpClient} from '@angular/common/http';


@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  myForm: FormGroup;

  constructor(
      private formBuilder: FormBuilder,
      private http: HttpClient,
      private router: Router
  ) { }

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
       email: ['some@email.com', Validators.required],
       password:['',Validators.required]
       });
  }
  //check const mongodb from backend=for url
signIn(form: FormGroup):void{
  console.log("Email", this.myForm.value.email);
    this.http.post("mongodb/api/users/login", this.myForm.getRawValue())
      .subscribe(() => this.router.navigate(['/']));
}

}
