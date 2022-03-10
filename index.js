const body = document.querySelector('body'),
sidebar = body.querySelector('nav'),
toggle = body.querySelector(".toggle"),
searchBtn = body.querySelector(".search-box"),
modeSwitch = body.querySelector(".toggle-switch"),
modeText = body.querySelector(".mode-text"),
toggleNav = body.querySelector(".menu-link")



toggle.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

toggleNav.addEventListener("click" , () =>{
sidebar.classList.toggle("close");
})

searchBtn.addEventListener("click" , () =>{
sidebar.classList.remove("close");
})

var chartColor2 = '#707070';

modeSwitch.addEventListener("click" , () =>{
body.classList.toggle("dark");

if(body.classList.contains("dark")){
modeText.innerText = "Light mode";
chartColor2 = '#ccc'
}else{
modeText.innerText = "Dark mode";
chartColor2 = '#707070'
}
});

// LINE CHART

const chartColor = () => {
    if (body.classList.contains("dark")) {
      return '#ffff';
    } else {
      return '#707070';
    }
  }



// margin for legends, plugin 
const legendMargin = {
    id: 'legendMargin',
    beforeInit(chart, legend, options) {
        console.log(chart.legend.fit)
        const fitValue = chart.legend.fit;

        chart.legend.fit = function fit() {
            fitValue.bind(chart.legend)();
            return this.height += 10;
        }
    }
}

const labels = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec'
  ];

  const data = {
    labels: labels,
    datasets: [{
      label: 'MRR',
      backgroundColor: 'rgb(255, 99, 132)',
      borderColor: 'rgb(255, 99, 132)',
      data: [100, 200, 250, 300, 450, 700, 900, 950, 1200, 1150, 1000, 1300],
    },
    {
        label: 'Expenses',
        backgroundColor: 'rgb(0, 0, 255)',
        borderColor: 'rgb(0, 0, 255)',
        
        data: [110, 250, 300, 200, 110, 180, 200, 190, 310, 250, 220, 250],
      }]
  };

  const config = {
    type: 'line',
    data:  data,
    options: {
        responsive: true,
        
        scales: {
            x: {
                display: true,
                title: {
                display: true,
                color: chartColor2,
                font: {
                    family: 'Poppins',
                    size: 20,
                    weight: 'bold',
                    lineHeight: 1.2,
                    color: chartColor,
                    
                },
                padding: {top: 20, left: 0, right: 0, bottom: 0}
                },
                grid: {
                color: chartColor,
                }
            },
            y: {
                display: true,
                title: {
                    display: true,
                    color: chartColor2,
                },
                grid: {
                    drawBorder: false,
                    color: chartColor,
                },
            },
        },

    plugins: 
{
      
      legend: {
        position: 'top',
        labels: {
            color: chartColor,
            fontSize: 18
        }
      },
      title: {
        display: true,
        color: chartColor2,
        fontSize: 24,
      }
    }
  },

    }
  




// DONUT CHART 

const labelsDonut = [
    'Product1',
    'Product2',
    'Product4',
    'Product3',
  ];

  const dataDonut = {
    labels: labelsDonut,
    datasets: [{
      label: 'My First dataset',
      backgroundColor: [ 'rgb(255, 99, 132)',
      'rgb(54, 162, 235)',
      'rgb(255, 205, 86)',
      'rgb(0, 128, 0)'],
      borderColor: 'rgba(0,0,0,0)',
      data: [20, 20, 50,10],
    },
 ]
  };

  const configDonut = {
    type: 'doughnut',
    data: dataDonut,
    options: {
        responsive: false,
    }
  };

// COLUMNS CHART


const labelsColumns = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
  ];

  const dataColumns = {
    labels: labelsColumns,
    datasets: [{
      label: 'Product4',
      data: [65, 59, 80, 81, 56, 55, 40],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
      ],
      borderColor: [
        'rgb(255, 99, 132)',
      ],
      borderWidth: 1,
    },
 ]
  };

  const configColumns = {
    type: 'bar',
    data: dataColumns,
    options: {
        responsive: true,
        layout: {
            padding: 0,
        },
          scales: {
            x: {
                display: true,   
                },
                grid: {
                color: chartColor,
                },
            },
            y: {
                beginAtZero: true,
                display: true,
                title: {
                    display: true,
                    color: chartColor2,
                },
                grid: {
                    drawBorder: false,
                    color: chartColor,
                },
            },
        },
    };



  function start(){
    var ctx = document.getElementById("myChart").getContext("2d");
    var LineChart = new Chart(ctx, config);

    var ctx2 = document.getElementById("Donut").getContext("2d");
    var DonutChart = new Chart(ctx2, configDonut);

    var ctx2 = document.getElementById("Columns").getContext("2d");
    var ColumnsChart = new Chart(ctx2, configColumns);
}

window.onload = start;
