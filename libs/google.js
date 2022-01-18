google.charts.load('current', {packages: ['corechart', 'bar']});
google.charts.setOnLoadCallback(drawTitleSubtitle);

function drawTitleSubtitle() {
    var data = google.visualization.arrayToDataTable([
    ['Lenguajes backend', '2019', '2020'],
    ['Python', 29.21, 30.34],
    ['JAVA', 19.9, 17.23],
    ['JavaScript', 8.39, 8.65],
    ['C#', 7.23, 5.88],
    ['PHP', 6.69, 6.11],
    ['C/C++', 5.8, 6.44]        
    ]);

    var options = {
        chart: {
            title: ''
        },           
        bars: 'vertical'
    };
    var materialChart = new google.charts.Bar(document.getElementById('lenguajs-backend'));
    materialChart.draw(data, options);
}