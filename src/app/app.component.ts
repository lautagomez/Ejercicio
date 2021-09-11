import { Component } from '@angular/core';
import { MaxValidator } from '@angular/forms';
//import { fileURLToPath } from 'url';

@Component({
  selector: 'app-root', 
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})




export class AppComponent {
  
  
  title = 'ejercicio';
  carpetas: Array<String>=[];


  agregar(){
    const nombre = document.getElementById("nombre") as HTMLInputElement;
    
    const tabla = document.getElementById("tabla");
    const fila = "<tr> <td> <input type='checkbox'> <td>" + nombre.value + "<td> <button id='botonEdit' (click)='editar(" + nombre.value + ")' >Edit"; 
    var btn = document.createElement("TR");
    btn.innerHTML=fila;
    tabla?.appendChild(btn);    

    this.carpetas.push(nombre.value);
    console.log(this.carpetas);

  }

}


