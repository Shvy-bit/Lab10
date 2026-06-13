import { Routes } from '@angular/router';
import { Start } from './start/start';
import { Difficulty } from './difficulty/difficulty';

export const routes: Routes = [
    {path: '', redirectTo: 'start', pathMatch:'full'},
    {path:'start', component: Start},
    {path: 'difficulty', component: Difficulty}
];
