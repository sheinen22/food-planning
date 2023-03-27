import { Recipe } from './recipe.model';

export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe(
      'Test',
      'test description',
      'https://hips.hearstapps.com/hmg-prod/images/mexican-beef-n-rice-skillet4-1665593965.jpg'
    ),
  ];

  getRecipes() {
    return this.recipes.slice()
  }
}
