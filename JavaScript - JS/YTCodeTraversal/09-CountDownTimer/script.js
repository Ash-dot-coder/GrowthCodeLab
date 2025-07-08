const days = document.getElementById("days");
const hours = document.getElementById("hours");
const mins = document.getElementById("mins");
const secs = document.getElementById("secs");

const formatTime = (time) => {
  return time < 10 ? `0${time}` : time;
};

const updateCountDown = (deadLine) => {
  const currentTime = new Date();
  const timeDifference = deadLine - currentTime; // milliseconds

  //   Calculate Days, Hours, Mins, Secs from timedifference
  let calSecs = Math.floor(timeDifference / 1000) % 60;
  let calMins = Math.floor(timeDifference / 1000 / 60) % 60;
  let calHours = Math.floor(timeDifference / 1000 / 60 / 60) % 24;
  let calDays = Math.floor(timeDifference / 1000 / 60 / 60 / 24);

  days.textContent = formatTime(calDays);
  mins.textContent = formatTime(calMins);
  hours.textContent = formatTime(calHours);
  secs.textContent = formatTime(calSecs);

  //   console.log(calDays, calHours, calMins, calSecs);
  //   console.log(timeDifference);
  //   console.log(calSecs);
};

const countDown = (td) => {
  setInterval(() => updateCountDown(td), 1000);
};

const targetDate = new Date("July 11 2025 04:44");
countDown(targetDate);
