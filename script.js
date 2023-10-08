const img = document.querySelector("img");
fetch(
  "https://api.giphy.com/v1/gifs/translate?api_key=3pBFAUCgXOsRO3EV6pnb87nZEwy8tita&s=cats&weirdness=4",
  { mode: "cors" }
)
  .then(function (response) {
    console.log("get json");
    return response.json();
  })
  .then(function (response) {
    console.log("set img src");
    img.src = response.data.images.original.url;
  })
  .then(function () {
    console.log("display btn");
    btn.style.display = "block";
  });
const btn = document.querySelector("button");
btn.onclick = function () {
  console.log("button clicked");
  btn.style.display = "none";
  fetch(
    "https://api.giphy.com/v1/gifs/translate?api_key=3pBFAUCgXOsRO3EV6pnb87nZEwy8tita&s=cats&weirdness=4",
    { mode: "cors" }
  )
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
      btn.style.display = "block";
    });
};
// TODO hide the button until the image is fully loaded.
