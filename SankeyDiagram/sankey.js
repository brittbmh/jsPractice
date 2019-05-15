anychart.onDocumentReady(function () {
    let data = [
        { from: "Minnesota", to: "Iowa", weight: 50000 },
        { from: "Minnesota", to: "South Dakota", weight: 5000 },
        { from: "Minnesota", to: "North Dakota", weight: 1000 },
        { from: "Minnesota", to: "Tennessee", weight: 1000 },
        { from: "Minnesota", to: "Wisconsin", weight: 100000 },
        { from: "Wisconsin", to: "Tennessee", weight: 500}
    ];

    const sankey_chart = anychart.sankey(data);

    sankey_chart.nodeWidth("20%");
    sankey_chart.title("Movement Between States");
    sankey_chart.nodePadding(10);
    sankey_chart.container("container");
    sankey_chart.draw();
});