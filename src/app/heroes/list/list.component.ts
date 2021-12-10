import { Component } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html'  
})
export class ListComponent {

  heroes: string[] = ['Ironman', 'Spiderman', 'Thor', 'Hulk', 'Captain America'];
  age: number[] = [54, 28, 35, 42, 33];
  deletedHeroe: string = '';
  index: number = 0;

  constructor() {
    
   }

   deleteHeroe(index: number) {     
     this.deletedHeroe = this.heroes.shift() || "";
   }
}
