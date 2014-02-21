$.getJSON('https://ffmobilestage.fitsvcs.com/DashboardSvc/GetMongoDoc.svc/data/AutoSAARChart/000000/999999?callback=?', function (data) {
        var highchartsOptions = Highcharts.setOptions(Highcharts.theme);


        $('#AutoSAARChart').highcharts({
            credits: {
                enabled: false
            },
            chart: {
                type: 'column',
                height: 270
            },
            title: {
                text: null
            },
            xAxis: {
                categories: [
                    '2007',
                    '2008',
                    '2009',
                    '2010',
                    '2011',
                    '2012',
                    '2013',
                    '2014',
                    '2015'
                ]
            },
            tooltip: {
                formatter: function () {
                    return "$" + Highcharts.numberFormat(this.y * 0.1, 1);
                    }
            },
            yAxis: {
                min: 0,
                title: {
                    text: 'Units, Millions'
                }
            },
            series: data
        });
    });
