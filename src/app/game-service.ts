import { Service, signal } from '@angular/core';

export interface Category {
    name: string;
    words: string[];
    difficulty: number;
}
export interface GameMatch {
    id: number;
    category: Category;
    word: string;
    score: number;
    won: boolean;
}
@Service()
export class GameService {
    private categories: Category[] = [
    {
        name: 'Animales',
        words: ['perro', 'gato', 'elefante', 'jirafa'],
        difficulty: 1
    },
    {
        name: 'Tecnología',
        words: ['computadora', 'teclado', 'software', 'angular'],
        difficulty: 2
    },
    {
        name: 'Países',
        words: ['argentina', 'mexico', 'japon'],
        difficulty: 1
    }
    ];
    private gamesMatches: GameMatch[] = [];

    public getCategories(): Category[] { return this.categories; }

    private randomCategory(): Category {
        const index = Math.floor(Math.random() * this.categories.length);
        return this.categories[index];
    }
    private category: Category = this.randomCategory();
    public setCategory(category: Category) { this.category = category; }
    public getCategory(): Category { return this.category; }

    public getWord(category: Category): string {
        const index = Math.floor(Math.random() * category.words.length);
        return category.words[index];
    }

    public saveGame(category: Category, word: string, won: boolean) {
        const newMatch: GameMatch =
        {
            id: this.gamesMatches.length + 1,
            category: category,
            word: word,
            score: 1000,
            won: won,
        };
        this.gamesMatches.push(newMatch);
    }
    public getGamesMatches(): GameMatch[] { return this.gamesMatches; }
}
