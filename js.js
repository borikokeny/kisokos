// Fetching API

const url = "https://api.noroff.dev/docs/json/api/v1/auction/listings";

async function getBids() {
  const response = await fetch(url);
  // const results = await response.json();
  // console.log(results);
  console.log(response);
}

getBids();