//ESTA CLASE TIENE COMO OBJETIVO LA REUTILIZACION MEDIANTE LA INYECCION DE DEPENDENCIAS.
//DE ESTA MANERA LAS PODEMOS USAR EN OTROS COMPONENTES PRINCIPALES.

import {Injectable} from "@angular/core";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {Lanzadera} from "../modelos/Lanzadera";


@Injectable({providedIn: 'root'}) //DECORADOR INYECTABLE PARA SER USADA EN OTRAS CLASES
export class LanzaderaService {
  private apiServerUrl = environment.apiBaseUrl; //ATRIBUTO DE LA URL A CONSUMIR

  constructor(private http: HttpClient) {}

  //***************************************MÉTODOS CRUD************************************************

  public getNave(): Observable<Lanzadera[]> {
    return this.http.get<Lanzadera[]>(this.apiServerUrl+"/lanzadera/listar");
  }

  public addNave(lanzadera: Lanzadera): Observable<Lanzadera> {
    return this.http.post<Lanzadera>(this.apiServerUrl+"/lanzadera/agregar", lanzadera);
  }

  public buscaPais(pais : String): Observable<Lanzadera[]> {
    return this.http.get<Lanzadera[]>(this.apiServerUrl+"/lanzadera/pais?filtro="+pais);
  }


}
