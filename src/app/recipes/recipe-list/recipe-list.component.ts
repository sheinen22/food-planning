import { Component } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent {
  recipes: Recipe[] = [
    new Recipe('Test', 'test description', 'https://hips.hearstapps.com/hmg-prod/images/mexican-beef-n-rice-skillet4-1665593965.jpg')
  ];
}
