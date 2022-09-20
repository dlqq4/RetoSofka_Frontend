import { Component, OnInit } from '@angular/core';
import {NotripuladaService} from "../servicios/notripulada.service";
import {NoTripulada} from "../modelos/NoTripulada";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-vista-no-tripulada',
  templateUrl: './vista-no-tripulada.component.html',
  styleUrls: ['./vista-no-tripulada.component.css'],
  providers: [NotripuladaService]
})
export class VistaNOTripuladaComponent implements OnInit {
  public noTripuladas: NoTripulada[];


  constructor(private notripuladaService :NotripuladaService) { }

  ngOnInit(): void {
    this.getNave()
  }

  public getNave(): void {
    this.notripuladaService.getNave().subscribe(
      (response: NoTripulada[]) =>{console.log(this.noTripuladas = response)},
      (error:HttpErrorResponse)=> {alert(error.message)}
    )
  }


}
