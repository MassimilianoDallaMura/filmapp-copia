import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Route } from '@angular/router';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MenuComponent } from './components/menu/menu.component';

import { FilmComponent } from './components/film/film.component';
import { PreferitiComponent } from './components/preferiti/preferiti.component';
import { DettagliComponent } from './components/dettagli/dettagli.component';
import { ProfiloComponent } from './components/profilo/profilo.component';
import { UtentiComponent } from './components/utenti/utenti.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';

const routes: Route[] = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'accedi',
    component: LoginComponent,
  },
  {
    path: 'registrati',
    component: RegisterComponent,
  },
  {
    path: 'film',
    component: FilmComponent,
  },
  {
    path: 'utenti',
    component: UtentiComponent,
  },
  {
    path: 'profilo',
    component: ProfiloComponent,
    children: [
      {
        path: 'dettagli',
        component: DettagliComponent,
      },
      {
        path: 'preferiti',
        component: PreferitiComponent,
      },
    ],
  },
];


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,

    FilmComponent,
    PreferitiComponent,
    DettagliComponent,
    ProfiloComponent,
    UtentiComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), FormsModule, ReactiveFormsModule, HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
