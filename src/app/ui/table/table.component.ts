import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Card } from 'src/app/entities/card';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent {
  public cards = new Array<Card>();

  constructor() {
    this.initCards();
  }

  public initCards() {
    for (let i = 0; i < 78; i++) {
        this.cards.push(new Card(i));
      }

    this.shuffle();
    console.log(this.cards);
  }

  public shuffle() {
    const cards = this.cards;
    for (let i = 0; i < this.cards.length; i++) {
      const random = Math.random() * i | 0;
      const temp = this.cards[i];
      cards[i] = this.cards[random];
      cards[random] = temp;
    }
    this.cards = cards;
  }
}
