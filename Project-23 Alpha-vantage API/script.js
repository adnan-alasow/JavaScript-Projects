let search = document.querySelector(".search");
let btn = document.querySelector("button");
let cards = document.querySelector(".cards");

async function find() {
  try {
    let searchStock = search.value;

    const url = `https://alpha-vantage.p.rapidapi.com/query?keywords=${searchStock}&function=SYMBOL_SEARCH&datatype=json`;

    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "0438378276msh1bc4ffdb1ba1cf5p14a8cajsn733782c69f54",
        "X-RapidAPI-Host": "alpha-vantage.p.rapidapi.com",
      },
    };
    let response = await fetch(url, options);

    let data = await response.json();

    console.log(data);

    cards.innerHTML = data.bestMatches
      .map(
        (current) =>
          `<div class="information">
      <p>Symbol: ${current["1. symbol"]}</p>
      <p>Name: ${current["2. name"]}</p>
      <p>Type: ${current["3. type"]}</p>
      <p>MarketOpen: ${current["5. marketOpen"]}</p>
      <p>MarketClose: ${current["6. marketClose"]}</p>
      <p>TimeZone: ${current["7. timezone"]}</p>
      <p>Currency: ${current["8. currency"]}</p>
    </div>`
      )
      .join(" ");
  } catch {
    cards.innerHTML = "Internal Error";
  }
}

btn.addEventListener("click", find);






function secret(text) {
	
let textSplit = text.split("*")

return `<${textSplit[0]}></${textSplit[0]}>`.repeat(textSplit[1])

}

console.log(secret("div*2"));
//"<div></div><div></div>"