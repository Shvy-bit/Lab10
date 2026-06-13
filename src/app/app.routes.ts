import { Routes } from '@angular/router';
import { Start } from './start/start';
import { Difficulty } from './difficulty/difficulty';
import { Game } from './game/game';
import { Results } from './results/results';

export const routes: Routes = [
    {path: '', redirectTo: 'start', pathMatch:'full'},
    {path:'start', component: Start},
    {path: 'difficulty', component: Difficulty},
    {path: 'game', component: Game},
    {path: 'results', component: Results}
];
