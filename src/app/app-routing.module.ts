import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { NewsComponent } from './pages/news/news.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

const routes: Routes = [
  {path:'home',component: HomeComponent},
  {path:'noticias',component: NewsComponent},
  {path:'materias',component: MateriasComponent},
  {path:'personal',component: PersonalComponent},
  {path:'contacto',component: ContactoComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
