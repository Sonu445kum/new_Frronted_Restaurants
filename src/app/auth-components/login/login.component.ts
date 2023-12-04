import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth-service/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent  implements OnInit{
userData={
  email:'',
  password:''
}
// onInit method
ngOnInit(): void {
    
}
// create a constructor for loginComponents;
constructor(private loginService:AuthService,private router:Router){

}
// logic
formSubmit(){
  this.loginService.loginMethod(this.userData).subscribe(
    (data:any)=>{
      console.log("data"+data);
      // this.loginService.loginUser(data.JwtToken)
     
      
    }
  )
}

}
