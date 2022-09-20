import { Component, OnInit } from '@angular/core';
import {LanzaderaService} from "../servicios/lanzadera.service";
import {Lanzadera} from "../modelos/Lanzadera";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-vista-lanzadera',
  templateUrl: './vista-lanzadera.component.html',
  styleUrls: ['./vista-lanzadera.component.css'],
  providers: [LanzaderaService]
})
export class VistaLanzaderaComponent implements OnInit {
  public lanzaderas: Lanzadera[];

  constructor(private lanzaderaService: LanzaderaService) { }

  ngOnInit(): void {
    this.getNave()
  }


  public getNave(): void {
    this.lanzaderaService.getNave().subscribe(
      (response: Lanzadera[]) =>{console.log(this.lanzaderas = response)},
      (error:HttpErrorResponse)=> {alert(error.message)}
    )
  }

}
