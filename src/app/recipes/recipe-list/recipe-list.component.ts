import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  //recipes: Recipe[] = [new Recipe('Burger','Non veg Meal','D://ProjectImages//Burger.png')];
  recipes: Recipe[] = [new Recipe('Burger','Non veg Meal','https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.pngitem.com%2Fmiddle%2FTRbhiiR_food-items-images-png-transparent-png%2F&psig=AOvVaw0nrcd1folpu08AEfFh8KFg&ust=1643702791871000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCLiftprE2_UCFQAAAAAdAAAAABAD')];
  constructor() { }

  ngOnInit(): void {
  }

}
