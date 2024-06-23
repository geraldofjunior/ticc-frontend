import { MajorArcanaCard } from "../enums/major-arcana-card";

export class Card {
  private rank: string = "";
  private suit: string = "";
  private name: string = "";
  private majorArcana: boolean = true;

  public constructor(isMajorArcana: boolean, rank: string, suit: string = "") {
    this.majorArcana = isMajorArcana;
    this.rank = rank;
    this.suit = suit;
    this.name = this.generateName();
  }

  private generateName(): string {
    if (this.majorArcana)
      return MajorArcanaCard[+this.rank];

    let rankName = "";
    switch (this.rank) {
      case 'A' : rankName = "Ace";    break;
      case 'KN': rankName = "Knight"; break;
      case 'J' : rankName = "Joker";  break;
      case 'Q' : rankName = "Queen";  break;
      case 'K' : rankName = "King";   break;
      default  : rankName = this.rank;
    }

    let suitName= "";
    switch (this.suit) {
      case '♠︎': suitName = "Swords";    break;
      case '♥︎': suitName = "Cups";      break;
      case '♣︎': suitName = "Wands";     break;
      case '♦︎': suitName = "Pentacles"; break;
      default : suitName =  this.suit;  break
    }
    return rankName + " of " + suitName;
  }

  public getName = () => this.name;
  public getSuit = () => this.suit;
  public getRank = () => this.rank;
}
