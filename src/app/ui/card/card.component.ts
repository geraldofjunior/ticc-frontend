import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../entities/card';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
  animations: [
    trigger('cardFlip', [
      state('face-up', style({ transform: 'rotateY(0deg)' })),
      state('face-down', style({ transform: 'rotateY(180deg)' })),
      transition('face-up => face-down', [animate('200ms')]),
      transition('face-down => face-up', [animate('200ms')]),
    ])
  ]
})
export class CardComponent  {
  public card!: Card;
  public cardState = 'face-up';
  public imagePath = '';
  private position = { x: "0", y: "0"};

  @Input() data!: Card;
  @Output() cardFlip = new EventEmitter<void>();

  public flip(): void {
    this.card.flip();
    this.cardState = this.card.isFlipped() ? 'face-up' : 'face-down';
    this.cardFlip.emit();
  }

  public setCard(card: Card): void {
    this.card = card;
    this.imagePath = '../../../assets/card-images/' + this.card.getFileName();
  }

  public getPosition = () => this.position;
  public getX = () => this.position.x;
  public getY = () => this.position.y;

  public setPosition = (newX: number, newY: number) => this.position = { x: newX.toString(), y: newY.toString() }
  public setX = (newX: number) => this.position.x = newX.toString();

}
