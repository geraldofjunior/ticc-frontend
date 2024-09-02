import { CardComponent } from '../card/card.component';
import { AfterViewInit, ChangeDetectorRef, Component, ComponentRef, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { Deck } from 'src/app/entities/deck';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit, AfterViewInit {
  public cardComponents: ComponentRef<CardComponent>[] = [];
  @ViewChild("board", { read: ViewContainerRef, static: false }) board!: ViewContainerRef;

  public deck: Deck = new Deck();

  ngOnInit() {
    this.initializeDeck();
  }

  ngAfterViewInit(): void {
    this.addCardComponents();
  }

  constructor(private cdr: ChangeDetectorRef) {}

  public shuffleCards(): void {
    const deck = new Deck();
    deck.initDeck();
    const randomizedDeck = deck.shuffle();
    this.deck.setDeck(randomizedDeck);

    this.board.clear();
    this.addCardComponents();
  }

  public animateShuffle(): void {
    //// TODO: Implementar animateShuffle()
    // Center all cards
    // Shuffle their data
    // Show shuffle animation
    // Spread them again
  }

  public addCardComponents() {
    const cards = this.deck.getCards();
    let component: ComponentRef<CardComponent>, element;
    for (let index = 0; index < cards.length; index++) {
      component = this.board.createComponent(CardComponent);

      component.instance.setCard(cards[index]);

      element = component.location.nativeElement;
      element.style.display = 'inline-block';
      element.style.position = 'relative';
      element.style.zIndex = `${index}`;
      element.style.pointerEvents = 'none';

      this.cdr.detectChanges();
    }
  }

  public initializeDeck(): void {
    this.deck = new Deck();
    this.deck.initDeck();
  }
}
