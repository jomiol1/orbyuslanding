import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validator} from '@angular/forms';
import {IRegistryRequest } from '../model/registry.request.interface';
import {AuthService} from '../service/auth.service';
import * as data from '../model/country.json';

@Component({
  selector: 'app-registry',
  templateUrl: './registry.component.html',
  styleUrls: ['./registry.component.css']
})
export class RegistryComponent implements OnInit {

  registryForm: FormGroup;
  countries: any = (data as any).default;

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.registryForm = new FormGroup({
      name: new FormControl(''),
      email: new FormControl(''),
      password: new FormControl('')
    });
  }

  registry(form:IRegistryRequest){
    this.authService.registry(form).subscribe(data=>{
    });
  }

}
