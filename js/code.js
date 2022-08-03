// Function for random Coinflip

function coinFlip() {
  var coin = Math.random();

  coin = (coin * 100) + 1;

  coin = Math.floor(coin);

  //  console.log(coin);

  if (coin <= 50) {
    alert("Heads!/Kopf!");
  } else {
    alert("Tails!/Zahl!");
  }
}
