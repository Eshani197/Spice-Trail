import { Component } from '@angular/core';
import { Card } from "../card/card";
import { Api } from '../../api';

@Component({
  selector: 'app-product',
  imports: [Card],
  templateUrl: './recipes.html',
  styleUrl: './recipes.css'
})
export class Recipe {
  
  recipe:any;

  constructor (private api: Api){}
  items: any[] = [];
  ngOnInit(){
    this.api.getRecipes().then(recipe => this.items = recipe.recipes)
  }

}