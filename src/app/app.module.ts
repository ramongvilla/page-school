import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './pages/news/news.component';
import { MateriasComponent } from './pages/materias/materias.component';
import { PersonalComponent } from './pages/personal/personal.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { EnVivoComponent } from './pages/en-vivo/en-vivo.component';
import { AvisosComponent } from './pages/avisos/avisos.component';
import { TalleresComponent } from './pages/talleres/talleres.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    HeaderComponent,
    NewsComponent,
    MateriasComponent,
    PersonalComponent,
    ContactoComponent,
    EnVivoComponent,
    AvisosComponent,
    TalleresComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
