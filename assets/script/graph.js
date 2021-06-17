// Graph
var ctx = document.getElementById("myChart4").getContext("2d");
Chart.defaults.global.legend.position = "bottom";
Chart.defaults.global.legend.labels.usePointStyle = true;
Chart.defaults.global.legend.labels.boxWidth = 15;
Chart.defaults.global.tooltips.backgroundColor = "#000";
Chart.Legend.prototype.afterFit = function () {
    this.width = this.width - 488;
};
var myChart = new Chart(ctx, {
    type: "bar",
    data: {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "July", "Aug", "Sep", "Oct", "Nov", "Dec"],
        datasets: [
            {
                label: "Revenue (=)",
                backgroundColor: "#01e7ff",
                data: [110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110, 110],
                barThickness: 2,
            },
            {
                label: "Expense (+)",
                backgroundColor: "#ff6868",
                data: [100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100],
            },
            {
                label: "Loss (-)",
                backgroundColor: "#021668",
                data: [150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150, 150],
            },
        ],
    },
    options: {
        tooltips: {
            displayColors: true,
            callbacks: {
                mode: "x",
            },
        },
        scales: {
            xAxes: [
                {
                    gridLines: {
                        drawBorder: false,
                    },
                    barThickness: 10,
                    stacked: true,
                },
            ],
            yAxes: [
                {
                    stacked: true,
                    ticks: {
                        beginAtZero: true,
                    },
                    type: "linear",
                    gridLines: {
                        display: false,
                    },
                },
            ],
        },
        responsive: true,
        maintainAspectRatio: false,
        legend: { position: "bottom" },
    },
});
