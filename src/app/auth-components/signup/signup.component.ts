import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth-service/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.css'
})
export class SignupComponent  implements OnInit{
userData={
  name:'',
  contactNumber:'',
  email:'',
  password:'',
  role:'',
  status:''
}
// here we are ngOnInit because i have send the data to Backend;
ngOnInit(): void {
    
}
constructor(private authService:AuthService,private route:Router){

}
formSubmit(){
  this.authService.signupMethod(this.userData).subscribe((data:any)=>{
    console.log(data);
    this.route.navigateByUrl('/login')
    
  }

  )
}
login(){
  this.route.navigateByUrl('')
}
}
