

  new Chart(document.getElementById("lenguajes-programacion"), {
    type: 'pie',
    data: {
      labels: ["Javascript", "Pyton", "Java", "C/C++", "PHP", "C#", "Visual", "Kotlin", "Swift", "Go", "Dart", "Objective C", "Ruby", "Rust", "Lua"],
      datasets: [{
        label: "Population (millions)",
        backgroundColor: ["#3e95cd", "#8e5ea2", "#3cba9f", "#e8c3b9", "#c45850", "#d6cb56", "#4b5beb", "#4bddeb", "#ebc34b", "#41731e", "#520b32", "#55faf2", "#4e916d", "#a88900", "#a80600" ],
        data: [16.4, 11.3, 9.6, 7.5, 7.3, 7.1, 3.6, 2.9, 2.5, 2, 1.4, 1.4, 1.4, 1.1, 0.8]
      }]
    },
    options: {
        responsive:false,        
        plugins: {
          title: {
              display: true,
              text: 'Tamaño de las comunidades de lenguajes de programación 2021'
          }
      }
    }
});



new Chart(document.getElementById("frameworks"), {
  type: 'line',
  data: {
    labels: [2012, 2013, 2014, 2015, 2016, 2017, 2018, 2019, 2020, 2021],
    datasets: [{ 
        data: [3, 20, 40, 43, 57, 73, 75, 71, 70, 30],
        label: "Angular",
        borderColor: "#F4B400",
        fill: false
      }, { 
        data: [1, 1, 4, 6, 21, 43, 64, 73, 92, 54],
        label: "React",
        borderColor: "#DB4437",
        fill: false
      }, { 
        data: [1, 1, 1, 2, 8, 16, 24, 29, 21, 16],
        label: "Vue",
        borderColor: "#4285F4",
        fill: false
      }, { 
        data: [20, 28, 32, 40, 51, 52, 49, 47, 36, 31],
        label: "Node",
        borderColor: "#0F9D58",
        fill: false
      }
    ]
  },
  options: {
    responsive:false,        
    plugins: {
      title: {
          display: true,
          text: 'Evolución de notoriedad en búsquedas en Google'
      }
  }
}
});

