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

  public categories = this.gameService.getCategory();

  private randomCategory(): Category {
    const index = Math.floor(Math.random() * this.categories.length);
    return this.categories[index];
  }
  private category: Category = this.randomCategory();

  public setCategory(category: Category) {
    this.category = category;
  }

  
}
