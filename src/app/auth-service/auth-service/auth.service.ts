import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http:HttpClient) { }
 public signupMethod(userSignUpData:any){
  return this.http.post(`http://localhost:8080/user/signUp`,userSignUpData)
 }
 // login api call
 public loginMethod(userLoginData:any){
  return this.http.post("http://localhost:9090/users/login",userLoginData)
}
checkToken(){
  return this.http.get('http://localhost:9090/user/token')
}
}
