import { Routes } from '@angular/router';
import { Contact } from './pages/contact/contact';
import { Home } from './pages/home/home';
import { Recipe } from './pages/recipes/recipes';
import { Recipedetails } from './pages/recipedetails/recipedetails';

export const routes: Routes = [
    {
        path:'',
        component:Home
    },
    {
        path:'recipes',
        component:Recipe
    },
    {
        path:'contact',
        component:Contact
    },
    {
        path:'recipes/:id',
        component:Recipedetails
    }
];
