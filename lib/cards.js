
var Rank = { Ace: 1, King: 2, Queen: 3, Jack: 4 };
var Suit = { Spade: 1, Club: 2, Heart: 3 };

var cards = [];

function Card(rank, suit) {
    this.rank = function () { return rank; }
    this.suit = function () { return suit; }
}

function createCard(rank, suit) {
    if (cards[rank] && cards[rank][suit])
        return cards[rank][suit];
    
    var card = new Card(rank, suit);
    
    if (!cards[rank])
        cards[rank] = [];
    
    cards[rank][suit] = card;
    
    return card;
}

module.exports = {
    card: createCard,
    
    Rank: Rank,
    Suit: Suit
};