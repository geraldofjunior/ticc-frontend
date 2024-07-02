import { MajorArcanaCard } from "../enums/major-arcana-card";

export class Card {
  private rank: string = "";
  private suit: string = "";
  private name: string = "";
  private fileName: string = "";
  private position = { x: 0, y: 0 };
  private targetPosition = { x: 0, y: 0 };
  private majorArcana: boolean = true;

  public constructor(isMajorArcana: boolean, rank: string, suit: string = "") {
    this.majorArcana = isMajorArcana;
    this.rank = rank;
    this.suit = suit;
    this.name = this.generateName();
  }

  private generateName(): string {
    if (this.majorArcana) {
      this.fileName = "maj_" + this.rank + ".jpg";
      return MajorArcanaCard[+this.rank];
    }

    let rankName = "";
    switch (this.rank) {
      case 'A' : rankName = "Ace";    break;
      case 'KN': rankName = "Knight"; break;
      case 'J' : rankName = "Page";  break;
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
    this.fileName = suitName.toLowerCase() + "_" + rankName.toLowerCase() + ".jpg";
    return rankName + " of " + suitName;
  }

  public getName = () => this.name;
  public getSuit = () => this.suit;
  public getRank = () => this.rank;
  public getX = () => this.position.x;
  public getY = () => this.position.y;
  public getPosition = () => this.position;
  public getTargetPosition = () => this.targetPosition;
  public getFileName = () => this.fileName;

  public setPosition = (x: number, y: number) => this.position = { x: x, y: y};
  public setTargetPosition = (x: number, y: number) => this.targetPosition = { x: x, y: y};
}
