function printDeckOfCards(cards) {
  let isValidCard = true;

  let arrOfCards = [];
  cards.forEach(element => {
    element.split('');
    let face;
    let suit;

    if (element.length == 3) {
       face = element[0] + element[1];
       suit = element[2];
    } else {
       face = element[0];
       suit = element[1];

    }
    let card = createCard(face,suit);
    arrOfCards.push(card)
  });
  if (isValidCard) {
    console.log(arrOfCards.join(' '));
  } else {
    return
  }

  function createCard (face,suit){
    const faces = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
    const suits = {
        S: '♠',
        H: '♥', 
        D: '♦', 
        C: '♣'
    };
    if (!faces.includes(face)|| !suits[suit]) {
      isValidCard = false;
      console.log(`Invalid card: ${face}${suit}`);
      

    } else {
      let card = {
        face,
        suit: suits[suit],
      }
      return card.face+card.suit
    }
  }
}
printDeckOfCards(['2C', '10D', 'KH', '2C']);
// cards.toString();
