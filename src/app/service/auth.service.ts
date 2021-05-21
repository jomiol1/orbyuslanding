import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {ILoginRequest} from '../model/login.request.interface';
import {ILoginResponse} from '../model/login.response.interface';
import { IRegistryRequest} from '../model/registry.request.interface';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private urlLogin: string = environment.urlPath + 'auth/login';
  private urlRegister: string = environment.urlPath + 'auth/register';

  constructor(private http: HttpClient) {}

  login(req:ILoginRequest):Observable<ILoginResponse>{
    return this.http.post<ILoginResponse>(this.urlLogin,req);
  }

  registry(req:IRegistryRequest):Observable<ILoginResponse>{
    return this.http.post<ILoginResponse>(this.urlRegister,req);
  }
}
