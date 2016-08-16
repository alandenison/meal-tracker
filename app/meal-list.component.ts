import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { Meal } from './meal.model';
import { EditMealComponent } from './edit-meal.component';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  template: `
  <meal-display *ngFor="#currentMeal of mealList" [meal]="currentMeal" (click)="mealClicked(currentMeal)"
  [class.selected]="currentMeal === selectedMeal">
  </meal-display>
  <new-meal (onNewMeal)="addMeal($event)"></new-meal>
  <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  addMeal(meal) {
    this.mealList.push(meal);
  }
  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
  }
}
