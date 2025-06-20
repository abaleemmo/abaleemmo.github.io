const data = {
    actual: 1000,
  projected: 1573,
  limits: [500, 1000, 2500]
};

const actualProgress = document.getElementById("actual-progress");
const projectedProgress = document.getElementById("projected-progress");

const barLength = Math.max(...data.limits);
const actualPercentage = (data.actual / barLength) * 100;
const projectedPercentage = ((data.projected - data.actual) / barLength) * 100;

actualProgress.style.width = `${actualPercentage}%`;
projectedProgress.style.width = `${projectedPercentage}%`;