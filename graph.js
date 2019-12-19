var medziagosChart = document.getElementById('chart').getContext('2d');
var graph = new Chart(medziagosChart, {
    type: 'line',
    data: {
        labels: ['0,0', '5,0', '10,0', '15,0', '20,0', '25,0', '30,0', '35,0', '40,0', '45,0'],
        datasets: [{
            label: 'Temperatūros pokytis',
            data: ['0', '0.03', '0.05', '0.08', '0.10', '0.14', '0.16', '0.18', '0.20', '0.22'],
            borderWidth: 1
        }]
    },
    options: {
        responsive: true,
        scales: {
            yAxes: [{
                display: true,
                scaleLabel:{
                    display: true,
                    labelString: 'Ilgio pokytis ΔL, mm'
                },
                ticks: {
                    beginAtZero: true
                }
            }],
            xAxes: [{
                display:true,
                scaleLabel:{
                    display: true,
                    labelString: 'Temperatūros pokytis t₁ - t₀, °C'
                },
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});

// priklausomybe
function createChart(y, x) {
    var outputChart = document.getElementById('lukasLiudzius').getContext('2d');
    var priklausomybe = new Chart(outputChart, {
        type: 'line',
        data: {
            labels: y,
            datasets: [{
                label: 'Medžiagos varžos priklausomybė nuo storio',
                data: x
            }]
        },
        options : {
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Ilgio pokytis ΔL, mm'
                }
              }],
              xAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: 'Temperatūros pokytis t₁ - t₀, °C'
                  }
              }]
            }
          }
    });
}