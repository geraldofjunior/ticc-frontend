import { style } from '@angular/animations';
import { Component, OnInit, Renderer2 } from '@angular/core';
import { Card } from 'src/app/entities/card';
import { Deck } from 'src/app/entities/deck';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
  public deck: Deck = new Deck();

  ngOnInit() {
    this.initializeDeck();
  }

  public constructor(private renderer: Renderer2) {}

  public initializeDeck(): void {
    this.deck.initDeck();
    this.createDeck();
  }

  public shuffleCards(): void {
    const deck = new Deck();
    deck.initDeck();
    const randomizedDeck = deck.shuffle();
    this.deck.setDeck(randomizedDeck);

    const root = document.querySelector("#deck");
    if (root)
      root.innerHTML = "";

    this.createDeck();
    this.deck.getCards().forEach(card => console.log(card.getName()));
    console.log("-----");
    this.deck.shuffle().forEach(card => console.log(card.getName()));
  }

  private animateShuffle(): void {
    let cards: Card[] = this.deck.getCards(),
        left: Card[],
        right: Card[];

    // First, lets center all cards
  }

  public createElement(tagName: string, attributes: any, children: any = null) {
    const element = this.renderer.createElement(tagName);
    if (attributes) {
      for (const attrName in attributes) {
        element.setAttribute(attrName, attributes[attrName]);
      }
    }
    if (children) {
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (typeof child === 'string') {
          element.appendChild(document.createTextNode(child));
        } else {
          element.appendChild(child);
        }
      }
    }
    return element;
  };

  public createCard(i:number) {
    const card = this.deck.getCard(i);
    const filename = "../../../assets/card-images/" + card.getFileName();

    return this.createElement('div', { class: 'card black', style: "background-image: url(" + filename + ")" });
  }

  public createDeck() {
    const deckElement = document.getElementById("deck");

    for (let i = 0; i < this.deck.getCardQuantity(); i++) {
      deckElement?.appendChild(this.createCard(i));
    }
  }

}
