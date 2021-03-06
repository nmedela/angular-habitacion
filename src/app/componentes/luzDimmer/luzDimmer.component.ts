import { Component, OnInit, Input } from '@angular/core';
import { LuzServiceService } from '../../servicios/luz/luzService.service';
import Luz from '../../domain/Luz';

@Component({
  selector: 'app-luzDimmer',
  templateUrl: './luzDimmer.component.html',
  styleUrls: ['./luzDimmer.component.css']
})
export class LuzDimmerComponent implements OnInit {
  luzService: LuzServiceService
  @Input() nombre: string;
  @Input() id: number;
  @Input() cambiaValor;
  @Input() deshabilitar: boolean;
  luz: Luz;
  posicion: number;
  errors = [];
  constructor(lucesService: LuzServiceService) {
    this.luzService = lucesService
    this.deshabilitar = false
  }

  formatLabel(value: number | null) {
    return Math.round(value * 100 / 26) + "%";
  }

  onInputChange() {
    this.cambiarIntensidad(this.posicion);
  }
  async cambiarIntensidad(valor: number) {
    this.cambiaValor()
    this.luz.intensity = 36 - valor
    try {
      await this.luzService.ejecutarLuz(this.luz)
      // console.log(this.luz.intensidad)
    } catch (error) {
      console.log(this.errors.push(error.error))
    }
    this.cambiaValor()
  }
  ngOnInit() {
    this.iniciar()
  }
  async iniciar() {
    try {
      this.luz = new Luz()
      this.luz = await this.luzService.getEstadoLuz(this.id)
      this.posicion= 35 - this.luz.intensity;
    } catch (error) {
      this.errors.push(error.error)
    }

  }
}
