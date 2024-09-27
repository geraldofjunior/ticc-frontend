import { MajorArcanaCard } from "../enums/major-arcana-card";
import { MinorArcanaSuit } from "../enums/minor-arcana-suit.enum";

export class Card {
  private index = -1;
  private rank = "";
  private suit = -1;
  private name = "";
  private fileName = "";
  private reversed = false;

 public constructor(index: number) {
  this.index = index;
  this.fileName = `${index}.jpg`;
  this.generateProperties();
 }

  private generateProperties(): void {
    if (this.index < 22) {
      this.rank = this.index.toString();
      this.suit = -1;
      this.name = this.generateName();
      return;
    }
    const minorIndex = this.index - 21;
    const rankNumber = (minorIndex % 14);
    let rankName = '';

    switch (rankNumber) {
      case 1:  rankName = 'A';  break;
      case 11: rankName = 'KN'; break;
      case 12: rankName = 'J';  break;
      case 13: rankName = 'Q';  break;
      case 0:  rankName = 'K';  break;
      default: rankName = rankNumber.toString();
    }

    const suitNumber = Math.ceil(minorIndex / 14) - 1;
    this.rank = rankName;
    this.suit = suitNumber;
    this.name = this.generateName();
  }

  private generateName(): string {
    if (this.isMajorArcana()) {
      return MajorArcanaCard[this.suit];
    }

    let rankName = "";
    switch (this.rank) {
      case 'A' : rankName = "Ás";        break;
      case 'KN': rankName = "Cavaleiro"; break;
      case 'J' : rankName = "Valete";    break;
      case 'Q' : rankName = "Rainha";    break;
      case 'K' : rankName = "Rei";       break;
      default  : rankName = this.rank;
    }

    const suitName: string = MinorArcanaSuit[this.suit];

    return `${rankName} de ${suitName}`;
  }

  public getIndex = () => this.index;
  public getName = () => this.name;
  public getSuit = () => this.suit;
  public getRank = () => this.rank;
  public getFileName = () => this.fileName;
  public isReversed = () => this.reversed;
  public isMajorArcana = () => this.suit === -1
  public reverse = () => this.reversed = !this.reversed;
}
