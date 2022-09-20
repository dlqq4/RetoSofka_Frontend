import { Component, OnInit } from '@angular/core';
import {TripuladaService} from "../servicios/tripulada.service";
import {HttpErrorResponse} from "@angular/common/http";
import {Tripulada} from "../modelos/Tripulada";

@Component({
  selector: 'app-vista-nave-tripulada',
  templateUrl: './vista-nave-tripulada.component.html',
  styleUrls: ['./vista-nave-tripulada.component.css'],
  providers: [TripuladaService]
})

export class VistaNaveTripuladaComponent implements OnInit {
  public tripuladas: Tripulada[];

  constructor(private tripuladaService: TripuladaService) { }

  ngOnInit(): void {
    this.getNave()
  }

  public getNave(): void {
    this.tripuladaService.getNave().subscribe(
      (response: Tripulada[]) =>{console.log(this.tripuladas = response)},
      (error:HttpErrorResponse)=> {alert(error.message)}
    )
  }


}
