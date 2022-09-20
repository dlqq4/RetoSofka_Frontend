
import {Injectable} from "@angular/core";
import {Observable} from "rxjs"; //SIRVE PARA REGOGER LA INFORMACIN DEVUELTA POR EL BACKEND
import {HttpClient} from "@angular/common/http"; //PERMITE ENVIAR UN REQUEST A UNA URL Y LEER SUS RESULTADOS
import {environment} from "../../environments/environment";
import {NoTripulada} from "../modelos/NoTripulada";
import {Tripulada} from "../modelos/Tripulada";


@Injectable({providedIn: 'root'})
export class NotripuladaService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  //***************************************MÉTODOS CRUD************************************************


  public getNave(): Observable<NoTripulada[]> {
    return this.http.get<NoTripulada[]>(this.apiServerUrl+"/notripulada/listar");
  }

  public addNave(notripulada: NoTripulada): Observable<NoTripulada> {
    return this.http.post<NoTripulada>(this.apiServerUrl+"/notripulada/agregar", notripulada);
  }

  public buscaPais(pais : String): Observable<NoTripulada[]> {
    return this.http.get<NoTripulada[]>(this.apiServerUrl+"/notripulada/pais?filtro="+pais);
  }
}
