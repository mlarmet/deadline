const spanDays = document.querySelector("#days");
const spanHours = document.querySelector("#hours");
const spanMinutes = document.querySelector("#minutes");
const spanSeconds = document.querySelector("#seconds");

let deadLineDate = moment();

const paramsString = window.location.search;
const searchParams = new URLSearchParams(paramsString);

if (searchParams.has("date")) {
	const queryDate = moment(searchParams.get("date"));

	if (queryDate.isValid()) {
		deadLineDate = queryDate;
	}
}

const interval = setInterval(updateDate, 1000);

updateDate();

function updateDate() {
	const currentDate = moment();

	const duration = moment.duration(deadLineDate.diff(currentDate));

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
