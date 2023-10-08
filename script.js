const img = document.querySelector("img");
const next = document.getElementById("loadNext");
const search = document.getElementById("search");
const searchBox = document.getElementById("searchInput");
searchBox.value = "";
let fetchTerm = "cats";
let previousSearch = "cats";

function buildFetch(fetchTerm) {
  return (
    "https://api.giphy.com/v1/gifs/translate?api_key=3pBFAUCgXOsRO3EV6pnb87nZEwy8tita&s=" +
    fetchTerm +
    "&weirdness=4"
  );
}

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
    img.onload = () => {
      console.log("display btn");
      next.style.display = "block";
    };
  });

next.onclick = function () {
  console.log("next button clicked");
  next.style.display = "none";
  fetch(buildFetch(previousSearch), { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
      console.log("set img src");
      img.onload = () => {
        console.log("display next btn");
        next.style.display = "block";
      };
    });
};

search.onclick = function () {
  console.log(searchBox.value);
  previousSearch = searchBox.value;
  fetch(buildFetch(searchBox.value), { mode: "cors" })
    .then(function (response) {
      return response.json();
    })
    .then(function (response) {
      img.src = response.data.images.original.url;
      console.log("set img src");
      img.onload = () => {
        console.log("display next btn");
        next.style.display = "block";
      };
    });
  searchBox.value = "";
};
