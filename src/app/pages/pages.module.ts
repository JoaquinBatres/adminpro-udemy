import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { FormsModule} from "@angular/forms"

import { DashboardComponent } from './dashboard/dashboard.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { ProgressComponent } from './progress/progress.component';
import { PagesComponent } from './pages.component';
import { PAGES_ROUTES } from './pages.routes';
import { importType } from '@angular/compiler/src/output/output_ast';
import { from } from 'rxjs';
import { IncrementadorComponent } from '../components/incrementador/incrementador.component';

@NgModule({
    declarations: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        PagesComponent,
        IncrementadorComponent
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent,
        PagesComponent
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]
})

export class PagesModule { }