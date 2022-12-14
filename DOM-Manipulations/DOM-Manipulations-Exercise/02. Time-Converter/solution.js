function attachEventsListeners() {
  let inputdays = document.getElementById("days");
  let inputHours = document.getElementById("hours");
  let inputMinutes = document.getElementById("minutes");
  let inputSeconds = document.getElementById("seconds");

//   console.log(inputdays.value);
//   console.log(inputHours.value);
//   console.log(inputMinutes.value);
//   console.log(inputSeconds.value);

  document.getElementById('daysBtn').addEventListener('click', onConvert);
  document.getElementById('hoursBtn').addEventListener('click', onConvert);;
  document.getElementById('minutesBtn').addEventListener('click', onConvert);;
  document.getElementById('secondsBtn').addEventListener('click', onConvert);;

  let rations = {
      days : 1,
      hours : 24,
      minutes : 1440,
      seconds : 86400,
  }
  function convert(value, units) {
      let days = value / rations[units]; //1

      return {
          days: days,//1
          hours: days*rations.hours,//24
          minutes: days*rations.minutes,
          seconds: days*rations.seconds
      }
  }
  function onConvert(event) {
      let input = event.target.parentElement.querySelector('input[type="text"]')

      let time = convert(Number(input.value), input.id);

      inputdays.value = time.days;
      inputHours.value = time.hours;
      inputMinutes.value = time.minutes;
      inputSeconds.value = time.seconds;

  }
}
