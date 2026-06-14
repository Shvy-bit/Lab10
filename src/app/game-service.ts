import { computed, Service, Signal, signal } from '@angular/core';

export interface Category {
    name: string;
    words: string[];
}
export interface GameMatch {
    id: number;
    category: Category;
    word: string;
    wordEncrypt :string[];
    image: string;
    time: number;
    score: number;
    won: boolean;
}
@Service()
export class GameService {
    private readonly categories: Category[] = [
    {
        name: 'Animales',
        words: ['perro', 'gato', 'elefante', 'jirafa'],
    },
    {
        name: 'Tecnología',
        words: ['computadora', 'teclado', 'software', 'angular'],
    },
    {
        name: 'Países',
        words: ['argentina', 'mexico', 'japon'],
    }
    ];
    private gamesMatches: GameMatch[] = [];
    
    private attempt = signal(0);
    public category = signal<Category>(this.categories[Math.floor(Math.random() * this.categories.length)]);
    public lettersInput = signal<string[]>([]);
    
    public word = computed<string>(() => this.category().words[Math.floor(Math.random() * this.category().words.length)]);
    public wordEncrypt = computed<string[]>(() => this.word().split('').map(
        letter => this.lettersInput().includes(letter) ? letter : '_'
    ));
    public dibujoUrl = computed<string>(() => "attempts/att0" + this.attempt() + ".png")
    public isFill = computed<boolean>(() => this.word() === this.wordEncrypt().join(''));
    public gameOver = computed<boolean>(() => this.attempt() > 5 || this.isFill());
    
    public setCategory(category: Category): void { this.category.set(category); }
    
    public getCategories(): Category[] { return this.categories; }
    public getGamesMatches(): GameMatch[] { return this.gamesMatches; }
    public getCategory(): Category { return this.category(); }
    public getWord(): string { return this.word(); }
    public addAtempt(): void { this.attempt.update(curr => curr + 1); }

    public saveGame() {
        const newMatch: GameMatch =
        {
            id: this.gamesMatches.length + 1,
            category: this.category(),
            word: this.word(),
            wordEncrypt: this.wordEncrypt(),
            image: this.dibujoUrl(),
            time: 1.54,
            score: 1000,
            won: this.isFill(),
        };
        this.gamesMatches.push(newMatch);
        this.reset();
    }
    public reset(): void {
        this.category.set(this.categories[Math.floor(Math.random() * this.categories.length)]);
        this.attempt.set(0);
        this.lettersInput.set([])
    }

}
