
function Deck() {
    this.size = function () { return 52; };
}

function createDeck() {
    return new Deck();
}

module.exports = {
    deck: createDeck
};