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
  private gameService = inject(GameService);

  public categories = this.gameService.getCategories();

  public setCategory(category: Category) {
    this.gameService.setCategory(category);
  }
}
