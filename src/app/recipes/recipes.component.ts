import { Component } from '@angular/core';

import { Recipe } from '../shared/recipe.model';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrl: './recipes.component.css',
})
export class RecipesComponent {
  selectedRecipe: any;
}
