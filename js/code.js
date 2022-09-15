// Function for random Coinflip

function coinFlip() {
  var coin = Math.random();

  coin = coin * 100 + 1;

  coin = Math.floor(coin);

  //  console.log(coin);

  if (coin <= 50) {
    $("h2").text("Heads!");
  } else {
    $("h2").text("Tails!");
  }
}

//$("h2").click(function () {
//$("h2").text("Heads!");
//});
