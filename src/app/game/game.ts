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
  private gameService = inject(GameService);

  public category: Category = this.gameService.getCategory();
  private word: string = this.gameService.getWord(this.category);
  public wordEncrypt = signal<string[]>(new Array(this.word.length).fill('_'));

  private attempt = signal<number>(0);
  public dibujoUrl = computed<string>(() => "attempts/att0" + this.attempt() + ".png");

  public message = signal<string>("Ingresa una letra");

  public isFill = computed<boolean>(() => this.word === this.wordEncrypt().join(''));
  public gameOver = computed<boolean>(() => this.attempt() > 5 || this.isFill());

  public readKey(event: KeyboardEvent, input: HTMLInputElement){
    const charInput: string = event.key;
    const isLetter: boolean = /^[a-zA-ZñÑ]$/.test(charInput);

    if (!isLetter) {
      this.message.set("'" + charInput + "' no es una letra");
    }

    else {
      if(!this.isNew(charInput)) this.message.set("'"+ charInput + "' ya fue ingresado");
      else this.Decrypt(charInput);
    }

    input.value = "";
  }

  private isNew(charInput: string): boolean {
    let isNew = true;
    const word = this.wordEncrypt();
    for (const char of word) {
      if (charInput === char) isNew = false;
    }
    return isNew;
  }

  private Decrypt(char: string) {
    const wordSplit = this.word.split('');
    let attemptValid = false;

    this.wordEncrypt.update(curr => {
      const out = [...curr]; 
      
      for (let i = 0; i < wordSplit.length; i++) {
        if (wordSplit[i] === char) {
          out[i] = char;
          attemptValid = true;
        }
      }
      return out;
    });
    
    if (attemptValid) this.message.set("Felicidades '" + char + "' es una letra");
    else {
      this.message.set("'" + char + "' no esta en la palabra");
      this.attempt.update(curr => curr + 1)
    }
  }
  public saveGame() {
    this.gameService.saveGame(this.category, this.word, this.isFill());
  }
}
