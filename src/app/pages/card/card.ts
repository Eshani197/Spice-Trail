import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  imports: [RouterLink],
  templateUrl: './card.html',
  styleUrl: './card.css'
})
export class Card {

  @Input() card: any = {
    image: '',
    name: '',
    servings: '',
    difficulty: 0,
    cuisine: 0
  };

}
