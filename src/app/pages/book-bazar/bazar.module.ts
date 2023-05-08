import { NgModule } from '@angular/core';
import { BookBazarComponent } from './book-bazar.component';
import { RouterModule, Routes } from '@angular/router';
import { BookCardModule } from 'src/app/common/components/book-card/book-card.module';

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
        RouterModule.forChild(routes),
        BookCardModule
    ]
})
export class BazarModule { }
