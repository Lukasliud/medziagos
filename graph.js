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
function createChart(ilgis, savitojiVarza, storis = 0.1) {

    var outputChart = document.getElementById('outputChart').getContext('2d');
    var priklausomybe = new Chart(outputChart, {
        type: 'line',
        data: {
            labels: getLabels(ilgis),
            datasets: [{
                label: 'Medžiagos varžos priklausomybė nuo storio',
                data: initData(ilgis, savitojiVarza, storis)
            }]
        },
        options : {
            scales: {
              yAxes: [{
                scaleLabel: {
                  display: true,
                  labelString: 'Varža, Ω'
                }
              }],
              xAxes: [{
                  scaleLabel: {
                      display: true,
                      labelString: 'Ilgis, m'
                  }
              }]
            }
          }
    });
}

let getLabels = ilgis => {
    let diff = ilgis / 10,
        min = ilgis - diff * 5,
        toReturn = [];
    for (let i = 0; i <= 10; i++) {
        let str = (min + diff * i).toFixed(2);
        toReturn.push(Number(str));
    }
    return toReturn;
}

let initData = (ilgis, savitojiVarza, storis) => { 
    let count = 10,
        toReturn = [],
        diff = ilgis / count,
        min = ilgis - diff * 5;
    for (let i = 0; i <= count; i++) {
        let xVal = min + diff * i;
        toReturn.push({
            x: xVal,
            y: savitojiVarza * xVal / storis
        });
    }
    return toReturn;
}