import { Routes } from '@angular/router';
import { Start } from './start/start';
import { Difficulty } from './difficulty/difficulty';
import { Game } from './game/game';

export const routes: Routes = [
    {path: '', redirectTo: 'start', pathMatch:'full'},
    {path:'start', component: Start},
    {path: 'difficulty', component: Difficulty},
    {path: 'game', component: Game},
];
