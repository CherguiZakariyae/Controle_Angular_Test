import { Component, OnInit } from '@angular/core';
import { FormGroup, AbstractControl, FormBuilder, Validators } from '@angular/forms';
import { LoginUser } from 'src/Modals/login-user';
import { AuthentificationService } from '../authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  //email:string;
  //password:string;
  formGroup:FormGroup;
  email:AbstractControl;
  password:AbstractControl;
  loginUser:LoginUser;
  constructor(private _formBuilder:FormBuilder,private _authService:AuthentificationService) {
    this.formGroup= this._formBuilder.group({
      email:[null,[Validators.email]],
      password:[null,[Validators.minLength(8)]]
    });
    this.email=this.formGroup.controls.email;
    this.password=this.formGroup.controls.password;
    
    
   }
  onSubmit(){
    console.log(this.formGroup.value);
    console.log(this.email.value);
    console.log(this.password.value);
    this.loginUser={
      email:this.formGroup.value.email,
      password:this.formGroup.value.password
    };
    this._authService.onLogin(this.loginUser).then(Response=>{
      console.log(Response);
    });

  }

  ngOnInit() {
  }

}
