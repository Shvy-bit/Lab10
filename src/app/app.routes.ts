import { Routes } from '@angular/router';
import { Start } from './start/start';
import { Game } from './game/game';
import { Results } from './results/results';
import { Category } from './category/category';

export const routes: Routes = [
    {path: '', redirectTo: 'start', pathMatch:'full'},
    {path:'start', component: Start},
    {path: 'category', component: Category},
    {path: 'game', component: Game},
    {path: 'results', component: Results}
];
