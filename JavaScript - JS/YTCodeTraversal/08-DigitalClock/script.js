const time = document.getElementById("time");
const timeFormat = document.getElementById("timeFormat");

document.addEventListener("DOMContentLoaded", () => {
  setInterval(showTime, 1000);
});

const showTime = () => {
  let date = new Date();

  let hr = date.getHours();
  let mins = date.getMinutes();
  let secs = date.getSeconds();
  let ms = date.getMilliseconds();

  hr = hr < 10 ? `0${hr}` : hr;
  mins = mins < 10 ? `0${mins}` : mins;
  secs = secs < 10 ? `0${secs}` : secs;
  ms = ms < 10 ? `0${ms}` : ms;

  time.innerHTML = `${hr} : ${mins} : ${secs} : ${ms} `;

  timeFormat.innerHTML = hr > 12 ? "PM" : "AM";
  //   console.log(hr + "hours " + mins + "mins " + sec + "secs " + ms + "ms ");
};
