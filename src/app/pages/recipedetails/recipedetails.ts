import { Component } from '@angular/core';
import { Api } from '../../api';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-recipedetails',
  imports: [CommonModule],
  templateUrl: './recipedetails.html',
  styleUrl: './recipedetails.css'
})
export class Recipedetails {
  recipe: any;
  constructor(private api: Api, private route: ActivatedRoute) { }
  ngOnInit() {
    let id = this.route.snapshot.params['id'];
    this.api.getRecipesById(id).then((res: any) => this.recipe = res)
  }
}