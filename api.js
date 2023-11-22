// Fetching API

// const url = "https://api.noroff.dev/docs/json/api/v1/auction/listings";
const url = "https://cat-fact.herokuapp.com/facts";

const resultsContainer = document.querySelector(".results");

async function getBids() {

  const response = await fetch(url);

  const results = await response.json();

  console.log(results);
 
  // const facts = results.all;
 
  resultsContainer.innerHTML = "";

  for (let i = 0; i < results.length; i++) {
    console.log(results[i].text);

    resultsContainer.innerHTML += `<div class="result">${results[i].text}</div>`;
  }
}

getBids();