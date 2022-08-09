const favNumber = 7;
const URL = "http://numbersapi.com";

// 1.
async function getURL() {
  let data = await $.getJSON(`${URL}/${favNumber}?json`);
  console.log(data);
}
getURL();

// 2.
const favNumbers = [7, 11, 22];
async function favoNum() {
  let data = await $.getJSON(`${URL}/${favNumbers}?json`);
  console.log(data);
}
favoNum();

// 3.
async function numArr() {
  let facts = await Promise.all(
    Array.from({ length: 4 }, () => $.getJSON(`${URL}/${favNumber}?json`))
  );
  facts.forEach(data => {
    $('body').append(`<p>${data.text}</p>`);
  });
}
numArr();
