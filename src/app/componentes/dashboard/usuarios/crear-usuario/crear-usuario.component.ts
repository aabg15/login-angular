import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Usuario } from 'src/app/interfaces/usuario';
import { UsuarioService } from 'src/app/services/usuario.service';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  tiles: any[] = [
    {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
    {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
    {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
    {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
  ];

  sexo :any[]=['Masculino','Femenino'];
  form:FormGroup;
  constructor(private fb:FormBuilder,private _usuarioService:UsuarioService,private router:Router, private _snackBar: MatSnackBar) { 
    this.form=this.fb.group({ //este formgroup tendra los 4 parametros del agregar usuario.
      usuario:['',Validators.required],
      nombre:['',Validators.required],
      apellido:['',Validators.required],
      sexo:['',Validators.required],
      //usuario,nombre,apellido,sexo, debe ir tal cual se puso en el 'group', 
    });
  }

  ngOnInit(): void {
  }
  agregarUsuario(){
    console.log(this.form);
    const user: Usuario={ // parecido a una instancia de la interface usuario-> USUARIO TIENE LOS ATRIBUTOS nombre,sexo,apellido,usuario
      usuario:this.form.value.usuario,
      nombre:this.form.value.nombre,
      apellido:this.form.value.apellido,
      sexo:this.form.value.sexo
    }
    console.log(user);

    this._usuarioService.agregarUsuario(user); //llamo al metodo del servicio USUARIO
    this.router.navigate(['/dashboard/usuarios']);

    //snack que muestra que se agrego el usuario!!!

    this._snackBar.open('Usuario ingresado correctamente!', '', {
      duration: 2000,
      horizontalPosition: 'center',
      verticalPosition: 'bottom'
    });

  }
}
