dayjs.extend(dayjs_plugin_duration);

// function myFunction() {
//     var mylist = document.getElementById("myList");
//     document.getElementById("demo").value = mylist.options[mylist.selectedIndex].text;
//   }

function activateCountdown(date) {
  const targetDate = dayjs(date);

  document.getElementById("vCount").querySelector(".until__event").textContent = `Counting down until ${ targetDate.format("YYYY MM DD")}`;

  setInterval(() => {
    const now = dayjs();
    const duration = dayjs.duration(targetDate.diff(now));

    if (duration.asMilliseconds() <= 0) return;

    document.getElementById("vCount").querySelector(".until__numeric--seconds").textContent = duration.seconds().toString().padStart(2, "0");
    document.getElementById("vCount").querySelector(".until__numeric--minutes").textContent = duration.minutes().toString().padStart(2, "0");
    document.getElementById("vCount").querySelector(".until__numeric--hours").textContent = duration.hours().toString().padStart(2, "0");
    document.getElementById("vCount").querySelector(".until__numeric--days").textContent = duration.asDays().toFixed(0).toString().padStart(2, "0");
  }, 250);
}

document.querySelector("form")
  .addEventListener('submit', function(event) {
    event.preventDefault();
    activateCountdown(document.getElementById("input__time").value);
  })