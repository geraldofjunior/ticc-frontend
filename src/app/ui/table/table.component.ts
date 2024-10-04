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
  public positions = new Array<Card>(3);
  private currentPosition = 0;


  constructor() {
    this.initCards();
  }

  public initCards(): void {
    for (let i = 0; i < 78; i++) {
        this.cards.push(new Card(i));
      }

    this.shuffle();
    console.log(this.cards);
  }

  public shuffle(): void {
    const cards = this.cards;
    for (let i = 0; i < this.cards.length; i++) {
      const random = Math.random() * i | 0;
      const temp = this.cards[i];
      cards[i] = this.cards[random];
      cards[random] = temp;
    }
    this.cards = cards;
  }

  public cardClick(cardIndex: number): void {
    if (this.currentPosition >= this.positions.length) return;
    const cardClicked = this.cards[cardIndex];
    const cardId = `card-${cardClicked.getIndex()}`;
    const cardElement = document.getElementById(cardId);
    if (cardElement) {
      cardElement.style.display = "none";
    }
    this.positions.push(cardClicked);

    this.currentPosition++;
    const positionElement = document.getElementById(`position-${this.currentPosition}`)?.childNodes[0];
    if (!positionElement) return;
    const selectedCard = document.createElement("div");
    selectedCard.classList.add("card");
    selectedCard.id = `card-${cardClicked.getIndex()}`
    const selectedCardFront = document.createElement("div");
    selectedCardFront.classList.add("card-front");
    const selectedCardImage = document.createElement("img");
    selectedCardImage.src = `../../../assets/card-images/${cardClicked.getFileName()}`;
    selectedCardImage.style.width = "7em";
    selectedCardImage.style.height = "12em";
    selectedCardFront.appendChild(selectedCardImage);
    selectedCard.appendChild(selectedCardFront);
    positionElement.appendChild(selectedCard);
  }
}
