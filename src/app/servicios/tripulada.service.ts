
import {Injectable} from "@angular/core";
import {Observable} from "rxjs"; //SIRVE PARA REGOGER LA INFORMACIN DEVUELTA POR EL BACKEND
import {HttpClient} from "@angular/common/http"; //PERMITE ENVIAR UN REQUEST A UNA URL Y LEER SUS RESULTADOS
import {environment} from "../../environments/environment";
import {Tripulada} from "../modelos/Tripulada";

@Injectable({providedIn: 'root'})
export class TripuladaService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  //***************************************MÉTODOS CRUD************************************************


  public getNave(): Observable<Tripulada[]> {
    return this.http.get<Tripulada[]>(this.apiServerUrl+"/tripulada/listar");
  }

  public addNave(tripulada: Tripulada): Observable<Tripulada> {
    return this.http.post<Tripulada>(this.apiServerUrl+"/tripulada/agregar", tripulada);
  }

  public buscaNombre(nombre : String): Observable<Tripulada[]> {
    return this.http.get<Tripulada[]>(this.apiServerUrl+"/tripulada/nombre?filtro="+nombre);
  }

  public buscaPais(pais : String): Observable<Tripulada[]> {
    return this.http.get<Tripulada[]>(this.apiServerUrl+"/tripulada/pais?filtro="+pais);
  }
}
