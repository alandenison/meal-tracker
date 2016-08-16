import { Component, EventEmitter} from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'new-meal',
  outputs: ['onNewMeal'],
  template: `
  <input placeholder="Meal Name" #newName>
  <input placeholder="Meal Description" #newDescription>
  <input type="number" placeholder="Calories" #newCalorie>
  <button (click)="addMeal(newName, newDescription, newCalorie)">Add</button>
  `
})
export class NewMealComponent {
  public onNewMeal: EventEmitter<Meal>;
  constructor() {
    this.onNewMeal = new EventEmitter();
  }
  addMeal(name: HTMLInputElement, description: HTMLInputElement, calorie: HTMLInputElement,content: HTMLInputElement) {
    this.onNewMeal.emit(new Meal(name.value, description.value, parseInt(calorie.value)));
    name.value = "";
    description.value = "";
    calorie = 0;
  }
}
