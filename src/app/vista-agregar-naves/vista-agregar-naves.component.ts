import { Component, OnInit } from '@angular/core';
import {TripuladaService} from "../servicios/tripulada.service";
import {LanzaderaService} from "../servicios/lanzadera.service";
import {NotripuladaService} from "../servicios/notripulada.service";
import {Tripulada} from "../modelos/Tripulada";
import {HttpErrorResponse} from "@angular/common/http";
import {Lanzadera} from "../modelos/Lanzadera";
import {NoTripulada} from "../modelos/NoTripulada";
import {Router} from "@angular/router";

@Component({
  selector: 'app-vista-agregar-naves',
  templateUrl: './vista-agregar-naves.component.html',
  styleUrls: ['./vista-agregar-naves.component.css']
})
export class VistaAgregarNavesComponent implements OnInit {

  tripulada : Tripulada = new Tripulada();
  lanzadera : Lanzadera = new Lanzadera();
  noTripulada : NoTripulada = new NoTripulada();

  public formLanzadera : boolean = true;
  public formTripulada : boolean = true;
  public formNoTripulada : boolean = true;

  public valorForm : number = 0;

  constructor(private tripuladaService: TripuladaService,
              private lanzaderaService: LanzaderaService,
              private notripuladaService :NotripuladaService,
              public router: Router) { }


  ngOnInit(): void {
  }

  ngDoCheck(){
    this.eligeFormmulario()
  }

  guardarTripulada(tripulada : Tripulada){
    this.tripuladaService.addNave(tripulada).subscribe(
      response =>{alert(tripulada.nombre+" Se agrego con exito!")},
      (error:HttpErrorResponse)=> {alert(error.message)}
    );
  }

  guardarLanzadera(lanzadera : Lanzadera){
    this.lanzaderaService.addNave(lanzadera).subscribe(
      response =>{alert(lanzadera.nombre+" Se agrego con exito!")},
      (error:HttpErrorResponse)=> {alert(error.message)}
    );
  }

  guardarNoTripulada(noTripulada : NoTripulada){
    this.notripuladaService.addNave(noTripulada).subscribe(
      response =>{alert(noTripulada.nombre+" Se agrego con exito!")},
      (error:HttpErrorResponse)=> {alert(error.message)}
    );
  }

  /*
  Crear una clase principal que permita crear las naves de forma tal este
  bajo una condición booleana o por medio de una regla estipulada dentro
  de un switch-case o if-else.
  **/

  eligeFormmulario(){

    switch (this.valorForm){

      case 1 :
        this.formTripulada = false;
        console.log("Formulario Tripulada :" + this.formTripulada);
        break;

      case 2 :
        this.formNoTripulada = false;
        console.log("Formulario No Tripulada :" + this.formNoTripulada);
        break;

      case 3 :
        this.formLanzadera= false;
        console.log("Formulario Lanzadera :" + this.formLanzadera);
        break;
    }
  }


}
