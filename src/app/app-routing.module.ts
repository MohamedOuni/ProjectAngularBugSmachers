import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { ForumComponent } from './forum/forum.component';
import { RegistreComponent } from './auth/registre/registre.component';
import { LoginComponent } from './auth/login/login.component';
import { HomeAuthentifierComponent } from './home-authentifier/home-authentifier.component';
import { PostComponent } from './post/post.component';
import { PostTileComponent } from './post-tile/post-tile.component';
import { VoteButtonComponent } from './vote-button/vote-button.component';
import { ViewPostComponent } from './view-post/view-post.component';
import { UpdatePostComponent } from './update-post/update-post.component';

const routes: Routes = [
  {path:'home' , component:HomeComponent},
  {path:'reclamation' , component:ReclamationComponent},
  {path:'signup', component:RegistreComponent},
  {path:'signin', component:LoginComponent},
  {path:'homeauthentifier', component:HomeAuthentifierComponent},
  {path:'post/create', component:PostComponent},
  {path:'posts', component:PostTileComponent},
  {path:'view-post/:id', component:ViewPostComponent},
  {path:'forum', component:ForumComponent},
  {path:'forum', component:UpdatePostComponent},
  {path:'update-post/:id', component:ViewPostComponent},
  
  
  { path: '', redirectTo: 'home', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
