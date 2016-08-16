import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-display',
  inputs: ['meal'],
  template: `
  <div>
    <label>Meal: {{ meal.name }}</label>
    <label>, Description: {{ meal.description }}</label>
    <label>, {{ meal.calorie }} calories</label>
  </div>
`
})

export class MealComponent {
  public meal: Meal;
}
