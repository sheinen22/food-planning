import { Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipesChanged = new Subject<Recipe[]>;

  // private recipes: Recipe[] = [
  //   new Recipe(
  //     'Bacon Cheeseburger',
  //     'An American classic with Bacon!',
  //     'https://cdn.apartmenttherapy.info/image/upload/f_jpg,q_auto:eco,c_fill,g_auto,w_1500,ar_16:9/k%2FPhoto%2FRecipes%2F2022-03_bacon-cheeseburger%2F2022-03-16_ATK-0561',
  //     [
  //       new Ingredient('Beef', 1),
  //       new Ingredient('Cheese', 1),
  //       new Ingredient('Lettuce', 1),
  //       new Ingredient('Tomato', 1),
  //       new Ingredient('Bun', 2),
  //       new Ingredient('Bacon', 3)
  //     ]
  //   ),
  //   new Recipe(
  //     'Omelette',
  //     'Three egg meat lover omelette!',
  //     'https://www.stopfoodwasteday.com/content/dam/compass-group/sfwd/recipes/2020Recipes/Carved%20Meat%20and%20Cheese%20Omelette.jpg',
  //     [
  //       new Ingredient('Egg', 3),
  //       new Ingredient('Cheese', 1),
  //       new Ingredient('Sausage', 2),
  //       new Ingredient('Ham', 2),
  //       new Ingredient('Bacon', 2),
  //       new Ingredient('Bacon', 2)
  //     ]
  //   ),
  // ];
  private recipes: Recipe[] = [];

  constructor(private slService: ShoppingListService) {}

  setRecipes(recipes: Recipe[]) {
    this.recipes = recipes;
    this.recipesChanged.next(this.recipes.slice())
  }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToSL(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipesChanged.next(this.recipes.slice());
  }

  updateRecipe(index: number, newRecipe: Recipe) {
    this.recipes[index] = newRecipe;
    this.recipesChanged.next(this.recipes.slice());
  }

  deleteRecipe(index: number) {
    this.recipes.splice(index, 1);
    this.recipesChanged.next(this.recipes.slice())
  }

}
