import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignupComponent } from './auth-components/signup/signup.component';
import { LoginComponent } from './auth-components/login/login.component';
import { DashBoardComponent } from './auth-components/dashboard/dash-board/dash-board.component';
import { HomeComponent } from './auth-components/dashboard/home/home.component';
import { BestsellerComponent } from './auth-components/dashboard/bestseller/bestseller.component';
import { UpdateCategoriesComponent } from './dashBoardContent/update-categories/update-categories.component';


const routes: Routes = [
  {
    path: "signUp",
    component:SignupComponent,
    pathMatch:"full"
  },
 {
  path:"login",
  component:LoginComponent,
  pathMatch:"full"
 },
 {
  path:"home",
  component:HomeComponent,
  pathMatch:"full"
 },
 {
  path:"bestseller",
  component:BestsellerComponent,
  pathMatch:"full"
 },
 {
  path:"dashboard",
  component:DashBoardComponent,
  pathMatch:"full"
 },
 {
  path:"updateCategories",
  component:UpdateCategoriesComponent,
  pathMatch:"full"
 }
 
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
