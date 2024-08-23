import { CardComponent } from './../card/card.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { AfterViewInit, Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
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
  public cardComponents: ComponentRef<CardComponent>[] = [];
  @ViewChild("board", { read: ViewContainerRef, static: false }) board!: ViewContainerRef;

  public deck: Deck = new Deck();

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

    this.board.clear();
    this.addCardComponents();
  }

  public animateStack(): void {
    //// TODO: Implementar animateStack()
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
