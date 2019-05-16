anychart.onDocumentReady(function () {
    let data = [
        { from: "A", to: "C", weight: 800 },
        { from: "A", to: "S", weight: 500 },
        { from: "A", to: "N", weight: 100 },
        { from: "A", to: "T", weight: 100 },
        { from: "B", to: "N", weight: 1000 },
        { from: "B", to: "T", weight: 500}
    ];

    const sankey_chart = anychart.sankey(data);

    sankey_chart.nodeWidth("30%");
    sankey_chart.title("Movement");
    sankey_chart.container("container");
    sankey_chart.draw();
});

// https://hackernoon.com/create-javascript-sankey-diagram-b68c0d508a38

// anychart.onDocumentReady(function () {
//     //creating the data
//     var data = [
//         { from: "Google", to: "Facebook", weight: 20000 },
//         { from: "Google", to: "Twitter", weight: 17000 },
//         { from: "Google", to: "YouTube", weight: 8000 },
//         { from: "Google", to: "Wikipedia", weight: 11000 },
//         { from: "Bing", to: "Facebook", weight: 7500 },
//         { from: "Bing", to: "Twitter", weight: 5000 },
//         { from: "Bing", to: "Wikipedia", weight: 4000 }
//     ];
//     //calling the Sankey function
//     var sankey_chart = anychart.sankey(data);
//     //customizing the width of the nodes
//     sankey_chart.nodeWidth("20%");
//     //setting the chart title
//     sankey_chart.title("Simple Sankey Diagram Example");
//     //customizing the vertical padding of the nodes
//     sankey_chart.nodePadding(20);
//     //setting the container id
//     sankey_chart.container("container");
//     //initiating drawing the Sankey diagram
//     sankey_chart.draw();
// });