import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { VistaNaveTripuladaComponent } from './vista-nave-tripulada/vista-nave-tripulada.component';
import { VistaNOTripuladaComponent } from './vista-no-tripulada/vista-no-tripulada.component';
import { VistaLanzaderaComponent } from './vista-lanzadera/vista-lanzadera.component';
import { VistaAgregarNavesComponent } from './vista-agregar-naves/vista-agregar-naves.component';
import { VistaBuscarNavesComponent } from './vista-buscar-naves/vista-buscar-naves.component';
import {HttpClientModule} from "@angular/common/http";
import {RouterOutlet} from "@angular/router";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ToolbarComponent,
    VistaNaveTripuladaComponent,
    VistaNOTripuladaComponent,
    VistaLanzaderaComponent,
    VistaAgregarNavesComponent,
    VistaBuscarNavesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterOutlet,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
