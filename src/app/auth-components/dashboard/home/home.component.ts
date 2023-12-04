import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth-service/auth-service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent  implements OnInit{
 constructor( private authService:AuthService,
  router:Router){

 }
 ngOnInit(): void {
     
 }
}
