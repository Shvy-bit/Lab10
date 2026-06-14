import { Component, computed, inject, signal } from '@angular/core';
import { Category, GameService } from '../game-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-game',
  imports: [RouterLink],
  templateUrl: './game.html',
  styleUrl: './game.css',
})
export class Game {
  public gameService = inject(GameService);

  public message: string = "Ingrese una letra";

  public readKey(event: KeyboardEvent, input: HTMLInputElement){
    const charInput: string = event.key;
    const isLetter: boolean = /^[a-zA-ZñÑ]$/.test(charInput);

    if (!isLetter) {
      this.message = "'" + charInput + "' no es una letra";
      this.gameService.score.update(curr => curr - 10);
    }
    else {
      if (this.gameService.lettersInput().includes(charInput)) {
        this.message = "Ya probaste '" + charInput + "'";
        this.gameService.score.update(curr => curr - 20);
      }
      else {
        if (this.gameService.word().split('').includes(charInput)) {
          this.message = "Felicidades '" + charInput + "' es una letra";
          this.gameService.score.update(curr => curr + 100);
        }
        else {
          this.message = "'" + charInput + "' no esta en la palabra";
          this.gameService.addAtempt();  
          this.gameService.score.update(curr => curr - 50);
        }
      }
      this.gameService.lettersInput.update(curr => [...curr, charInput])
    }
    
    input.value = "";
  }
}
