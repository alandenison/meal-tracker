import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { Meal } from './meal.model';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent],
  template: `
  <meal-display *ngFor="#currentMeal of mealList" [meal]="currentMeal" (click)="mealClicked(currentMeal)"
  [class.selected]="currentMeal === selectedMeal">
  </meal-display>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
  }
}
