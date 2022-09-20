import { Component, OnInit } from '@angular/core';
import {LanzaderaService} from "../servicios/lanzadera.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public tituloHome = "Home";


  constructor(private lanzaderaService: LanzaderaService) {
  }

  ngOnInit(): void {
  }

}
