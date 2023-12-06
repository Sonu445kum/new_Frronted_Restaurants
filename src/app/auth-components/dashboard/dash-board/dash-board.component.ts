import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { Router, Routes } from '@angular/router';

@Component({
  selector: 'app-dash-board',
  templateUrl: './dash-board.component.html',
  styleUrl: './dash-board.component.css'
})


export class DashBoardComponent {
  constructor(private router:Router) {}

publicquery(){
  this.router.navigateByUrl("/updateCategories")
}
}
