import { Component, EventEmitter } from 'angular2/core';
import { MealComponent } from './meal.component';
import { NewMealComponent } from './new-meal.component';
import { Meal } from './meal.model';
import { EditMealComponent } from './edit-meal.component';
import { LowCaloriePipe } from './low-calorie.pipe';

@Component({
  selector: 'meal-list',
  inputs: ['mealList'],
  pipes: [LowCaloriePipe],
  directives: [MealComponent, NewMealComponent, EditMealComponent],
  template: `
  <h2>showing {{displayLow}} foods</h2>
  <button (click)="lowCalorieShow()">Toggle</button>
  <meal-display *ngFor="#currentMeal of mealList | lowCalorie:displayLow" [meal]="currentMeal" (click)="mealClicked(currentMeal)"
  [class.selected]="currentMeal === selectedMeal">
  </meal-display>
  <new-meal (onNewMeal)="addMeal($event)"></new-meal>
  <edit-meal *ngIf="selectedMeal" [meal]="selectedMeal"></edit-meal>
  `
})

export class MealListComponent {
  public mealList: Meal[];
  public selectedMeal: Meal;
  public displayLow = "all";
  addMeal(meal) {
    this.mealList.push(meal);
  }
  lowCalorieShow() {
    if(this.displayLow==="all") {
      this.displayLow = "high calorie";
    } else if (this.displayLow==="high calorie"){
      this.displayLow = "low calorie";
    } else {
      this.displayLow = "all";
    }
  }

  mealClicked(clickedMeal: Meal): void {
    this.selectedMeal = clickedMeal;
  }
}
