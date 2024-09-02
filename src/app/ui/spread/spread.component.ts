import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { Card } from '../../entities/card';

interface Position {
  id: string;
  card: Card | null;
}

@Component({
  selector: 'app-spread',
  templateUrl: './spread.component.html',
  styleUrls: ['./spread.component.css']
})
export class SpreadComponent implements AfterViewInit {
  @ViewChild('spreadContainer') spreadContainer!: ElementRef;

  positions: Position[] = [
    { id: 'position-1', card: null },
    { id: 'position-2', card: null },
    { id: 'position-3', card: null },
    // Add more positions as needed
  ];

  droppedCard: Card | null = null;

  ngAfterViewInit(): void {
    this.createDropZones();
  }

  createDropZones(): void {
    this.positions.forEach((position) => {
      const positionElement = document.createElement('div');
      positionElement.id = position.id;
      positionElement.classList.add('position-container');
      positionElement.style.width = '8em';
      positionElement.style.height = '13em';
      positionElement.style.border = '1px solid #ccc';
      positionElement.style.margin = '10px';
      positionElement.style.backgroundColor = '#f0f0f0';
      this.spreadContainer.nativeElement.appendChild(positionElement);

      // Add event listener for drop event
      positionElement.addEventListener('dragover', (e) => {
        e.preventDefault();
        console.log("Dragging over position " + position.id);
      });

      positionElement.addEventListener('drop', (e) => {
        e.preventDefault();
        const cardData = e.dataTransfer !== null ? JSON.parse(e.dataTransfer.getData('card')) : new Card(true, "-1", 0, false);
        this.dropCard(cardData, position.id);
        console.log("Dropped card in position " + position.id);
      });
    });

  }

  dropCard(cardData: Card, positionId: string): void {
    const position = this.positions.find((s) => s.id === positionId);
    if (position) {
      position.card = cardData;
      console.log("Dropped card in position " + positionId);
    }
  }
}
