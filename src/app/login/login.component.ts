import { Component, OnInit } from '@angular/core';
import {AuthService} from '../service/auth.service';
import { FormGroup, FormControl, Validator} from '@angular/forms';
import {ILoginRequest} from '../model/login.request.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  login(form:ILoginRequest){
    this.authService.login(form).subscribe(data=>{
      console.log(data);
    });
  }

}
