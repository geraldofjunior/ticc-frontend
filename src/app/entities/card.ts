import { MajorArcanaCard } from "../enums/major-arcana-card";
import { MinorArcanaSuit } from "../enums/minor-arcana-suit.enum";

export class Card {
  private rank: string = "";
  private suit: number = -1;
  private name: string = "";
  private fileName: string = "";
  private position = { x: 0, y: 0 };
  private targetPosition = { x: 0, y: 0 };
  private majorArcana: boolean = true;
  private flipped: boolean = true;
  private reversed: boolean = false;

  public constructor(
          isMajorArcana: boolean,
          rank: string,
          suit: number = -1,
          reversed: boolean = false) {
    this.majorArcana = isMajorArcana;
    this.rank = rank;
    this.suit = suit;
    this.name = this.generateName();
    this.reversed = reversed;
  }

  private generateName(): string {
    if (this.majorArcana) {
      this.fileName = "maj_" + this.rank + ".jpg";
      return MajorArcanaCard[this.suit];
    }

    let rankName: string = "";
    switch (this.rank) {
      case 'A' : rankName = "Ace";    break;
      case 'KN': rankName = "Knight"; break;
      case 'J' : rankName = "Page";  break;
      case 'Q' : rankName = "Queen";  break;
      case 'K' : rankName = "King";   break;
      default  : rankName = this.rank;
    }

    let suitName: string = MinorArcanaSuit[this.suit];

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
  public isFlipped = () => this.flipped;
  public isReversed = () => this.reversed;

  public setPosition = (x: number, y: number) => this.position = { x: x, y: y};
  public setTargetPosition = (x: number, y: number) => this.targetPosition = { x: x, y: y};
  public flip = () => this.flipped = !this.flipped;
  public reverse = () => this.reversed = !this.reversed;
}
