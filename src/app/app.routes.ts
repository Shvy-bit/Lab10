import { Routes } from '@angular/router';
import { Start } from './start/start';

export const routes: Routes = [
    {path: '', redirectTo: 'start', pathMatch:'full'},
    {path:'start', component: Start},
];
