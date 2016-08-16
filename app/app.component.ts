import { Component, EventEmitter } from 'angular2/core';
import { MealListComponent } from './meal-list.component';
import { Meal } from './meal.model';

@Component({
  selector: 'my-app',
  directives: [MealListComponent],
  template: `
  <div class = "container">
    <h1>Meals</h1>
    <meal-list
      [mealList]="meals">
    </meal-list>
  </div>
    `
})

export class AppComponent {
  public meals: Meal[];
  constructor(){
    this.meals = [
      new Meal("hot pocket", "the healthy kind", 200),
      new Meal("single tic tac", "peppermint", 1),
      new Meal("18 big macs", "they were 18 for $18", 9001),
    ];
  }
}
