import { Component } from "@angular/core";

@Component({
    selector: 'app-heroe',
    templateUrl: 'heroe.component.html'
})

export class HeroeComponent{
    name: string = 'Ironman';
    age: number = 55;

    get capsName() {
        return this.name.toUpperCase();
    }

    getName(): string{
        return `${ this.name } - ${ this.age }`
    }

    changeName() {
        this.name = 'Spiderman';
    }

    changeAge() {
        this.age = 26;
    }
}