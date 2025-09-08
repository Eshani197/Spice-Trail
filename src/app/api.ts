import { Injectable } from '@angular/core';
//service file
@Injectable({
  providedIn: 'root'
})
export class Api {
  getRecipeById(id: any) {
    throw new Error('Method not implemented.');
  }

  async getRecipes(){
    const res= await fetch('https://dummyjson.com/recipes');
    return await res.json();
  }

  async getRecipesById(id: number){
    const res= await fetch('https://dummyjson.com/recipes/'+id);
    return await res.json();
  }
}
