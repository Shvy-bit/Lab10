import { Component, inject } from '@angular/core';
import { GameService, Category } from '../game-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-difficulty',
  imports: [RouterLink],
  templateUrl: './difficulty.html',
  styleUrl: './difficulty.css',
})
export class Difficulty {
  public gameService = inject(GameService);
  public categories = this.gameService.getCategories();
}
