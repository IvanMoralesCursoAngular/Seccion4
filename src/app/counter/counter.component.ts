import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{counter}}</h3>

          <button (click)="increseBy(+1)">+1</button>
          <button (click)="reset()">reset</button>
          <button (click)="increseBy(-1)">-1</button>
          `
})
export class CounterComponent {

  public counter: number = 10;

  //la funcion tiene un public por default, es mas comun no ponerselo
  increseBy( value:number ):void {
    this.counter += value;
  }

  reset() {
    this.counter = 10;
  }

}
