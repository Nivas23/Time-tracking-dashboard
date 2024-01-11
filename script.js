function option() {
  //   let daily = 0,
  //     weekly = 0,
  //     monthly = 0;
  let data;
  let choice = event.target.id;
  let title=["work","play","study","exercise","social","selfcare"];
  fetch("http://localhost:3000/")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
      data = json;              "color: white"
      if (choice === "daily") {
        document.getElementById("daily").style = "color: white";
        document.getElementById("weekly").style = "color: hsl(236, 100%, 87%)";
        document.getElementById("monthly").style = "color: hsl(236, 100%, 87%)";

        document.getElementById("work-time").textContent =
          data[0].timeframes.daily.current + "hrs";
        document.getElementById("work-prev").textContent =
          "Yesterday - " + data[0].timeframes.daily.previous + "hrs";

        document.getElementById("play-time").textContent =
          data[1].timeframes.daily.current + "hrs";
        document.getElementById("play-prev").textContent =
          "Yesterday - " + data[1].timeframes.daily.previous + "hrs";

        document.getElementById("study-time").textContent =
          data[2].timeframes.daily.current + "hrs";
        document.getElementById("study-prev").textContent =
          "Yesterday - " + data[2].timeframes.daily.previous + "hrs";

        document.getElementById("exercise-time").textContent =
          data[3].timeframes.daily.current + "hrs";
        document.getElementById("exercise-prev").textContent =
          "Yesterday - " + data[3].timeframes.daily.previous + "hrs";

        document.getElementById("social-time").textContent =
          data[4].timeframes.daily.current + "hrs";
        document.getElementById("social-prev").textContent =
          "Yesterday - " + data[4].timeframes.daily.previous + "hrs";

        document.getElementById("selfcare-time").textContent =
          data[5].timeframes.daily.current + "hrs";
        document.getElementById("selfcare-prev").textContent =
          "Yesterday - " + data[5].timeframes.daily.previous + "hrs";
      } else if (choice === "weekly") {
        document.getElementById("daily").style = "color: hsl(236, 100%, 87%)";
        document.getElementById("weekly").style = "color: white";
        document.getElementById("monthly").style = "color: hsl(236, 100%, 87%)";

        document.getElementById("work-time").textContent =
          data[0].timeframes.weekly.current + "hrs";
        document.getElementById("work-prev").textContent =
          "Last week - " + data[0].timeframes.weekly.previous + "hrs";

        document.getElementById("play-time").textContent =
          data[1].timeframes.weekly.current + "hrs";
        document.getElementById("play-prev").textContent =
          "Last week - " + data[1].timeframes.weekly.previous + "hrs";

        document.getElementById("study-time").textContent =
          data[2].timeframes.weekly.current + "hrs";
        document.getElementById("study-prev").textContent =
          "Last week - " + data[2].timeframes.weekly.previous + "hrs";

        document.getElementById("exercise-time").textContent =
          data[3].timeframes.weekly.current + "hrs";
        document.getElementById("exercise-prev").textContent =
          "Last week - " + data[3].timeframes.weekly.previous + "hrs";

        document.getElementById("social-time").textContent =
          data[4].timeframes.weekly.current + "hrs";
        document.getElementById("social-prev").textContent =
          "Last week - " + data[4].timeframes.weekly.previous + "hrs";

        document.getElementById("selfcare-time").textContent =
          data[5].timeframes.weekly.current + "hrs";
        document.getElementById("selfcare-prev").textContent =
          "Last week - " + data[5].timeframes.weekly.previous + "hrs";
      } else {
        document.getElementById("daily").style = "color: hsl(236, 100%, 87%)";;
        document.getElementById("weekly").style = "color: hsl(236, 100%, 87%)";;
        document.getElementById("monthly").style = "color: white";
        for(let i=0;i<6;i++){

        }
        document.getElementById("work-time").textContent =
          data[0].timeframes.monthly.current + "hrs";
        document.getElementById("work-prev").textContent =
          "Last Month - " + data[0].timeframes.monthly.previous + "hrs";

        document.getElementById("play-time").textContent =
          data[1].timeframes.monthly.current + "hrs";
        document.getElementById("play-prev").textContent =
          "Last Month - " + data[1].timeframes.monthly.previous + "hrs";

        document.getElementById("study-time").textContent =
          data[2].timeframes.monthly.current + "hrs";
        document.getElementById("study-prev").textContent =
          "Last Month - " + data[2].timeframes.monthly.previous + "hrs";

        document.getElementById("exercise-time").textContent =
          data[3].timeframes.monthly.current + "hrs";
        document.getElementById("exercise-prev").textContent =
          "Last Month - " + data[3].timeframes.monthly.previous + "hrs";

        document.getElementById("social-time").textContent =
          data[4].timeframes.monthly.current + "hrs";
        document.getElementById("social-prev").textContent =
          "Last Month - " + data[4].timeframes.monthly.previous + "hrs";

        document.getElementById("selfcare-time").textContent =
          data[5].timeframes.monthly.current + "hrs";
        document.getElementById("selfcare-prev").textContent =
          "Last Month - " + data[5].timeframes.monthly.previous + "hrs";
      }
    });
}
