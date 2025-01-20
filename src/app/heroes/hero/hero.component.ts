import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  //Se miran como si fueran propiedades, pero no lo son. Al llamarse en el html se llama sin parentesis
  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  //No es un get, y al llamarse en el html si se llama con el parentesis
  //Al ponerse como private solo estara disponible en el scope de esta clase, no fuera.
  getHeroDescription(): string {
    return `${ this.name } - ${ this.age }`;
  }

}
