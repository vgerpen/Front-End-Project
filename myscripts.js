async function FetchOccupation() {
  let url = "https://vgerpen.github.io/API/OccupationData.json";
  try {
    let res = await fetch(url);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function LoadOccupationInfo() {
  let unserializedJsonObj = await FetchOccupation();
  let jsonObj = JSON.parse("[" + JSON.stringify(unserializedJsonObj) + "]"); // Add square brackets to serialize object

  let occupationTitle = "";
  let regionTitle = "";
  let summaryJobsYear = "";
  let summaryJobsRegional = "";
  let summaryJobsNationalAvg = "";
  let compareNationalAvg = "";
  let hourlyRegionalEarnings = "";
  let hourlyNationalAverage = "";

  let trendStartYear = "";
  let trendEndYear = "";

  let employingIndustriesYear = "";
  let employingIndustriesJobs = "";

  var trendComparisonRegional = "";

  let FirstYear = "";
  let EndYear = "";
  let RegionFirstYearJobNum = "";
  let StateFirstYearJobNum = "";
  let NationFirstYearJobNum = "";
  let RegionLastYearJobNum = "";
  let StateLastYearJobNum = "";
  let NationLastYearJobNum = "";
  let RegionJobChange = "";
  let StateJobChange = "";
  let NationJobChange = "";
  let RegionPercentChange = "";
  let StatePercentChange = "";
  let NationPercentComparison = "";
  let BottomJobTitle = "";
  let BottomJobsYear = "";
  let BottomJobsYearTwo = "";
  let BottomJobsYearThree = "";
  let FirstInd = "";
  let SecondInd = "";
  let ThirdInd = "";
  let FourthInd = "";
  let FifthInd = "";
  let FirstIndJobNums = "";
  let SecondIndJobNums = "";
  let ThirdIndJobNums = "";
  let FourthIndJobNums = "";
  let FifthIndJobNums = "";
  let FirstPercentofInd = "";
  let SecondPercentofInd = "";
  let ThirdPercentofInd = "";
  let FourthPercentofInd = "";
  let FifthPercentofInd = "";
  let FirstPercentofTotalInd = "";
  let SecondPercentofTotalInd = "";
  let ThirdPercentofTotalInd = "";
  let FourthPercentofTotalInd = "";
  let FifthPercentofTotalInd = "";

  jsonObj.map((jsonObj) => {
    occupationTitle = `${jsonObj.occupation.title}`;
    regionTitle = `${jsonObj.region.title}`;
    summaryJobsYear = `${jsonObj.summary.jobs.year}`;

    summaryJobsRegional = `${jsonObj.summary.jobs.regional}`;
    summaryJobsNationalAvg = `${jsonObj.summary.jobs.national_avg}`;
    compareNationalAvg = `${Math.round(
      (jsonObj.summary.jobs.regional / jsonObj.summary.jobs.national_avg) * 100
    )}`;

    RegionPercentChange = `${(
      (RegionJobChange / RegionFirstYearJobNum) *
      100
    ).toFixed(1)}`;

    hourlyRegionalEarnings = `${jsonObj.summary.earnings.regional}`;
    hourlyNationalAverage = `${jsonObj.summary.earnings.national_avg}`;
    trendStartYear = `${jsonObj.trend_comparison.start_year}`;

    trendEndYear = `${jsonObj.trend_comparison.end_year}`;
    employingIndustriesYear = `${jsonObj.employing_industries}`;

    trendComparisonRegional = `${jsonObj.trend_comparison.regional}`;

    FirstYear = `${jsonObj.trend_comparison.start_year + " Jobs"}`;
    EndYear = `${jsonObj.trend_comparison.end_year + " Jobs"}`;

    RegionFirstYearJobNum = `${jsonObj.trend_comparison.regional[0]}`;
    StateFirstYearJobNum = `${jsonObj.trend_comparison.state[0]}`;
    NationFirstYearJobNum = `${jsonObj.trend_comparison.nation[0]}`;
    RegionLastYearJobNum = `${jsonObj.trend_comparison.regional[5]}`;
    StateLastYearJobNum = `${jsonObj.trend_comparison.state[5]}`;
    NationLastYearJobNum = `326205`;
    RegionJobChange = `${
      jsonObj.trend_comparison.regional[5] -
      jsonObj.trend_comparison.regional[0]
    }`;
    StateJobChange = `${
      jsonObj.trend_comparison.state[5] - jsonObj.trend_comparison.state[0]
    }`;
    NationJobChange = NationLastYearJobNum - NationFirstYearJobNum;
    RegionPercentChange = `${(
      (RegionJobChange / RegionFirstYearJobNum) *
      100
    ).toFixed(1)}`;
    StatePercentChange = `${(
      (StateJobChange / StateFirstYearJobNum) *
      100
    ).toFixed(1)}`;
    NationPercentChange = `${(
      (NationJobChange / NationFirstYearJobNum) *
      100
    ).toFixed(1)}`;
    BottomJobTitle = `${jsonObj.occupation.title}`;
    BottomJobsYear = `${jsonObj.employing_industries.year}`;
    BottomJobsYearTwo = `${jsonObj.employing_industries.year}`;
    BottomJobsYearThree = `${jsonObj.employing_industries.year}`;
    FirstInd = `${jsonObj.employing_industries.industries[0].title}`;
    SecondInd = `${jsonObj.employing_industries.industries[1].title}`;
    ThirdInd = `${jsonObj.employing_industries.industries[2].title}`;
    FourthInd = `${jsonObj.employing_industries.industries[3].title}`;
    FifthInd = `${jsonObj.employing_industries.industries[4].title}`;
    FirstIndJobNums = `${jsonObj.employing_industries.industries[0].in_occupation_jobs}`;
    SecondIndJobNums = `${jsonObj.employing_industries.industries[1].in_occupation_jobs}`;
    ThirdIndJobNums = `${jsonObj.employing_industries.industries[2].in_occupation_jobs}`;
    FourthIndJobNums = `${jsonObj.employing_industries.industries[3].in_occupation_jobs}`;
    FifthIndJobNums = `${jsonObj.employing_industries.industries[4].in_occupation_jobs}`;
    FirstPercentofInd = `${
      (
        (jsonObj.employing_industries.industries[0].in_occupation_jobs /
          jsonObj.summary.jobs.regional) *
        100
      ).toFixed(1) + "%"
    }`;
    SecondPercentofInd = `${
      (
        (jsonObj.employing_industries.industries[1].in_occupation_jobs /
          jsonObj.summary.jobs.regional) *
        100
      ).toFixed(1) + "%"
    }`;
    ThirdPercentofInd = `${
      (
        (jsonObj.employing_industries.industries[2].in_occupation_jobs /
          jsonObj.summary.jobs.regional) *
        100
      ).toFixed(1) + "%"
    }`;
    FourthPercentofInd = `${
      (
        (jsonObj.employing_industries.industries[3].in_occupation_jobs /
          jsonObj.summary.jobs.regional) *
        100
      ).toFixed(1) + "%"
    }`;
    FifthPercentofInd = `${
      (
        (jsonObj.employing_industries.industries[4].in_occupation_jobs /
          jsonObj.summary.jobs.regional) *
        100
      ).toFixed(1) + "%"
    }`;
    FirstPercentofTotalInd = `${
      (
        (jsonObj.employing_industries.industries[0].in_occupation_jobs /
          jsonObj.employing_industries.industries[0].jobs) *
        100
      ).toFixed(1) + "%"
    }`;
    SecondPercentofTotalInd = `${
      (
        (jsonObj.employing_industries.industries[1].in_occupation_jobs /
          jsonObj.employing_industries.industries[1].jobs) *
        100
      ).toFixed(1) + "%"
    }`;
    ThirdPercentofTotalInd = `${
      (
        (jsonObj.employing_industries.industries[2].in_occupation_jobs /
          jsonObj.employing_industries.industries[2].jobs) *
        100
      ).toFixed(1) + "%"
    }`;
    FourthPercentofTotalInd = `${
      (
        (jsonObj.employing_industries.industries[3].in_occupation_jobs /
          jsonObj.employing_industries.industries[3].jobs) *
        100
      ).toFixed(1) + "%"
    }`;
    FifthPercentofTotalInd = `${
      (
        (jsonObj.employing_industries.industries[4].in_occupation_jobs /
          jsonObj.employing_industries.industries[4].jobs) *
        100
      ).toFixed(1) + "%"
    }`;
  });

  //container = document.querySelector(".OverviewHeader");
  // container.innerHTML = occupationTitle + " in " + regionTitle;

  let container = document.querySelector(".OverViewHeaderSub");
  container.innerHTML = occupationTitle + " in " + regionTitle;

  container = document.querySelector(".SummaryHeader");
  container.innerHTML = "Summary for " + occupationTitle;

  container = document.querySelector(".jobsNumber");
  container.innerHTML = formatObj.format(summaryJobsRegional);

  container = document.querySelector(".jobsYear");
  container.innerHTML = "Jobs(" + summaryJobsYear + ")";

  container = document.querySelector(".jobsCompareNationalAvg");
  container.innerHTML = compareNationalAvg + "%";

  container = document.querySelector(".direction");
  if (compareNationalAvg >= 0) {
    container.style.color = "#37da2f";
    container.innerHTML = " above ";
  } else {
    container.style.color = "#df1e1e";
    container.innerHTML = " below ";
  }

  container = document.querySelector(".nationDirection");
  if (NationPercentChange >= 0) {
    container.style.color = "#37da2f";
    container.innerHTML = "+" + NationPercentChange + "%";
  } else {
    container.style.color = "#df1e1e";
    container.innerHTML = "-" + NationPercentChange + "%";
  }

  container = document.querySelector(".hourlyRegionalAverage");
  container.innerHTML = "$" + hourlyRegionalEarnings + "/hr";

  container = document.querySelector(".hourlyNationalAverage");
  container.innerHTML = "$" + hourlyNationalAverage + "/hr";

  container = document.querySelector(".PercentChangeTrend");
  container.innerHTML =
    "% Change" + "(" + trendStartYear + "-" + trendEndYear + ")";

  container = document.querySelector(".FirstYear");
  container.innerHTML = FirstYear;

  container = document.querySelector(".EndYear");
  container.innerHTML = EndYear;

  container = document.querySelector(".DynRegionPercentChange");
  if (RegionPercentChange >= 0) {
    container.style.color = "#37da2f";
    container.innerHTML = "+" + RegionPercentChange + "%";
  } else {
    container.style.color = "#df1e1e";
    container.innerHTML = "-" + RegionPercentChange + "%";
  }

  container = document.querySelector(".RegionFirstYearJobNum");
  container.innerHTML = formatObj.format(RegionFirstYearJobNum);

  container = document.querySelector(".StateFirstYearJobNum");
  container.innerHTML = formatObj.format(StateFirstYearJobNum);

  container = document.querySelector(".NationFirstYearJobNum");
  container.innerHTML = formatObj.format(NationFirstYearJobNum);

  container = document.querySelector(".RegionLastYearJobNum");
  container.innerHTML = formatObj.format(RegionLastYearJobNum);

  container = document.querySelector(".StateLastYearJobNum");
  container.innerHTML = formatObj.format(StateLastYearJobNum);

  container = document.querySelector(".NationLastYearJobNum");
  container.innerHTML = formatObj.format(NationLastYearJobNum);

  container = document.querySelector(".RegionJobChange");
  container.innerHTML = formatObj.format(RegionJobChange);

  container = document.querySelector(".StateJobChange");
  container.innerHTML = formatObj.format(StateJobChange);

  container = document.querySelector(".NationJobChange");
  container.innerHTML = formatObj.format(NationJobChange);

  container = document.querySelector(".RegionPercentChange");
  container.innerHTML = RegionPercentChange + "%";

  container = document.querySelector(".StatePercentChange");
  container.innerHTML = StatePercentChange + "%";

  container = document.querySelector(".NationPercentChange");
  container.innerHTML = NationPercentChange + "%";

  container = document.querySelector(".BottomJobTitle");
  container.innerHTML = BottomJobTitle;

  container = document.querySelector(".BottomJobsYear");
  container.innerHTML = BottomJobsYear;

  container = document.querySelector(".BottomJobsYearTwo");
  container.innerHTML = BottomJobsYearTwo;

  container = document.querySelector(".BottomJobsYearThree");
  container.innerHTML = BottomJobsYearThree;

  container = document.querySelector(".FirstInd");
  container.innerHTML = FirstInd;

  container = document.querySelector(".SecondInd");
  container.innerHTML = SecondInd;

  container = document.querySelector(".ThirdInd");
  container.innerHTML = ThirdInd;

  container = document.querySelector(".FourthInd");
  container.innerHTML = FourthInd;

  container = document.querySelector(".FifthInd");
  container.innerHTML = FifthInd;

  container = document.querySelector(".FirstIndJobNums");
  container.innerHTML = formatObj.format(FirstIndJobNums);

  container = document.querySelector(".SecondIndJobNums");
  container.innerHTML = formatObj.format(SecondIndJobNums);

  container = document.querySelector(".ThirdIndJobNums");
  container.innerHTML = formatObj.format(ThirdIndJobNums);

  container = document.querySelector(".FourthIndJobNums");
  container.innerHTML = formatObj.format(FourthIndJobNums);

  container = document.querySelector(".FifthIndJobNums");
  container.innerHTML = formatObj.format(FifthIndJobNums);

  container = document.querySelector(".FirstPercentofInd");
  container.innerHTML = FirstPercentofInd;

  container = document.querySelector(".SecondPercentofInd");
  container.innerHTML = SecondPercentofInd;

  container = document.querySelector(".ThirdPercentofInd");
  container.innerHTML = ThirdPercentofInd;

  container = document.querySelector(".FourthPercentofInd");
  container.innerHTML = FourthPercentofInd;

  container = document.querySelector(".FifthPercentofInd");
  container.innerHTML = FifthPercentofInd;

  container = document.querySelector(".FirstPercentofTotalInd");
  container.innerHTML = FirstPercentofTotalInd;

  container = document.querySelector(".SecondPercentofTotalInd");
  container.innerHTML = SecondPercentofTotalInd;

  container = document.querySelector(".ThirdPercentofTotalInd");
  container.innerHTML = ThirdPercentofTotalInd;

  container = document.querySelector(".FourthPercentofTotalInd");
  container.innerHTML = FourthPercentofTotalInd;

  container = document.querySelector(".FifthPercentofTotalInd");
  container.innerHTML = FifthPercentofTotalInd;

  //container.style.color = "#37da2f";
  //style='background-size: 90% 100%'

  container = document.querySelector(".industry0");
  container.style.backgroundSize = FirstPercentofInd + " 100%";

  container = document.querySelector(".industry1");
  container.style.backgroundSize = SecondPercentofInd + " 100%";

  container = document.querySelector(".industry2");
  container.style.backgroundSize = ThirdPercentofInd + " 100%";

  container = document.querySelector(".industry3");
  container.style.backgroundSize = FourthPercentofInd + " 100%";

  container = document.querySelector(".industry4");
  container.style.backgroundSize = FifthPercentofInd + " 100%";
}

async function LoadChart() {
  let unserializedJsonObj = await FetchOccupation();
  let jsonObj = JSON.parse("[" + JSON.stringify(unserializedJsonObj) + "]"); // Add square brackets to serialize object

  let StartYear = "";
  let EndYear = "";
  let RegionDataPoints = "";
  let StateDataPoints = "";
  let NationDataPoints = "";

  jsonObj.map((jsonObj) => {
    StartYear = `${jsonObj.trend_comparison.start_year}`;
    EndYear = `${jsonObj.trend_comparison.end_year}`;
    RegionDataPoints = `${jsonObj.trend_comparison.regional}`;
    StateDataPoints = `${jsonObj.trend_comparison.state}`;
    NationDataPoints = `${jsonObj.trend_comparison.nation}`;
  });

  let years = [];
  for (let i = StartYear; i <= EndYear; i++) {
    years.push(i);
  }

  RegionDataPoints = RegionDataPoints.split(",");
  StateDataPoints = StateDataPoints.split(",");
  NationDataPoints = NationDataPoints.split(",");

  // Add additional dummy datapoint to fillout array
  NationDataPoints.push("326205");

  // Calculate percent change ((NewValue-OldValue)/OldValue)*100
  let RegionPercentChange = RegionDataPoints.map(function (x) {
    return (((x - RegionDataPoints[0]) / RegionDataPoints[0]) * 100).toFixed(1);
  });
  let StatePercentChange = StateDataPoints.map(function (x) {
    return (((x - StateDataPoints[0]) / StateDataPoints[0]) * 100).toFixed(1);
  });
  let NationPercentChange = NationDataPoints.map(function (x) {
    return (((x - NationDataPoints[0]) / NationDataPoints[0]) * 100).toFixed(1);
  });

  var circleImg = new Image();
  circleImg.src = "Assets/Circle.png";
  var squareImg = new Image();
  squareImg.src = "Assets/Square.png";
  var triangleImg = new Image();
  triangleImg.src = "Assets/Triangle.png";

  let myChart = document.getElementById("myChart").getContext("2d");
  let lineChart = new Chart(myChart, {
    type: "line",
    data: {
      labels: years,
      datasets: [
        {
          label: "Region",
          pointStyle: circleImg,
          pointRadius: 1,
          borderColor: "rgb(0,76,123)",
          fill: false,
          data: RegionPercentChange,
        },
        {
          label: "State",
          pointStyle: squareImg,
          pointRadius: 1,
          borderColor: "rgb(51,153,255)",
          fill: false,
          data: StatePercentChange,
        },
        {
          label: "Nation",
          pointStyle: triangleImg,
          pointRadius: 1,
          borderColor: "rgb(153,204,255)",
          fill: false,
          data: NationPercentChange,
        },
      ],
    },
    options: {
      scales: {
        yAxes: [
          {
            scaleLabel: {
              display: true,
              labelString: "Percent Change",
            },
          },
        ],
        xAxes: [
          {
            scaleLabel: {
              display: false,
              labelString: "",
            },
          },
        ],
      },
    },
  });
}
Chart.defaults.global.legend.display = false;
Chart.defaults.global.tooltips.enabled = false;

window.onload = function () {
  formatObj = new Intl.NumberFormat("en-US");
  LoadOccupationInfo();
  LoadChart();
};
