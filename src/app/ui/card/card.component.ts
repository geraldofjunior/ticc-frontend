import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, HostListener, Input, Output } from '@angular/core';
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

  @Input() positionX = 0;
  @Input() positionY = 0;
  @Output() cardFlip = new EventEmitter<void>();

  public offsetX = 0;
  public offsetY = 0;
  public isDragging = false;

  public flip(): void {
    this.card.flip();
    this.cardState = this.card.isFlipped() ? 'face-up' : 'face-down';
    this.cardFlip.emit();
  }

  public setCard(card: Card): void {
    this.card = card;
    this.imagePath = '../../../assets/card-images/' + this.card.getFileName();
  }

  public onMouseDown(event: MouseEvent): void {
    this.isDragging = true;
    this.offsetX = event.clientX - this.positionX;
    this.offsetY = event.clientY - this.positionY;
    event.preventDefault();
  }

  @HostListener('document:mouseup')
  public onMouseUp(): void {
    this.isDragging = false;
  }

  @HostListener('document:mousemove', ['$event'])
  public onMouseMove(event: MouseEvent): void {
    if (this.isDragging) {
      this.positionX = event.clientX - this.offsetX;
      this.positionY = event.clientY - this.offsetY;
    }
  }

}
