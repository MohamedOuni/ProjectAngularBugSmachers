import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ForumComponent } from './forum/forum.component';
import { RegistreComponent } from './auth/registre/registre.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeAuthentifierComponent } from './home-authentifier/home-authentifier.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'reclamation' , component:ReclamationComponent},
  {path:'forum', component:ForumComponent},
  {path:'signup', component:RegistreComponent},
  {path:'signin', component:LoginComponent},
  {path:'homeauthentifier', component:HomeAuthentifierComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
