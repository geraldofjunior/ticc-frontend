import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Card } from '../../entities/card';
import { CdkDragEnd, CdkDragMove } from '@angular/cdk/drag-drop';

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
export class CardComponent {
  public card!: Card;
  public cardState = 'face-up';
  public imagePath = '';

  @Input() positionX = 0;
  @Input() positionY = 0;
  @Output() cardFlip = new EventEmitter<void>();

  public flip(): void {
    this.cardFlip.emit();
  }

  public setCard(card: Card): void {
    this.card = card;
    this.imagePath = '../../../assets/card-images/' + this.card.getFileName();
  }

  // Este método será chamado sempre que o drag se mover
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  public onDrag(event: CdkDragMove): void {
    // Se quiser fazer algo enquanto o item está sendo arrastado, adicione aqui
  }

  public setPosition(x:number, y: number): void {
    this.positionX = x;
    this.positionY = y;
  }

  // Este método é chamado quando o drag termina
  public onDragEnd(event: CdkDragEnd): void {
    const { x, y } = event.distance;  // Distância que o item foi movido
    console.log(`Distância: \n X: ${x}\n Y: ${y}`);

    const newPosition = {  x: this.positionX + x, y: this.positionY + y };

    this.setPosition( newPosition.x, newPosition.y );

    console.log(`Posição: \n X: ${this.positionX} \n Y: ${this.positionY}`);
  }
}
