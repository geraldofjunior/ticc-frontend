import { Deck } from './deck';
import { Card } from './card';

describe('Deck', () => {
  let deck: Deck;

  beforeEach(() => {
    deck = new Deck();
  });

  it('should initialize the deck with 78 cards', () => {
    deck.initDeck();

    expect(deck.getCardQuantity()).toBe(78);

    // Verificar se as primeiras 22 cartas são dos arcanos maiores
    for (let i = 0; i < 22; i++) {
      const card = deck.getCard(i);
      expect(card.getSuit()).toBe(i);
      expect(card.getRank()).toBe(i.toString());
    }

    // Verificar se as 56 cartas restantes são dos arcanos menores
    const ranks = "A 2 3 4 5 6 7 8 9 10 KN J Q K".split(" ");
    let index = 22;
    for (let suit = 0; suit < 4; suit++) {
      ranks.forEach(rank => {
        const card = deck.getCard(index++);
        expect(card.getSuit()).toBe(suit);
        expect(card.getRank()).toBe(rank);
      });
    }
  });

  it('should shuffle the deck', () => {
    deck.initDeck();
    const originalDeck = [...deck.getCards()]; // Copia do baralho original

    const shuffledDeck = deck.shuffle();

    // Verificar se o baralho tem a mesma quantidade de cartas
    expect(shuffledDeck.length).toBe(78);

    // Verificar se o baralho foi realmente embaralhado
    let isShuffled = false;
    for (let i = 0; i < shuffledDeck.length; i++) {
      if (shuffledDeck[i] !== originalDeck[i]) {
        isShuffled = true;
        break;
      }
    }
    expect(isShuffled).toBe(true);
  });

  it('should set a new deck', () => {
    const newDeck: Card[] = [
      new Card(false, 'A', 0),
      new Card(false, '2', 1),
    ];

    deck.setDeck(newDeck);

    expect(deck.getCardQuantity()).toBe(2);
    expect(deck.getCard(0).getRank()).toBe('A');
    expect(deck.getCard(1).getRank()).toBe('2');
  });

  it('should return the correct card when getCard is called', () => {
    deck.initDeck();
    const card = deck.getCard(0);

    expect(card).toBeDefined();
    expect(card.getRank()).toBe('0'); // Primeira carta do arcano maior
  });

  it('should return the correct quantity of cards in the deck', () => {
    deck.initDeck();

    expect(deck.getCardQuantity()).toBe(78);
  });
});
