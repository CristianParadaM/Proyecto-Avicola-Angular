import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CrossmenuComponent } from './crossmenu/crossmenu.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { MenuComponent } from './menu/menu.component';
import { LateralmenuComponent } from './lateralmenu/lateralmenu.component';
import { ChickensComponent } from './chickens/chickens.component';
import { canActivate, redirectUnauthorizedTo } from '@angular/fire/auth-guard'
import { ReactiveFormsModule } from '@angular/forms';
import { SheedComponent } from './sheed/sheed.component';

const routes: Routes = [
  {path:'', redirectTo: '/home', pathMatch:'full'},
  {path:'home', component:HomeComponent},
{path:'home/login', component:LoginComponent},
  {path:'home/register', component:RegisterComponent},
  {path:'home/registerWithGoogle/:email/:name', component:RegisterComponent},
  {path:'home/registerWithFacebook/:email/:name', component:RegisterComponent},
  {path:'menu', component:MenuComponent, ...canActivate(()=> redirectUnauthorizedTo(['/home']))},
  {path:'chickens/:option', component:ChickensComponent, ...canActivate(()=> redirectUnauthorizedTo(['/home']))},
  {path:'sheeds/:option', component:SheedComponent, ...canActivate(()=> redirectUnauthorizedTo(['/home']))}
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CrossmenuComponent,
    AboutusComponent,
    ContactComponent,
    LoginComponent,
    HomeComponent,
    RegisterComponent,
    MenuComponent,
    LateralmenuComponent,
    ChickensComponent,
    SheedComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
