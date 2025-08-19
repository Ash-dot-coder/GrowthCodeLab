// ---------------------
// const promiseObj = fetch("text.txt");
// console.log(promiseObj);
// promiseObj.then((res) => console.log(res));
// promiseObj
//   .then((res) => {
// text method returns promise, if resoved will return text representation of body.
//     return res.text();
//   })
//   .then((data) => console.log(data));
// ---------------------

// ---------------------
// Removing Clutters
// fetch("text.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// ---------------------

// ---------------------
// Handling Errors
// -> Fetch API promise only rejects when we have network error (not in other cases).

// This is not a network error 👇🏻
// fetch("texxxxt.txt")
//   .then((res) => res.text())
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// ---------------------

// ---------------------
// Handling Errors (Real Code)

// fetch("texxxxt.txt")
//   .then((res) => {
//     if (!res.ok) throw Error(res.statusText);
//     return res.text();
//   })
//   .then((data) => console.log(data))
//   .catch((err) => console.log(err));
// ---------------------

// ---------------------
// Displaying Results to the (Browser)

// const result = document.querySelector(".result");
// fetch("text.txt")
//   .then((res) => {
//     if (!res.ok) throw Error(res.statusText);
//     return res.text();
//   })
//   .then((data) => (result.innerHTML = data))
//   .catch((err) => console.log(err));

// ---------------------

// ---------------------
// Using async/await (Without Error Handling)
const result = document.querySelector(".result");

async function readData() {
  try {
    const response = await fetch("text.txt");
    if (!response.ok) throw Error(response.statusText);
    const data = await response.text();
    result.textContent = data;
  } catch (error) {
    console.log(error);
  }
}

readData();
