import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model'

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Hamburgare', 'Mmm... hamburgare', 'https://cdn.pixabay.com/photo/2018/10/30/09/28/burger-3783181_960_720.jpg'),
    new Recipe('Pizza', 'Ååååh pizza', 'https://cdn.pixabay.com/photo/2016/07/10/16/05/pizza-1507939_960_720.png')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
