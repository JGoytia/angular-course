import { HeroeComponent } from './heroe/heroe.component';
import { NgModule } from '@angular/core'
import { ListComponent } from './list/list.component';
import { CommonModule } from '@angular/common';

@NgModule({
    declarations: [
        HeroeComponent,
        ListComponent
    ],
    exports: [
        ListComponent
    ],
    imports: [
        CommonModule
    ]
})

export class HeroesModule {

}