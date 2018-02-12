$(document).ready(function(){
  var blackJack = {};
  var deckCountSelector = $('#deck-count');
  var deckCountText = deckCountSelector.text();
  var deckCount = parseInt(deckCountText);
  var cardCountSelector = $('#card-count');
  var cardCountText = cardCountSelector.text();
  var cardCount = parseInt(cardCountText);
  var runningCountSelector = $('#running-count');
  var runningCountText = runningCountSelector.text();
  var trueCountSelector = $('#true-count');
  var trueCountText = trueCountSelector.text();

  blackJack.decksLeftInShoe = 8;
  blackJack.cardsLeftInShoe = blackJack.decksLeftInShoe * 52;
  blackJack.runningCount = 0;
  blackJack.trueCount = 0;

  deckCountSelector.text(blackJack.decksLeftInShoe);
  cardCountSelector.text(blackJack.cardsLeftInShoe);

  var adjustRunningCount = function(e) {
    blackJack.runningCount += e;
    runningCountSelector.text(blackJack.runningCount);
    blackJack.cardsLeftInShoe--;
    checkDeckCount(blackJack.cardsLeftInShoe);
    blackJack.trueCount = (blackJack.runningCount/blackJack.decksLeftInShoe).toFixed(2);
    trueCountSelector.text(blackJack.trueCount);
    deckCountSelector.text(blackJack.decksLeftInShoe);
    cardCountSelector.text(blackJack.cardsLeftInShoe);
    changeTrueCountColor(blackJack.trueCount);
  };

  var checkDeckCount = function(e) {
    blackJack.decksLeftInShoe = Math.ceil(e/52);
    return blackJack.decksLeftInShoe;
  };

  var changeTrueCountColor = function(e) {
    if (e >= 1) {
      trueCountSelector.css('color', 'green');
    }
    else {
      trueCountSelector.css('color', 'red');
    }
  };

  var calculateCount = function(e) {
    var value = e.data('value');
    switch (value) {
      case 0:
        adjustRunningCount(0)
        break;
      case 1:
        adjustRunningCount(1)
        break;
      case -1:
        adjustRunningCount(-1)
        break;
      default: alert('calculate count has failed');
    }
  };

  $('.card-container img').on('click', function() {
    calculateCount($(this));
  });

});
