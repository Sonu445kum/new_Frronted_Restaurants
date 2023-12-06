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
  return this.http.post("http://localhost:8080/user/login",userLoginData)
}
// here can call fetch api;
public fetchData(fetchDataFromBack:any){
  return this.http.get("http://localhost:8080/user/get",fetchDataFromBack)
}
checkToken( checkToken:any){
  return this.http.get('http://localhost:9090/user/token',checkToken)
}
}
