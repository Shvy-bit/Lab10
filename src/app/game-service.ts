import { Service } from '@angular/core';

export interface Category {
    name: string;
    words: string[];
    difficulty: number;
}
@Service()
export class GameService {
    private categorias = {
        "frutas": ['manzana', 'pera']
    }
}
