import { Component, Input } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-recipe-card',
  templateUrl: './recipe-card.component.html',
  styleUrls: ['./recipe-card.component.css']
})
export class RecipeCardComponent {

  @Input('recipeImg') recipeImg = '';
  @Input('time') time = '';
  @Input('difficulty') difficulty = '';
  @Input('recipeTitle') recipeTitle = '';

}
