const url = "https://api.dictionaryapi.dev/api/v2/entries/en/";
const result = document.querySelector(".result");
const sound = document.querySelector("#sound");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  let search = document.querySelector("#search").value;
  fetch(`${url}${search}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      result.innerHTML = `
    <div class="searched-word">
    <h3>${search}</h3>
    <button class="icon" onclick="playSound()"><i class="fa fa-volume-up"></i></button>
  </div>
  <div class="word-detail">
    <p>${data[0].meanings[0].partOfSpeech}</p>
     <p> ${data[0].phonetic}</p>
  </div>
  <div class="meaning">
    <p>${data[0].meanings[0].definitions[0].definition}</p>
    <div class="example">
      <p>${data[0].meanings[0].definitions[0].example || " "}</p>
    </div>
  </div>
    `;
      sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
    })
    .catch(() => {
      result.innerHTML = `<h3 class="error">Could't find the Word</h3>`;
    });
});
function playSound() {
  sound.play();
}
// https://www.youtube.com/watch?v=PUkgK7TI0x0&ab_channel=CodingArtist
