import { Component, inject } from '@angular/core';
import { GameService } from '../game-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-category',
  imports: [RouterLink],
  templateUrl: './category.html',
  styleUrl: './category.css',
})
export class Category {
  public gameService = inject(GameService);
  public categories = this.gameService.getCategories()
  ;}
