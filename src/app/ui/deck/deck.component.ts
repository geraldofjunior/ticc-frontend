import { CardComponent } from './../card/card.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ComponentRef, OnInit, Renderer2, ViewChild, ViewContainerRef } from '@angular/core';
import { Deck } from 'src/app/entities/deck';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
  animations: [
    trigger('animateShuffle', [
      transition(':enter', [
        style({ transform: 'translate({{ xStart }}px, {{ yStart }}px)'}),
        animate('200ms cubic-bezier(0.645, 0.045, 0.355, 1.000)'),
        style({ transform: 'translate({{ xTarget }}px, {{ yTarget }}px)' })
      ])
    ])
  ]
})
export class DeckComponent implements OnInit, AfterViewInit {
  private cards: Element[] = [];
  public cardComponents: ComponentRef<CardComponent>[] = [];
  @ViewChild("board", { read: ViewContainerRef, static: false }) board!: ViewContainerRef;

  public deck: Deck = new Deck();

  public constructor(private renderer: Renderer2) {}

  ngOnInit() {
    this.initializeDeck();
  }

  ngAfterViewInit(): void {
    this.addCardComponents();
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
  }

  public animateShuffle(): void {
    //// TODO: Implementar animateShuffle()
    // Center all cards
    // Shuffle their data
    // Show shuffle animation
    // Spread them again
  }

  private animateSpread() {
    //// TODO: Implementar animateSpread
  }

  /** @deprecated
   * It doesn't support any animation
   */
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
  }
  /** @deprecated
   * It doesn't support any animation
   */
  public createCard(i:number) {
    const card = this.deck.getCard(i);
    const filename = "../../../assets/card-images/" + card.getFileName();

    return this.createElement('div', { class: 'card black', style: "background-image: url(" + filename + ")" });
  }
  /** @deprecated
   * It doesn't support any animation
   */
  public createDeck() {
    const deckElement = document.getElementById("deck");

    for (let i = 0; i < this.deck.getCardQuantity(); i++) {
      const cardElement = this.createCard(i);
      deckElement?.appendChild(cardElement);
      this.cards.push(cardElement);
    }
  }

  public addCardComponents() {
    const cards = this.deck.getCards();
    let ref;
    for (let index = 0; index < cards.length; index++) {
      ref = this.board.createComponent(CardComponent);
      ref.instance.setCard(cards[index]);
      this.cardComponents.push(ref);
    }
  }

  public initializeDeck(): void {
    this.deck = new Deck();
    this.deck.initDeck();
  }
}
