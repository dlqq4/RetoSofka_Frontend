import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {VistaLanzaderaComponent} from "./vista-lanzadera/vista-lanzadera.component";
import {VistaNaveTripuladaComponent} from "./vista-nave-tripulada/vista-nave-tripulada.component";
import {VistaNOTripuladaComponent} from "./vista-no-tripulada/vista-no-tripulada.component";
import {VistaAgregarNavesComponent} from "./vista-agregar-naves/vista-agregar-naves.component";
import {VistaBuscarNavesComponent} from "./vista-buscar-naves/vista-buscar-naves.component";

const routes: Routes = [

  {path:  '', redirectTo: 'app-home', pathMatch:  'full' },
  {path: 'app-home', component:HomeComponent},
  {path: 'app-vista-lanzadera', component:VistaLanzaderaComponent},
  {path: 'app-vista-nave-tripulada', component:VistaNaveTripuladaComponent},
  {path: 'app-vista-no-tripulada', component:VistaNOTripuladaComponent},
  {path: 'app-vista-agregar-naves', component:VistaAgregarNavesComponent },
  {path: 'app-vista-buscar-naves', component:VistaBuscarNavesComponent},
  {path: '**', component: HomeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
