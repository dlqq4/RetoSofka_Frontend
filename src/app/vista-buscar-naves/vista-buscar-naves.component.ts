import { Component, OnInit } from '@angular/core';
import {TripuladaService} from "../servicios/tripulada.service";
import {Tripulada} from "../modelos/Tripulada";
import {HttpErrorResponse} from "@angular/common/http";
import {Lanzadera} from "../modelos/Lanzadera";
import {LanzaderaService} from "../servicios/lanzadera.service";
import {NoTripulada} from "../modelos/NoTripulada";
import {NotripuladaService} from "../servicios/notripulada.service";

@Component({
  selector: 'app-vista-buscar-naves',
  templateUrl: './vista-buscar-naves.component.html',
  styleUrls: ['./vista-buscar-naves.component.css']
})
export class VistaBuscarNavesComponent implements OnInit {
  public tripuladas: Tripulada[];
  public lanzaderas: Lanzadera[];
  public noTripuladas: NoTripulada[];

  public nombre : String;
  public pais : String;

  constructor(private tripuladaService: TripuladaService,
              private lanzaderaService: LanzaderaService,
              private notripuladaService :NotripuladaService) { }

  ngOnInit(): void {

  }

  public buscaTripulada(): void {
    this.tripuladaService.buscaNombre(this.nombre).subscribe(
      (response: Tripulada[]) =>{console.log(this.tripuladas = response)},
      (error:HttpErrorResponse)=> {alert(error.message)}
    )
    this.tripuladaService.buscaPais(this.pais).subscribe(
      (response: Tripulada[]) =>{console.log(this.tripuladas = response)},
      (error:HttpErrorResponse)=> {alert(error.message)}
    )
  }


  public buscaLanzadera(): void {
    this.lanzaderaService.buscaPais(this.pais).subscribe(
      (response: Lanzadera[]) =>{console.log(this.lanzaderas = response)},
      (error:HttpErrorResponse)=> {alert(error.message)}
    )
  }


  public buscaNoTripulada(): void {
    this.notripuladaService.buscaPais(this.pais).subscribe(
      (response: NoTripulada[]) =>{console.log(this.noTripuladas = response)},
      (error:HttpErrorResponse)=> {alert(error.message)}
    )
  }

  buscando(){
    this.buscaLanzadera()
    this.buscaTripulada()
    this.buscaNoTripulada()
  }

}
