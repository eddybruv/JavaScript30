const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hoursHand = document.querySelector('.hour-hand');

function setDate() {
  const now = new Date();

  const seconds = now.getSeconds();
  const secondsDegrees = ((seconds / 60) * 360) + 90; //plus 90 to offset the initial 90 degrees.
  secondHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const minutes = now.getMinutes();
  const minutesDegrees = ((minutes / 60) * 360) + 90;
  minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;

  const hour = now.getHours();
  const hourDegrees = (hour / 60) * 360 + 90;
  hoursHand.style.transform = `rotate(${hourDegrees}deg)`;

  //bug: fix reset when 'second-hand' hits 60
}

setInterval(setDate, 1000)