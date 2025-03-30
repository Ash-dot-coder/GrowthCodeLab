const form = document.querySelector("form");
const resultDev = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  getWordInfo(form.elements[0].value);
});

const getWordInfo = async (word) => {
  try {
    resultDev.innerHTML = "Fetching Data";

    const response = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await response.json();
    let Definition = data[0].meanings[0].definitions[0];
    //   alert("Word:" + word);

    resultDev.innerHTML = `
  <h2><strong>Word:</strong>${data[0].word}</h2>
  <p class="partOfSpeech">${data[0].meanings[0].partOfSpeech}</p>
  <p> <strong>Meanings:</strong>${
    Definition.definition === undefined ? "Not Found" : Definition.definition
  }</p>
      <p><strong>Example:</strong>${
        Definition.example === undefined ? "Not Found" : Definition.example
      }</p>
          <p><strong>Antonyms:</strong></p>
          `;

    if (Definition.antonyms.length === 0) {
      resultDev.innerHTML += `<span>Not Found</span>`;
    } else {
      for (let i = 0; i < Definition.antonyms.length; i++) {
        resultDev.innerHTML += `${Definition.antonyms[i]}`;
      }
    }

    //   Add Button
    resultDev.innerHTML += `<div><a href= "${data[0].sourceUrls}" target="_blank"> Read More</a></div>`;
  } catch (error) {
    resultDev.innerHTML = `<p>Sorry, the world couldn't be found!</p>`;
  }
  console.log(data);
};
