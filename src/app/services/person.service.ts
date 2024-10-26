import { Injectable } from '@angular/core';
import { Person } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  private people: Person[] = [
    { id: 1, name: 'Лев Толстой', description: 'Русский писатель, автор «Войны и мира» и «Анны Карениной».', imageUrl: 'Tolstoi.jpg' },
    { id: 2, name: 'Федор Достоевский', description: 'Русский писатель, автор «Преступления и наказания» и «Братьев Карамазовых».', imageUrl: 'Dostoevsky.jpg' },
    { id: 3, name: 'Юрий Гагарин', description: 'Первый человек, полетевший в космос, совершивший исторический полет на космическом корабле «Восток-1».', imageUrl: 'Gagarin.jpg' },
    { id: 4, name: 'Сергей Королев', description: 'Основоположник советской космонавтики и главный конструктор первых космических кораблей.', imageUrl: 'Korolyov.jpg' },
    { id: 5, name: 'Игорь Стравинский', description: 'Русский композитор, известный своими новаторскими произведениями в классической музыке.', imageUrl: 'Stravinsky.jpg' }
  ];

  constructor() {}

  getPeople(): Person[] {
    return this.people;
  }

  getPerson(id: number): Person | undefined {
    return this.people.find(person => person.id === id);
  }
}
