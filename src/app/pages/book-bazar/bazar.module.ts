import { NgModule } from '@angular/core';
import { BookBazarComponent } from './book-bazar.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        component: BookBazarComponent
    }
];


@NgModule({
    declarations: [
        BookBazarComponent
    ],
    imports: [
        RouterModule.forChild(routes)
    ]
})
export class BazarModule { }
