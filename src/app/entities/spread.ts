import { Card } from "./card";

export class Spread {
  private spreadType: string;
  private cardQuantity: number;
  private cards: Array<Card>;

  constructor(type?: string, numberOfCards?: number) {
    this.spreadType = type ? type : "";
    this.cardQuantity = numberOfCards ? numberOfCards : 0;
    this.cards = new Array<Card>(this.cardQuantity);
  }

  // Setters

  public setCard = (cardData:Card, cardSlot: number) => {  this.cards[cardSlot] = cardData; }
  public configureSpread = (type: string, numberOfCards: number) => {
    this.spreadType = type;
    this.cardQuantity = numberOfCards;
    this.cards = new Array<Card>(numberOfCards - 1);
  }
  public clearSpread = () => { this.cards = new Array<Card>(this.cardQuantity) }

  // Getters

  public getSpreadType = () => { this.spreadType }
  public getCardQuantity = () => { this.cardQuantity }
  public getCard = (cardSlot: number) => { this.cards[cardSlot - 1] }
  public getAllCards = () => { this.cards }
}
