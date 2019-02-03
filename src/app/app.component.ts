import { Component } from '@angular/core';

interface ItemMenu{
  nombre:string
  icono:string
  ruta:string
}
  @Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})



export class AppComponent {
  constructor() { }
  
  ngOnInit() { }
  menu: Array<ItemMenu> = [
    {nombre:"Luces",icono:"brightness_low",ruta:"/luces"},
    {nombre:"Audio",icono:"music_note",ruta:"/audio"},
    {nombre:"Control remoto",icono:"tv",ruta:"/controlRemoto"}
  ]
}
