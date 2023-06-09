import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { ForumComponent } from './forum/forum.component';
import { ReclamationComponent } from './reclamation/reclamation.component';
import { RegistreComponent } from './auth/registre/registre.component';
import { LoginComponent } from './auth/login/login.component';
import { httpInterceptorProviders } from './_helper/auth.interceptor';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { HeaderVisiteurComponent } from './header-visiteur/header-visiteur.component';
import { HomeAuthentifierComponent } from './home-authentifier/home-authentifier.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    ForumComponent,
    ReclamationComponent,
    RegistreComponent,
    LoginComponent,
    HeaderVisiteurComponent,
    HomeAuthentifierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [httpInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
