function roll() {
  const input = document.getElementById("input").value;
  const result = document.getElementById("result");
  const diceResult = document.getElementById("diceResult");

  const values = [];
  const images = [];

  for (let i = 0; i < input; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    values.push(value);
    images.push(`<img src="img/${value}.png">`);
  }

  result.textContent = `dice: ${values.join("    ; ")}`;
  diceResult.innerHTML = images.join("");
}
