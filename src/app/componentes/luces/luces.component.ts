import { Component, OnInit } from '@angular/core';
import { MatSnackBar, MatProgressSpinner } from '@angular/material';

@Component({
  selector: 'app-luces',
  templateUrl: './luces.component.html',
  styleUrls: ['./luces.component.css']
})
export class LucesComponent implements OnInit {
  sinProcesar: boolean;
  disabled: boolean;
  constructor(private snackBar: MatSnackBar) {
    this.cambiaValor = this.cambiaValor.bind(this);
    this.sinProcesar = true
    this.disabled = false
  }
  cambiaValor() {
    this.disabled = !this.disabled
    if (this.disabled) {
        this.openSnackBar("Por favor Espere..","Procesando")
    }
  }
  openSnackBar(message: string, action: string) {
    this.snackBar.open(message, action, {
      duration: 3000,
    });
  }
  
  ngOnInit() {

  }

}
