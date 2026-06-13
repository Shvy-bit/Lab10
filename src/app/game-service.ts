import { Service } from '@angular/core';

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
        words: ['Argentina', 'España', 'México', 'Japón'],
        difficulty: 1
    }
    ];

    public getCategory() { return this.categories; }
    
    
}
