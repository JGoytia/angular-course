import { Component } from "@angular/core";

@Component({
    selector: 'app-counter',
    template: `<h1>{{ title }}</h1>
    <h3>Base is {{ base }}</h3>
    <button (click)="add(base)">+{{ base }}</button>
    <span> {{ number }} </span>
    <button (click)="subtract(base)">-{{ base }}</button>
    `
})
export class CounterComponent {
  title = 'ActorsApp';
  number: number = 10;
  base: number = 5;

  add(value: number) {
    this.number += value;
  }

  subtract(value: number){
    if(this.number > 0)
    {
      this.number -= value;
    }
  }
}