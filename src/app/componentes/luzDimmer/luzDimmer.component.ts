import { Component, OnInit, Input } from '@angular/core';
import { LuzServiceService } from '../../servicios/luz/luzService.service';
import  Luz  from '../../domain/Luz';

@Component({
  selector: 'app-luzDimmer',
  templateUrl: './luzDimmer.component.html',
  styleUrls: ['./luzDimmer.component.css']
})
export class LuzDimmerComponent implements OnInit {
  luzService : LuzServiceService
  @Input() nombre: string;
  @Input() id: number;
   luz: Luz;
  posicion: number;
 
  errors=[];
  constructor( lucesService: LuzServiceService) {
    
    this.luzService=lucesService
    this.posicion=0;
  }
  
  formatLabel(value: number | null) {
    return Math.round(value *100 / 26 ) + "%";
  }
  
    async cambiarIntensidad(luz: Luz) {
        try {
            await this.luzService.ejecutarLuz(luz)
          } catch (error) {
              this.errors.push(error.error)
            }
        }
        ngOnInit() {
          this.luz = new Luz(this.id,0)
        }
        
}
