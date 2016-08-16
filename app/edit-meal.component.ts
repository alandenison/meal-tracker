import { Component } from 'angular2/core';
import { Meal } from './meal.model';

@Component ({
  selector: 'edit-meal',
  inputs: ["meal"],
  template: `
  <h2>EDIT</h2>
  <input [(ngModel)]="meal.name" placeholder="Meal Name">
  <input [(ngModel)]="meal.description" placeholder="Meal Description">
  <input [(ngModel)]="meal.calorie" type="number" placeholder="calories">
  `
})
export class EditMealComponent {
  public meal: Meal;
}
