import { Card } from "./card";

export class Deck {
  private cards:Card[] = new Array<Card>();

  public initDeck(): void {
    let suit = 0;
    if (this.cards.length > 0) this.cards = new Array<Card>();
    // Init major arcana
    for (suit = 0; suit < 22; suit++) {
      this.cards.push(new Card(true, suit.toString(), suit));
    }
    // Init minor arcana
    const ranks = "A 2 3 4 5 6 7 8 9 10 KN J Q K".split(" ");

    for (suit = 0; suit < 4; suit++)
      ranks.forEach(rank => this.cards.push(new Card(false, rank, suit)));
  }

  public shuffle(): Array<Card> {
    const cards = this.cards;
    for (let i = 0; i < this.cards.length; i++) {
      const random = Math.random() * i | 0;
      const temp = this.cards[i];
      cards[i] = this.cards[random];
      cards[random] = temp;
    }
    this.cards = cards;
    return cards;
  }

  public getCards = () => this.cards;
  public getCard = (i: number) => this.cards[i];
  public getCardQuantity = () => this.cards.length;
  public setDeck = (deck: Array<Card>) => this.cards = deck;
}
