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

  public category: Category = this.gameService.getCategory();
  private word: string = this.gameService.getWord();

  public message = signal<string>("Ingresa una letra");

  public readKey(event: KeyboardEvent, input: HTMLInputElement){
    const charInput: string = event.key;
    const isLetter: boolean = /^[a-zA-ZñÑ]$/.test(charInput);

    if (!isLetter)
      this.message.set("'" + charInput + "' no es una letra");
    else {
      if (this.gameService.lettersInput().includes(charInput))
        this.message.set("Ya probaste '" + charInput + "'");
      else {
        if (this.gameService.word().split('').includes(charInput))
          this.message.set("Felicidades '" + charInput + "' es una letra");
        else {
          this.message.set("'" + charInput + "' no esta en la palabra");
          this.gameService.addAtempt();  
        }
      }
      this.gameService.lettersInput.update(curr => [...curr, charInput])
    }
    
    input.value = "";
  }
}
