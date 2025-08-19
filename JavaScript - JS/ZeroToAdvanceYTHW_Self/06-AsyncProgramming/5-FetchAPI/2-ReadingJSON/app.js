const result = document.querySelector(".result");

async function renderData() {
  try {
    const response = await fetch("data.json");
    if (!response.ok) throw Error(response.statusText);
    const data = await response.json();
    result.textContent = data.manga;
    // result.textContent = data.type;
    // result.textContent = data.genre;
    // result.textContent = data.volume;
    // result.textContent = data.chapter;
  } catch (error) {
    console.log(error);
  }
}

renderData();
