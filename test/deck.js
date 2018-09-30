
var decks = require('../lib/decks');

exports['create deck with 52 cards'] = function (test) {
    var deck = decks.deck();
    
    test.ok(deck);
    test.equal(typeof deck, 'object');
    test.equal(deck.size(), 52);
};

