// -------------------
// Using "this" as a global scope
console.log(window);
console.log(this);
console.log(this === window);

window.animeName = "Monster";
this.mangaName = "Vagabound";

let fullSeries = function () {
  console.log(
    `Hey, i stoped watching ${this.animeName} & start reading ${this.mangaName}`
  );
};

fullSeries();

// -------------------

// -------------------
// Using "this" in object
const historicalManga = {
  title: "Vagabound",
  character: "Miyamoto Mushashi",
  fullInfo: function () {
    // this keyword will now refer to the owner obj which in this case is
    // the (obj)
    // return this;
    return `Manga: ${this.title} -> Character: ${this.character}`;
  },
};

const infoCatch = historicalManga.fullInfo();
console.log(infoCatch);
// -------------------

// -------------------
// Using "this" keyword in arrow method
function callThis() {
  return this;
}

const res = callThis();
console.log(res);
// -------------------

// -------------------
// Using "this" keyword in arrow method
const darkAnime = {
  title: "Berserk",
  regularFunction: function () {
    return this.title;
  },
  arrowFunction: () => this.title,
};

console.log(darkAnime.regularFunction());
console.log(darkAnime.arrowFunction());
// -------------------

// -------------------
let eren = {
  type: "Anime",
  anime: "AOT",
  firstName: "Eren",
  lastName: "Yeager",
  fewInfo: function () {
    // let firstName = "Eren",
    // let lastName = "Yeager",
    console.log(
      `The GOAT "${this.type}" - '${this.anime}' has main character: '${this.firstName} ${this.lastName}'. `
    );
  },
};
eren.fewInfo();
// -------------------
