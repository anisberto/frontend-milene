import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { CadastroQuadraComponent } from './components/quadras/cadastro/cadastro.component';

const routes: Routes = [
  { path: 'home', component:  HomeComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: 'login', component:  LoginComponent },
  { path: 'cadastro-quadras', component:  CadastroQuadraComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
