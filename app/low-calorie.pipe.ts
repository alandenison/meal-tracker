import { Pipe } from 'angular2/core';
import { Meal } from './meal.model';

@Pipe({
  name: "lowCalorie",
  pure: false
})
export class LowCaloriePipe {
  transform(input: Meal[], args) {
    if(args[0]==="low") {
      return input.filter((meal) => {
        return meal.calorie < 500;
      });
    } else {
      return input;
    }
  }
}
