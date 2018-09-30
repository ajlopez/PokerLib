
var Rank = { Ace: 1 };
var Suit = { Spade: 1 };

function Card(rank, suit) {
    this.rank = function () { return rank; }
    this.suit = function () { return suit; }
}

function createCard(rank, suit) {
    return new Card(rank, suit);
}

module.exports = {
    card: createCard,
    
    Rank: Rank,
    Suit: Suit
};