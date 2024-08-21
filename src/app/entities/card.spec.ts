import { Card } from './card';

describe('Card', () => {
  it('should create a major arcana card with correct properties', () => {
    const card = new Card(true, '1', 0);

    expect(card.getRank()).toBe('1');
    expect(card.getSuit()).toBe(0);
    expect(card.getName()).toBe('The Fool'); // Assuming 0 being "The Fool"
    expect(card.getFileName()).toBe('maj_1.jpg');
    expect(card.isReversed()).toBe(false);
  });

  it('should create a minor arcana card with correct properties', () => {
    const card = new Card(false, 'A', 1);

    expect(card.getRank()).toBe('A');
    expect(card.getSuit()).toBe(1);
    expect(card.getName()).toBe('Ace of Cups');
    expect(card.getFileName()).toBe('cups_ace.jpg');
    expect(card.isReversed()).toBe(false);
  });

  it('should create a reversed card', () => {
    const card = new Card(false, 'K', 2, true);

    expect(card.isReversed()).toBe(true);
  });

  it('should flip the card', () => {
    const card = new Card(false, 'J', 3);

    expect(card.isFlipped()).toBe(true);

    card.flip();
    expect(card.isFlipped()).toBe(false);

    card.flip();
    expect(card.isFlipped()).toBe(true);
  });

  it('should reverse the card', () => {
    const card = new Card(false, 'Q', 3);

    expect(card.isReversed()).toBe(false);

    card.reverse();
    expect(card.isReversed()).toBe(true);

    card.reverse();
    expect(card.isReversed()).toBe(false);
  });

  it('should set the position correctly', () => {
    const card = new Card(false, 'A', 2);

    card.setPosition(10, 20);

    expect(card.getX()).toBe(10);
    expect(card.getY()).toBe(20);
    expect(card.getPosition()).toEqual({ x: 10, y: 20 });
  });

  it('should set the target position correctly', () => {
    const card = new Card(false, 'K', 3);

    card.setTargetPosition(30, 40);

    expect(card.getTargetPosition()).toEqual({ x: 30, y: 40 });
  });
});
