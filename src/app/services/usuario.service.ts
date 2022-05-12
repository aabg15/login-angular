import { Injectable } from '@angular/core';
import { Usuario } from '../interfaces/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  listaUsuarios: Usuario[] = [
    { usuario: "abonilla", nombre: "Hydrogen", apellido: "Bonlla", sexo: 'H' },
    { usuario: "jperez", nombre: "Hydrogen", apellido: "Bonlla", sexo: 'H' },
    { usuario: "user", nombre: "Hydrogen", apellido: "Bonlla", sexo: 'H' },
    { usuario: "admini", nombre: "Hydrogen", apellido: "Bonlla", sexo: 'H' },
    { usuario: "mejor", nombre: "Hydrogen", apellido: "Bonlla", sexo: 'H' },
    { usuario: "logo", nombre: "Hydrogen", apellido: "Bonlla", sexo: 'F' },
    { usuario: "jperez", nombre: "Hydrogen", apellido: "Bonlla", sexo: 'H' },
    { usuario: "user", nombre: "Hydrogen", apellido: "Bonlla", sexo: 'H' },
    { usuario: "admini", nombre: "Hydrogen", apellido: "Bonlla", sexo: 'H' },
    { usuario: "mejor", nombre: "Hydrogen", apellido: "Bonlla", sexo: 'H' },
    { usuario: "logo", nombre: "Hydrogen", apellido: "Bonlla", sexo: 'F' },
    { usuario: "jperez", nombre: "Hydrogen", apellido: "Bonlla", sexo: 'H' },
    { usuario: "user", nombre: "Hydrogen", apellido: "Bonlla", sexo: 'H' },
    { usuario: "admini", nombre: "Hydrogen", apellido: "Bonlla", sexo: 'H' },
    { usuario: "mejor", nombre: "Hydrogen", apellido: "Bonlla", sexo: 'H' },
    { usuario: "logo", nombre: "Hydrogen", apellido: "Bonlla", sexo: 'F' },
  ];

  constructor() { }

  getUsuarios(){
    return this.listaUsuarios.slice(); //slice()-> metodo que retorna una copia del array
  }

  eliminarUsuario(index:number){
    this.listaUsuarios.splice(index,1); //splice() -> para eliminar un elemento de un array.

  }

  agregarUsuario(usuario:Usuario){
    this.listaUsuarios.unshift(usuario);
    

  }
}
