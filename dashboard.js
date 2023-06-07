google.charts.load('current', { packages: ['corechart'] });
google.charts.setOnLoadCallback(getSpreadsheetData);

function getSpreadsheetData() {
    var spreadsheetId = '1Wecu2GiZ35NtaxV9nGIj-Ig2TOnHIkkg9_E9gIYjSCA';
    var range = 'Sales by City and Category!A1:E6';

    var query = new google.visualization.Query('https://docs.google.com/spreadsheets/d/' + spreadsheetId + '/gviz/tq?gid=0&range=' + range);
    query.send(handleQueryResponse);
}

function handleQueryResponse(response) {
    if (response.isError()) {
        console.error('Error: ' + response.getMessage());
        return;
    }

    var data = response.getDataTable();
    drawCharts(data);
}

function drawCharts(data) {
    var options = {
        title: 'Sales by City and Category',
        width: 500,
        height: 300
    };

    var chart1 = new google.visualization.ColumnChart(document.getElementById('chart1'));
    chart1.draw(data, options);

    var chart2 = new google.visualization.PieChart(document.getElementById('chart2'));
    chart2.draw(data, options);

    var chart3 = new google.visualization.BarChart(document.getElementById('chart3'));
    chart3.draw(data, options);

    var chart4 = new google.visualization.LineChart(document.getElementById('chart4'));
    chart4.draw(data, options);
}
