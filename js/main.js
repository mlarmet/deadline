const spanDays = document.querySelector("#days");
const spanHours = document.querySelector("#hours");
const spanMinutes = document.querySelector("#minutes");
const spanSeconds = document.querySelector("#seconds");

const firedDate = moment("2024-08-30");

const interval = setInterval(updateDate, 1000);

function updateDate() {
	const currentDate = moment();

	let duration = moment.duration(firedDate.diff(currentDate));

	const totalDays = Math.floor(duration.asDays());
	const hours = duration.hours();
	const minutes = duration.minutes();
	const seconds = duration.seconds();

	spanDays.textContent = addZero(totalDays);
	spanHours.textContent = addZero(hours);
	spanMinutes.textContent = addZero(minutes);
	spanSeconds.textContent = addZero(seconds);
}

function addZero(number) {
	return number.toString().padStart(2, "0");
}
