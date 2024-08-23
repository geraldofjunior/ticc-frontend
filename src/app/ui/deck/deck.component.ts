import { CardComponent } from './../card/card.component';
import { AfterViewInit, Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Deck } from 'src/app/entities/deck';

@Component({
  selector: 'app-deck',
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css']
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

  public animateSpread() {
    //// TODO: Implementar animateSpread
  }

  public addCardComponents() {
    const cards = this.deck.getCards();
    let component: ComponentRef<CardComponent>, element;
    for (let index = 0; index < cards.length; index++) {
      component = this.board.createComponent(CardComponent);

      component.instance.setCard(cards[index]);
      component.instance.positionX = index * 10;
      component.instance.positionY = 0;

      element = component.location.nativeElement;
      element.style.position = "absolute";
      element.style.left = `${index * 15}px`;
      element.style.bottom = `0px`;
      element.style.zIndex = `${index}`;
      element.style.pointerEvents = 'none';
    }
  }

  public initializeDeck(): void {
    this.deck = new Deck();
    this.deck.initDeck();
  }
}
