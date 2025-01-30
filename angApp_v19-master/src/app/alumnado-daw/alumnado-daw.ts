export class Alumnado{
    constructor(
        public nombre:string,
        public apellidos:string,
        public dni:string,
        public fecha_nacimiento:string,
        public poblacion:string,
        public telefono:string,
        public curso:string,
        public modulos:Array<string>,
    ){}
}