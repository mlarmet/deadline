const spanDays = document.querySelector("#days");
const spanHours = document.querySelector("#hours");
const spanMinutes = document.querySelector("#minutes");
const spanSeconds = document.querySelector("#seconds");

const firedDate = moment("2024-08-30 12:00:00");

const interval = setInterval(updateDate, 1000);

updateDate();

function updateDate() {
	const currentDate = moment();

	const duration = moment.duration(firedDate.diff(currentDate));

	const totalDays = Math.floor(duration.asDays());
	const hours = duration.hours();
	const minutes = duration.minutes();
	const seconds = duration.seconds();

	spanDays.textContent = padStartZero(totalDays);
	spanHours.textContent = padStartZero(hours);
	spanMinutes.textContent = padStartZero(minutes);
	spanSeconds.textContent = padStartZero(seconds);
}

function padStartZero(number) {
	return number.toString().padStart(2, "0");
}
