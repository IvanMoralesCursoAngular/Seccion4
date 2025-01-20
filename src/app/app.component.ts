import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi primera app de Angular';
  public counter: number = 10;

  //la funcion tiene un public por default, es mas comun no ponerselo
  increseBy( value:number ):void {
    this.counter += value;
  }

  reset() {
    this.counter = 10;
  }

}
