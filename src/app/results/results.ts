import { Component, inject } from '@angular/core';
import { GameService } from '../game-service';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-results',
  imports: [RouterLink],
  templateUrl: './results.html',
  styleUrl: './results.css',
})
export class Results {
  private gameService = inject(GameService);

  public gamesMatches = this.gameService.getGamesMatches();
}
