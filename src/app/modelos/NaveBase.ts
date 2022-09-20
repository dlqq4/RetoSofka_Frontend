export abstract class NaveBase{

  id: Number;
  nombre: String;
  tipo: String;
  peso: Number;
  pais: String;
  combustible: String;
  imagen: String;

  protected constructor(){
  }

   abstract ruido(): void;

   abstract mision(): void;
}
