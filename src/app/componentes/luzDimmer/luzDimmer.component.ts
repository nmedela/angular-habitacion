import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-luzDimmer',
  templateUrl: './luzDimmer.component.html',
  styleUrls: ['./luzDimmer.component.css']
})
export class LuzDimmerComponent implements OnInit {
  posicion: number = 0;

  constructor() { }
  formatLabel(value: number | null) {
    return Math.round(value *100 / 25 ) + "%";
  }
  ngOnInit() {
  }

}
