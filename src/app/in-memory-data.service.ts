import { Injectable } from '@angular/core';
import {InMemoryDbService} from "angular-in-memory-web-api";
import {Hero} from './hero';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      {id: 1,
        name: 'Нежное женственное платье из креп -шифона',
        img: ["./assets/photo/photo1.jpg",
          "./assets/photo/photo2.jpg" ],
        size: ["X","L"],
        content: 'Костюм выполнен из натурального итальянского льна , в жаркий день в нем Вы будите чувствовать себя максимально комфортно',
        price:''
      },
      {id: 2,
        name: 'Платье -бюстье из натурального итальянского льна',
        img: ["./assets/photo/photo3.jpg",
          "./assets/photo/photo4.jpg" ],
        size: ["X","L"],
        content:'Необыкновенной красоты лён из которого выполнено наше платье бюстье',
        price:''
      },

      {id: 3,
        name: 'Костюм топ с юбкой из итальянского льна',
        img: ["./assets/photo/photo5.jpg",
          "./assets/photo/photo6.jpg" ],
        size: ["X","L"],
        content:'Костюм очень просто сочетать \n'+'\n с другими изделиями из вашего гардероба . Например юбку можно носить с футболкой или рубашкой , топом .',
        price:''
      },
      {id: 4,
        name: 'Платье из итальянского полированного хлопка с шёлком',
        img: ["./assets/photo/photo7.jpg",
          "./assets/photo/photo8.jpg"],
        size: ["X","L"],
        content:'Ткань шелковистая и лёгкая очень приятная тактильно 💕',
      price:''},
      {id: 5,
        name: 'Сочное платье в оттенке Сицилийский апельсин',
        img: ["./assets/photo/photo9.jpg",
        "./assets/photo/photo10.jpg"],
        size: ["X","L"],
        content:'Сочное платье с открытой спинкой самого популярного цвета в этом сезоне 🍊',
        price:''},
      {id: 6,
        name: 'Костюм топ с юбкой из итальянского льна',
        img: ["./assets/photo/photo11.jpg",
        "./assets/photo/photo12.jpg"],
        size: ["X","L"],
        content:'Топ можно носить в двух вариантах , завязывая на груди ,или на запах',
        price:''},

    ];
    return {heroes};
  }

  getId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
  constructor() { }
}

