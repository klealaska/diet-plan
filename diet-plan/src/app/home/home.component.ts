import { Component, OnInit } from "@angular/core";
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { NbLayoutModule, NbSelectModule } from "@nebular/theme";
import { HeaderComponent } from "../shared/header/header.component";
import { IconButtonComponent } from "../shared/icon-button/icon-button.component";
import { MenuItem } from "../models/menuItem";
import { RecipeCardComponent } from "../shared/recipe-card/recipe-card.component";
import { Recipe } from "../models/recipe";

@Component({
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NbLayoutModule,
    NbSelectModule,
    HeaderComponent,
    IconButtonComponent,
    RecipeCardComponent
  ],
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  selectedItem = '';
  menuItems: MenuItem[] = [
    {
      iconSrc: '/assets/icons/eggs.png',
      label: 'Breakfast'
    },
    {
      iconSrc: '/assets/icons/pizza.png',
      label: 'Lunch'
    },
    {
      iconSrc: '/assets/icons/fish-food.png',
      label: 'Dinner'
    },
    {
      iconSrc: '/assets/icons/spinach.png',
      label: 'Salad'
    }, {
      iconSrc: '/assets/icons/steak.png',
      label: 'Main course'
    }
  ]

  recipes: Recipe[] = [
    {
      recipeImg: '../assets/images/dish.jpg',
      time: '30 minutes',
      difficulty: 'super easy',
      recipeTitle: 'raspberry cookies'
    },
    {
      recipeImg: '../assets/images/dish.jpg',
      time: '30 minutes',
      difficulty: 'super easy',
      recipeTitle: 'raspberry cookies'
    }
  ]

  constructor() { }

  ngOnInit(): void {

  }

}
