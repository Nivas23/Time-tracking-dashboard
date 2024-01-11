function option() {
  let daily = 0,
    weekly = 0,
    monthly = 0;
  let data;
  let choice = event.target.id;
  let title = ["work", "play", "study", "exercise", "social", "selfcare"];
  let color = ["color: hsl(236, 100%, 87%)", "color: white"];
  let time = { daily: "Yesterday", weekly: "Last Week", monthly: "Last Month" };
  fetch("http://localhost:3000/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      data = json;
      if (choice === "daily") {
        daily++;
        weekly = 0;
        monthly = 0;
      } else if (choice === "weekly") {
        daily = 0;
        weekly++;
        monthly = 0;
      } else {
        daily = 0;
        weekly = 0;
        monthly++;
      }
      document.getElementById("daily").style = color[daily];
      document.getElementById("weekly").style = color[weekly];
      document.getElementById("monthly").style = color[monthly];
      for (let i = 0; i < 6; i++) {
        document.getElementById(`${title[i]}-time`).textContent =
          data[i].timeframes[`${choice}`].current + "hrs";
        document.getElementById(`${title[i]}-prev`).textContent =
          `${time[choice]} - ` +
          data[i].timeframes[`${choice}`].previous +
          "hrs";
      }
    });
}
